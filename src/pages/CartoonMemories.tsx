import VHSOverlay from "@/components/VHSOverlay";
import { ArrowLeft, Tv } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartoonMemories = () => {
  const navigate = useNavigate();

  const cartoons = [
    {
      title: "Tom & Jerry",
      description: "The never-ending chase that taught us slapstick comedy could be an art form. No dialogue needed.",
      year: "1940-Present",
    },
    {
      title: "Pokémon",
      description: "Gotta catch 'em all! We traded cards at recess and debated which starter was the best choice.",
      year: "1997",
    },
    {
      title: "The Powerpuff Girls",
      description: "Sugar, spice, and everything nice. Three pint-sized superheroes saving Townsville before bedtime.",
      year: "1998",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-retro-peach/20 via-retro-cream to-retro-mustard/30 relative">
      <VHSOverlay />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/memories')}
          className="flex items-center gap-2 text-retro-charcoal hover:text-retro-peach transition-colors mb-8 font-sans"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Categories
        </button>

        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <Tv className="w-16 h-16 text-retro-mustard animate-flicker" />
          </div>
          <h1 className="font-retro text-3xl md:text-5xl mb-4 text-retro-charcoal">
            Cartoons We Watched
          </h1>
          <p className="font-sans text-lg text-retro-charcoal/80">
            Saturday mornings that made us laugh
          </p>
        </div>

        <div className="space-y-6">
          {cartoons.map((cartoon) => (
            <div key={cartoon.title} className="retro-card">
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-retro text-xl text-retro-charcoal">
                  {cartoon.title}
                </h2>
                <span className="pixel-border px-3 py-1 text-xs font-retro text-retro-mustard bg-retro-cream rounded">
                  {cartoon.year}
                </span>
              </div>
              <p className="font-sans text-retro-charcoal/80">
                {cartoon.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-retro-charcoal/10 rounded-lg border-2 border-retro-charcoal/20">
          <p className="font-sans text-center text-retro-charcoal italic">
            "Remember rushing home after school just to catch your favorite show? 
            Those were the days when patience was learned through weekly episodes."
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartoonMemories;
