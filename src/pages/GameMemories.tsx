import VHSOverlay from "@/components/VHSOverlay";
import { ArrowLeft, Gamepad2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GameMemories = () => {
  const navigate = useNavigate();

  const games = [
    {
      title: "Super Mario Bros",
      description: "The iconic plumber who taught us that rescuing princesses requires jumping skills, timing, and lots of retries.",
      year: "1985",
      lesson: "Never give up, no matter how many times you fall in the pit",
    },
    {
      title: "Tetris",
      description: "Falling blocks that taught us the importance of organization and quick decision-making under pressure.",
      year: "1984",
      lesson: "Life keeps throwing blocks at you; arrange them wisely",
    },
    {
      title: "Sonic the Hedgehog",
      description: "Gotta go fast! The blue blur showed us that speed and confidence can overcome any obstacle.",
      year: "1991",
      lesson: "Sometimes you need to slow down to collect the rings",
    },
    {
      title: "Street Fighter II",
      description: "Hadouken! The fighting game that united friends and rivals at the arcade, teaching combo mastery.",
      year: "1991",
      lesson: "Practice makes perfect; every pro started as a button masher",
    },
    {
      title: "Contra",
      description: "Up, up, down, down, left, right, left, right, B, A - if you know, you know. The ultimate co-op experience.",
      year: "1987",
      lesson: "Teamwork and knowing the cheat codes make life easier",
    },
    {
      title: "Snake",
      description: "Simple yet unforgettable fun on our Nokia phones. One wrong turn and game over! Pure addictive gameplay.",
      year: "1997",
      lesson: "Sometimes the simplest things bring the most joy",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-retro-cream via-retro-mustard/20 to-retro-peach/30 relative">
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
            <Gamepad2 className="w-16 h-16 text-retro-peach animate-pixel" />
          </div>
          <h1 className="font-retro text-3xl md:text-5xl mb-4 text-retro-charcoal">
            Games We Played
          </h1>
          <p className="font-sans text-lg text-retro-charcoal/80">
            The days before Wi-Fi and in-app purchases
          </p>
        </div>

        <div className="space-y-6">
          {games.map((game) => (
            <div key={game.title} className="retro-card group">
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-retro text-xl text-retro-charcoal group-hover:text-retro-peach transition-colors">
                  {game.title}
                </h2>
                <span className="pixel-border px-3 py-1 text-xs font-retro text-retro-teal bg-retro-cream rounded">
                  {game.year}
                </span>
              </div>
              <p className="font-sans text-retro-charcoal/80 mb-3">
                {game.description}
              </p>
              <p className="font-sans text-sm italic text-retro-peach border-l-4 border-retro-peach pl-4">
                💡 {game.lesson}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-retro text-sm text-retro-teal">
            Press Start to Continue...
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameMemories;
