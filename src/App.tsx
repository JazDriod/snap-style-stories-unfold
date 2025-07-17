
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import WeddingPhotography from "./pages/WeddingPhotography";
import PreWeddingShoot from "./pages/PreWeddingShoot";
import PortfolioShots from "./pages/PortfolioShots";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/wedding-photography" element={<WeddingPhotography />} />
            <Route path="/pre-wedding-shoot" element={<PreWeddingShoot />} />
            <Route path="/portfolio-shots" element={<PortfolioShots />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
