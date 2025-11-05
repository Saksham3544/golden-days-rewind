import VHSOverlay from "@/components/VHSOverlay";
import { ArrowLeft, Music, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MusicMemories = () => {
  const navigate = useNavigate();

  const musicItems = [
    {
      title: "Cassette Tapes",
      description: "When mixtapes were our playlists, made with love and careful timing to catch the perfect song from the radio.",
      era: "80s-90s",
    },
    {
      title: "Walkman",
      description: "The ultimate portable music player. Heavy, ate batteries for breakfast, but made us feel like music stars.",
      era: "1979-2000s",
    },
    {
      title: "CD Collections",
      description: "Organizing our CDs alphabetically, cleaning them with our shirts, and the heartbreak of a scratched favorite.",
      era: "90s-2000s",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-retro-teal/20 via-retro-cream to-retro-peach/20 relative">
      <VHSOverlay />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/memories')}
          className="flex items-center gap-2 text-retro-charcoal hover:text-retro-teal transition-colors mb-8 font-sans"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Categories
        </button>

        <div className="text-center mb-12">
          <div className="inline-block mb-4 animate-float">
            <Music className="w-16 h-16 text-retro-teal" />
          </div>
          <h1 className="font-retro text-3xl md:text-5xl mb-4 text-retro-charcoal">
            Music We Loved
          </h1>
          <p className="font-sans text-lg text-retro-charcoal/80">
            Before streaming, we had something even better
          </p>
        </div>

        <div className="space-y-6">
          {musicItems.map((item) => (
            <div key={item.title} className="retro-card group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Play className="w-6 h-6 text-retro-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h2 className="font-retro text-xl text-retro-charcoal">
                    {item.title}
                  </h2>
                </div>
                <span className="pixel-border px-3 py-1 text-xs font-retro text-retro-peach bg-retro-cream rounded">
                  {item.era}
                </span>
              </div>
              <p className="font-sans text-retro-charcoal/80 ml-9">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-retro text-sm text-retro-peach animate-flicker">
            ♫ Now Playing: Memories ♫
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicMemories;
