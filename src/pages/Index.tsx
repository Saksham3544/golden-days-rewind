import { useNavigate } from "react-router-dom";
import RetroButton from "@/components/RetroButton";
import VHSOverlay from "@/components/VHSOverlay";
import QuoteSection from "@/components/QuoteSection";
import { Play, Music, Tv, Smartphone } from "lucide-react";
import heroImage from "@/assets/retro-hero.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <VHSOverlay />
      
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center px-4"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-retro-cream/90 via-retro-peach/80 to-retro-teal/90" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Floating decorative elements */}
          <div className="absolute -top-20 left-10 animate-float opacity-60">
            <Music className="w-16 h-16 text-retro-mustard" />
          </div>
          <div className="absolute -top-10 right-20 animate-float animation-delay-1000 opacity-60">
            <Tv className="w-20 h-20 text-retro-teal" />
          </div>
          <div className="absolute top-40 -right-10 animate-rotate opacity-40">
            <Smartphone className="w-12 h-12 text-retro-peach" />
          </div>
          
          {/* Main Content */}
          <h1 className="font-retro text-4xl md:text-6xl lg:text-7xl mb-6 text-retro-charcoal leading-tight animate-pixel">
            Rewind
          </h1>
          <p className="font-retro text-xl md:text-2xl mb-4 text-retro-charcoal opacity-90">
            Relive the Golden Days
          </p>
          <p className="font-sans text-lg md:text-xl mb-12 text-retro-charcoal max-w-2xl mx-auto">
            Step into the past and rediscover the magic of your childhood
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <RetroButton 
              icon={Play}
              onClick={() => navigate('/memories')}
              variant="primary"
            >
              Start the Journey
            </RetroButton>
            
            <RetroButton 
              icon={Play}
              onClick={() => navigate('/fun-zone')}
              variant="secondary"
            >
              Fun Zone & Quizzes
            </RetroButton>
          </div>
          
          {/* New Quick Access Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => navigate('/playable-games')}
              className="font-sans px-4 py-2 bg-retro-teal/80 text-retro-charcoal rounded-lg hover:bg-retro-teal transition-colors text-sm"
            >
              🎮 Play Retro Games
            </button>
            <button
              onClick={() => navigate('/music-player')}
              className="font-sans px-4 py-2 bg-retro-mustard/80 text-retro-charcoal rounded-lg hover:bg-retro-mustard transition-colors text-sm"
            >
              🎵 90s Music Player
            </button>
          </div>
        </div>
      </div>
      
      {/* Quote Section */}
      <QuoteSection />
      
      {/* Nostalgia Section */}
      <div className="relative bg-retro-peach/30 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-retro text-2xl md:text-3xl text-retro-charcoal mb-6 animate-flicker">
            "Do you remember..."
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="retro-card bg-retro-cream/50">
              <p className="font-sans text-retro-charcoal">
                📼 Recording your favorite shows on VHS tapes
              </p>
            </div>
            <div className="retro-card bg-retro-cream/50">
              <p className="font-sans text-retro-charcoal">
                📻 Waiting hours to record a song from the radio
              </p>
            </div>
            <div className="retro-card bg-retro-cream/50">
              <p className="font-sans text-retro-charcoal">
                🎮 Blowing on game cartridges to make them work
              </p>
            </div>
          </div>
          <p className="font-sans text-lg text-retro-charcoal/80 italic">
            "Those were the days when happiness was simpler, and memories were made, 
            not just captured on a phone."
          </p>
        </div>
      </div>
      
      {/* Quick Links Footer */}
      <div className="relative bg-retro-charcoal text-retro-cream py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-sans">
          <button 
            onClick={() => navigate("/playable-games")}
            className="hover:text-retro-teal transition-colors"
          >
            🎮 Games
          </button>
          <span className="text-retro-mustard">•</span>
          <button 
            onClick={() => navigate("/music-player")}
            className="hover:text-retro-teal transition-colors"
          >
            🎵 Music
          </button>
          <span className="text-retro-mustard">•</span>
          <button 
            onClick={() => navigate("/fun-zone")}
            className="hover:text-retro-peach transition-colors"
          >
            Fun Zone
          </button>
          <span className="text-retro-mustard">•</span>
          <button 
            onClick={() => navigate("/about")}
            className="hover:text-retro-peach transition-colors"
          >
            About
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
