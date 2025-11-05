import VHSOverlay from "@/components/VHSOverlay";
import { ArrowLeft, Tv } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartoonMemories = () => {
  const navigate = useNavigate();

  const cartoons = [
    {
      title: "Tom & Jerry",
      description: "The never-ending chase that taught us slapstick comedy could be an art form. No dialogue needed, just pure entertainment.",
      year: "1940-Present",
      quote: "The original frenemies before it was cool",
    },
    {
      title: "Pokémon",
      description: "Gotta catch 'em all! We traded cards at recess, debated Charizard vs Blastoise, and dreamed of being Pokémon trainers.",
      year: "1997",
      quote: "I want to be the very best, like no one ever was",
    },
    {
      title: "SpongeBob SquarePants",
      description: "Living in a pineapple under the sea taught us optimism, friendship, and the importance of loving what you do.",
      year: "1999",
      quote: "I'm ready! I'm ready! I'm ready!",
    },
    {
      title: "Dragon Ball Z",
      description: "Epic battles, power levels over 9000, and the belief that with enough determination, you can overcome anything.",
      year: "1989",
      quote: "The power comes in response to a need, not a desire",
    },
    {
      title: "Scooby-Doo",
      description: "Mystery-solving dog and his friends taught us that most monsters are just people in masks, and friendship solves everything.",
      year: "1969",
      quote: "Ruh-roh! And I would have gotten away with it too!",
    },
    {
      title: "The Powerpuff Girls",
      description: "Sugar, spice, and everything nice. Three pint-sized superheroes proving that girls can save the world before bedtime.",
      year: "1998",
      quote: "Saving the world before bedtime",
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
            <div key={cartoon.title} className="retro-card group">
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-retro text-xl text-retro-charcoal group-hover:text-retro-peach transition-colors">
                  {cartoon.title}
                </h2>
                <span className="pixel-border px-3 py-1 text-xs font-retro text-retro-mustard bg-retro-cream rounded">
                  {cartoon.year}
                </span>
              </div>
              <p className="font-sans text-retro-charcoal/80 mb-3">
                {cartoon.description}
              </p>
              <p className="font-sans text-sm italic text-retro-teal border-l-4 border-retro-teal pl-4">
                "{cartoon.quote}"
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
