import VHSOverlay from "@/components/VHSOverlay";
import { ArrowLeft, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-retro-cream via-retro-peach/20 to-retro-mustard/20 relative">
      <VHSOverlay />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-retro-charcoal hover:text-retro-peach transition-colors mb-8 font-sans"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="text-center mb-12">
          <div className="inline-block mb-4 animate-pixel">
            <Heart className="w-16 h-16 text-retro-peach" />
          </div>
          <h1 className="font-retro text-3xl md:text-5xl mb-4 text-retro-charcoal">
            About Rewind
          </h1>
        </div>

        <div className="retro-card max-w-3xl mx-auto">
          <div className="space-y-6 font-sans text-retro-charcoal/90 leading-relaxed">
            <p className="text-lg">
              <span className="font-bold text-retro-peach">Rewind</span> is a digital time machine 
              designed to bring back the joy of the past through design and storytelling.
            </p>
            
            <p>
              Every section captures a piece of our collective childhood memories — reminding us 
              how simple and special those days were. Before smartphones dominated our lives, 
              before streaming services gave us unlimited choices, before social media changed 
              how we connect.
            </p>
            
            <p>
              We had Saturday morning cartoons that couldn't be paused. Games with no save points. 
              Music on physical media we could hold. Gadgets built to last. And friendships formed 
              through shared experiences, not shared screens.
            </p>
            
            <div className="pt-6 border-t-2 border-retro-charcoal/10">
              <p className="text-center italic text-retro-teal">
                "The good old days weren't perfect, but they were ours."
              </p>
            </div>
            
            <div className="pt-6">
              <p className="text-sm text-center text-retro-charcoal/70">
                Created with <Heart className="w-4 h-4 inline text-retro-peach" /> for everyone 
                who remembers when life moved a little slower
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="font-retro text-sm text-retro-mustard">
            Keep the memories alive
          </p>
          <button
            onClick={() => navigate('/memories')}
            className="font-sans text-retro-teal hover:text-retro-peach transition-colors underline"
          >
            Explore more memories
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
