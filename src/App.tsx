import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MemoryCategories from "./pages/MemoryCategories";
import GameMemories from "./pages/GameMemories";
import MusicMemories from "./pages/MusicMemories";
import CartoonMemories from "./pages/CartoonMemories";
import GadgetMemories from "./pages/GadgetMemories";
import FunZone from "./pages/FunZone";
import PlayableGames from "./pages/PlayableGames";
import MusicPlayer from "./pages/MusicPlayer";
import About from "./pages/About";
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
          <Route path="/memories" element={<MemoryCategories />} />
          <Route path="/memories/games" element={<GameMemories />} />
          <Route path="/memories/music" element={<MusicMemories />} />
          <Route path="/memories/cartoons" element={<CartoonMemories />} />
          <Route path="/memories/gadgets" element={<GadgetMemories />} />
          <Route path="/fun-zone" element={<FunZone />} />
          <Route path="/playable-games" element={<PlayableGames />} />
          <Route path="/music-player" element={<MusicPlayer />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
