-- Create a table for tracking authentication events
CREATE TABLE public.auth_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  action_type TEXT NOT NULL CHECK (action_type IN ('signup', 'login', 'logout', 'password_reset')),
  ip_address INET,
  user_agent TEXT,
  success BOOLEAN NOT NULL DEFAULT true,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.auth_logs ENABLE ROW LEVEL SECURITY;

-- Create policies for auth logs
CREATE POLICY "Users can view their own auth logs" 
ON public.auth_logs 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "System can insert auth logs" 
ON public.auth_logs 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated users (admins) can view all logs
CREATE POLICY "Admins can view all auth logs" 
ON public.auth_logs 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Create index for better performance
CREATE INDEX idx_auth_logs_user_id ON public.auth_logs(user_id);
CREATE INDEX idx_auth_logs_created_at ON public.auth_logs(created_at DESC);
CREATE INDEX idx_auth_logs_action_type ON public.auth_logs(action_type);