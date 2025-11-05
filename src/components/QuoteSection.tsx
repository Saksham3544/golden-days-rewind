import { Heart, Star, Sparkles } from "lucide-react";

const QuoteSection = () => {
  const quotes = [
    {
      text: "Nostalgia is a file that removes the rough edges from the good old days.",
      author: "Doug Larson",
      icon: Heart,
    },
    {
      text: "The good old days were never that good, believe me. The good new days are today, and better days are coming tomorrow.",
      author: "Michael Josephson",
      icon: Star,
    },
    {
      text: "Remembering the past gives power to the present.",
      author: "Fay Weldon",
      icon: Sparkles,
    },
  ];

  return (
    <div className="py-16 bg-retro-charcoal/5">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-retro text-2xl md:text-3xl text-center mb-12 text-retro-charcoal">
          Words to Remember
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <div 
              key={index}
              className="retro-card text-center"
            >
              <quote.icon className="w-10 h-10 text-retro-peach mx-auto mb-4 animate-float" />
              <p className="font-sans text-retro-charcoal/90 italic mb-4 leading-relaxed">
                "{quote.text}"
              </p>
              <p className="font-sans text-sm text-retro-teal">
                — {quote.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
