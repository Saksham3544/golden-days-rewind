import MemoryCard from "@/components/MemoryCard";
import VHSOverlay from "@/components/VHSOverlay";
import { Gamepad2, Music, Tv, Smartphone, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gamesImage from "@/assets/games-card.jpg";
import musicImage from "@/assets/music-card.jpg";
import cartoonsImage from "@/assets/cartoons-card.jpg";
import gadgetsImage from "@/assets/gadgets-card.jpg";

const MemoryCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Games We Played",
      description: "The days before Wi-Fi",
      image: gamesImage,
      link: "/memories/games",
      icon: Gamepad2,
    },
    {
      title: "Music We Loved",
      description: "When mixtapes were our playlists",
      image: musicImage,
      link: "/memories/music",
      icon: Music,
    },
    {
      title: "Cartoons We Watched",
      description: "Saturday mornings that made us laugh",
      image: cartoonsImage,
      link: "/memories/cartoons",
      icon: Tv,
    },
    {
      title: "Gadgets We Used",
      description: "Technology we grew up with",
      image: gadgetsImage,
      link: "/memories/gadgets",
      icon: Smartphone,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-retro-cream via-retro-peach/30 to-retro-teal/30 relative">
      <VHSOverlay />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-retro-charcoal hover:text-retro-peach transition-colors mb-6 font-sans"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          
          <h1 className="font-retro text-3xl md:text-5xl mb-4 text-retro-charcoal">
            Memory Lane
          </h1>
          <p className="font-sans text-lg text-retro-charcoal/80 max-w-2xl">
            Choose a category and dive into the nostalgia of your favorite memories
          </p>
        </div>

        {/* Memory Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <MemoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoryCategories;
