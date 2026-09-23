import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InsightArticle from "./pages/InsightArticle";
import InsightLibrary from "./pages/InsightLibrary";
import Privacy from "./pages/Privacy";
import RouteEffects from "./components/navigation/RouteEffects";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="entaltek-theme">
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteEffects />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/soluciones" element={<InsightLibrary />} />
          <Route path="/soluciones/casos" element={<InsightLibrary />} />
          <Route path="/soluciones/guias" element={<InsightLibrary />} />
          <Route path="/soluciones/herramientas" element={<InsightLibrary />} />
          <Route path="/soluciones/:slug" element={<InsightArticle />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
