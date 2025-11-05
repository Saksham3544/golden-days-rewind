import VHSOverlay from "@/components/VHSOverlay";
import { ArrowLeft, Smartphone, Phone, HardDrive, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GadgetMemories = () => {
  const navigate = useNavigate();

  const gadgets = [
    {
      title: "Nokia 3310",
      description: "Indestructible. Legendary battery life. Snake game champion. The phone that could survive anything.",
      icon: Phone,
      year: "2000",
    },
    {
      title: "Floppy Disks",
      description: "1.44 MB of pure storage power. We saved our school projects and felt like tech wizards.",
      icon: HardDrive,
      year: "1970s-2000s",
    },
    {
      title: "Digital Camera",
      description: "Limited photos meant every shot counted. Then waiting to see how they turned out at home.",
      icon: Camera,
      year: "1990s-2000s",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-retro-mustard/20 via-retro-cream to-retro-teal/20 relative">
      <VHSOverlay />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/memories')}
          className="flex items-center gap-2 text-retro-charcoal hover:text-retro-mustard transition-colors mb-8 font-sans"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Categories
        </button>

        <div className="text-center mb-12">
          <div className="inline-block mb-4 animate-rotate" style={{ animationDuration: '30s' }}>
            <Smartphone className="w-16 h-16 text-retro-teal" />
          </div>
          <h1 className="font-retro text-3xl md:text-5xl mb-4 text-retro-charcoal">
            Gadgets We Used
          </h1>
          <p className="font-sans text-lg text-retro-charcoal/80">
            Technology we grew up with
          </p>
        </div>

        <div className="space-y-6">
          {gadgets.map((gadget) => (
            <div key={gadget.title} className="retro-card group">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <gadget.icon className="w-8 h-8 text-retro-teal group-hover:text-retro-peach transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="font-retro text-xl text-retro-charcoal">
                      {gadget.title}
                    </h2>
                    <span className="pixel-border px-3 py-1 text-xs font-retro text-retro-teal bg-retro-cream rounded whitespace-nowrap ml-4">
                      {gadget.year}
                    </span>
                  </div>
                  <p className="font-sans text-retro-charcoal/80">
                    {gadget.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-retro text-sm text-retro-mustard">
            Built Different. Built to Last.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GadgetMemories;
