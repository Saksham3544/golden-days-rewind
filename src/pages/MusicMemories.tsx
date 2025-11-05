import VHSOverlay from "@/components/VHSOverlay";
import { ArrowLeft, Music, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MusicMemories = () => {
  const navigate = useNavigate();

  const musicItems = [
    {
      title: "Cassette Tapes",
      description: "When mixtapes were our playlists, made with love and careful timing to catch the perfect song from the radio. Rewinding with a pencil was an art.",
      era: "80s-90s",
      memory: "Making a mixtape for someone was the ultimate way to show you cared",
    },
    {
      title: "Walkman",
      description: "The ultimate portable music player. Heavy, ate batteries for breakfast, but made us feel like music stars walking down the street.",
      era: "1979-2000s",
      memory: "Nothing beat the feeling of fresh batteries and your favorite album",
    },
    {
      title: "90s Boy Bands & Pop",
      description: "Backstreet Boys, NSYNC, Britney Spears - we knew every lyric, every dance move, and defended our favorite group with passion.",
      era: "1995-2005",
      memory: "Backstreet's back, alright! And we never got tired of it",
    },
    {
      title: "CD Collections",
      description: "Organizing CDs alphabetically, cleaning them with our shirts, burning custom mixes, and the heartbreak of a scratched favorite.",
      era: "90s-2000s",
      memory: "A 50-CD case was a badge of honor and a music library",
    },
    {
      title: "MTV & Music Videos",
      description: "When MTV actually played music videos. We rushed home to catch TRL countdowns and recorded our favorites on VHS.",
      era: "1990s-2000s",
      memory: "Video killed the radio star, and we loved every minute",
    },
    {
      title: "iPod Classic",
      description: "1000 songs in your pocket. The click wheel, the white earbuds, and the end of the CD era. A revolution in music.",
      era: "2001-2014",
      memory: "Scrolling through albums with that satisfying click wheel sound",
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
                  <Play className="w-6 h-6 text-retro-teal opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                  <h2 className="font-retro text-xl text-retro-charcoal group-hover:text-retro-teal transition-colors">
                    {item.title}
                  </h2>
                </div>
                <span className="pixel-border px-3 py-1 text-xs font-retro text-retro-peach bg-retro-cream rounded whitespace-nowrap ml-2">
                  {item.era}
                </span>
              </div>
              <p className="font-sans text-retro-charcoal/80 ml-9 mb-3">
                {item.description}
              </p>
              <p className="font-sans text-sm italic text-retro-mustard ml-9 border-l-4 border-retro-mustard pl-4">
                ♫ {item.memory}
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
