
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Types from "./pages/Types";
import Signs from "./pages/Signs";
import Consequences from "./pages/Consequences";
import Help from "./pages/Help";
import Stories from "./pages/Stories";
import Resources from "./pages/Resources";
import ParentsGuide from "./pages/ParentsGuide";
import Prevention from "./pages/Prevention";
import Teachers from "./pages/Teachers";
import Chat from "./pages/Chat";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/types" element={<Types />} />
          <Route path="/signs" element={<Signs />} />
          <Route path="/consequences" element={<Consequences />} />
          <Route path="/help" element={<Help />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/parents-guide" element={<ParentsGuide />} />
          <Route path="/prevention" element={<Prevention />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;