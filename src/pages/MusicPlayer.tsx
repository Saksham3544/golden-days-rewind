import VHSOverlay from "@/components/VHSOverlay";
import { ArrowLeft, Play, Pause, SkipForward, SkipBack, Volume2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

interface Song {
  id: number;
  title: string;
  artist: string;
  year: string;
  genre: string;
  youtubeId: string;
}

const MusicPlayer = () => {
  const navigate = useNavigate();
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const songs: Song[] = [
    {
      id: 1,
      title: "Dil Hai Chota Sa",
      artist: "Kumar Sanu",
      year: "1996",
      genre: "Bollywood Romance",
      youtubeId: "P2s1Cl23oik"
    },
    {
      id: 2,
      title: "Tujhe Dekha To",
      artist: "Kumar Sanu & Lata Mangeshkar",
      year: "1995",
      genre: "Bollywood Romance",
      youtubeId: "cNV5hLSa9H8"
    },
    {
      id: 3,
      title: "Pehla Nasha",
      artist: "Udit Narayan & Sadhana Sargam",
      year: "1992",
      genre: "Bollywood Romance",
      youtubeId: "Ki41AKu0iHc"
    },
    {
      id: 4,
      title: "Ek Ladki Ko Dekha",
      artist: "Kumar Sanu",
      year: "1994",
      genre: "Bollywood Romance",
      youtubeId: "IAIGnS9BPKs"
    },
    {
      id: 5,
      title: "Chura Ke Dil Mera",
      artist: "Kumar Sanu & Alka Yagnik",
      year: "1994",
      genre: "Bollywood Romance",
      youtubeId: "Yqj1_V90KJo"
    },
    {
      id: 6,
      title: "Bahon Ke Darmiyan",
      artist: "Hariharan & Anuradha Paudwal",
      year: "1995",
      genre: "Bollywood Romance",
      youtubeId: "kHYYfKAQdHA"
    },
    {
      id: 7,
      title: "Aankh Mila Ke",
      artist: "Kumar Sanu",
      year: "1992",
      genre: "Bollywood Romance",
      youtubeId: "s-_nUaV4mKs"
    },
    {
      id: 8,
      title: "Dheere Dheere Se",
      artist: "Kumar Sanu & Alka Yagnik",
      year: "1990",
      genre: "Bollywood Romance",
      youtubeId: "Mcs2xEZ6K8o"
    }
  ];

  const currentSong = songs[currentSongIndex];

  const playNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  };

  const playPrevious = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-retro-teal/20 via-retro-cream to-retro-mustard/30 relative">
      <VHSOverlay />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-retro-charcoal hover:text-retro-teal transition-colors mb-8 font-sans"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="text-center mb-12">
          <div className="inline-block mb-4 animate-pulse">
            <Volume2 className="w-16 h-16 text-retro-teal" />
          </div>
          <h1 className="font-retro text-4xl md:text-6xl lg:text-7xl mb-6 text-retro-charcoal leading-tight">
            Nostalgic Music Player
          </h1>
          <p className="font-sans text-lg text-retro-charcoal/80">
            90s Bollywood Hits - Kumar Sanu & More!
          </p>
        </div>

        {/* Music Player Card */}
        <div className="retro-card max-w-3xl mx-auto mb-8">
          <div className="aspect-video bg-retro-charcoal rounded-lg mb-6 overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/${currentSong.youtubeId}?autoplay=${isPlaying ? 1 : 0}&modestbranding=1&rel=0&playsinline=1`}
              title={currentSong.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <div className="text-center mb-6">
            <h2 className="font-retro text-2xl text-retro-charcoal mb-2">
              {currentSong.title}
            </h2>
            <p className="font-sans text-lg text-retro-teal mb-1">
              {currentSong.artist}
            </p>
            <div className="flex items-center justify-center gap-3 text-sm font-sans text-retro-charcoal/60">
              <span>{currentSong.year}</span>
              <span>•</span>
              <span>{currentSong.genre}</span>
            </div>
            <a
              href={`https://www.youtube.com/watch?v=${currentSong.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-3 px-3 py-1 rounded-md bg-retro-cream hover:bg-retro-peach/40 text-retro-charcoal transition-colors text-xs font-sans"
              aria-label="Open current song on YouTube"
            >
              Open on YouTube
            </a>
          </div>

          {/* Player Controls */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={playPrevious}
              className="p-3 rounded-full bg-retro-cream hover:bg-retro-teal transition-colors"
            >
              <SkipBack className="w-5 h-5 text-retro-charcoal" />
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-4 rounded-full bg-retro-teal hover:bg-retro-peach transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-retro-charcoal" />
              ) : (
                <Play className="w-6 h-6 text-retro-charcoal" />
              )}
            </button>
            
            <button
              onClick={playNext}
              className="p-3 rounded-full bg-retro-cream hover:bg-retro-teal transition-colors"
            >
              <SkipForward className="w-5 h-5 text-retro-charcoal" />
            </button>
          </div>

          <p className="text-center font-sans text-sm text-retro-charcoal/60">
            Track {currentSongIndex + 1} of {songs.length}
          </p>
        </div>

        {/* Playlist */}
        <div className="retro-card max-w-3xl mx-auto">
          <h3 className="font-retro text-xl text-retro-charcoal mb-4">
            Playlist
          </h3>
          <div className="space-y-2">
            {songs.map((song, index) => (
              <button
                key={song.id}
                onClick={() => setCurrentSongIndex(index)}
                className={`w-full text-left p-4 rounded-lg transition-all font-sans ${
                  index === currentSongIndex
                    ? "bg-retro-teal text-retro-charcoal"
                    : "bg-retro-cream hover:bg-retro-peach/30 text-retro-charcoal"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{song.title}</p>
                    <p className="text-sm opacity-80">{song.artist}</p>
                  </div>
                  <span className="text-xs opacity-60">{song.year}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Nostalgic Message */}
        <div className="mt-12 text-center retro-card max-w-2xl mx-auto bg-retro-mustard/20">
          <p className="font-retro text-retro-peach mb-3">
            ♫ Remember When... ♫
          </p>
          <p className="font-sans text-retro-charcoal/80">
            We waited for our favorite songs on the radio, recorded them on cassettes, 
            and played them until the tape wore out. These melodies are more than music – 
            they're time machines to our most precious memories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
