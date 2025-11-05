import VHSOverlay from "@/components/VHSOverlay";
import { ArrowLeft, HelpCircle, Trophy, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Quiz {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  funFact: string;
}

const FunZone = () => {
  const navigate = useNavigate();
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const quizzes: Quiz[] = [
    {
      id: 1,
      category: "Retro Gaming",
      question: "Which classic game used the famous cheat code: ↑↑↓↓←→←→BA?",
      options: ["Super Mario Bros", "Contra", "Street Fighter", "Pac-Man"],
      correctAnswer: 1,
      funFact: "The Konami Code became one of gaming's most famous secrets!",
    },
    {
      id: 2,
      category: "90s Cartoons",
      question: "What year did Pokémon first air on television?",
      options: ["1995", "1997", "1999", "2001"],
      correctAnswer: 1,
      funFact: "Pokémon became a global phenomenon and is still going strong today!",
    },
    {
      id: 3,
      category: "Classic Gadgets",
      question: "What was the storage capacity of a standard floppy disk?",
      options: ["1.44 KB", "1.44 MB", "14.4 MB", "144 MB"],
      correctAnswer: 1,
      funFact: "Today's apps are thousands of times larger than an entire floppy disk!",
    },
    {
      id: 4,
      category: "Retro Music",
      question: "What portable music device revolutionized how we listened to music in 2001?",
      options: ["Walkman", "Discman", "iPod", "Zune"],
      correctAnswer: 2,
      funFact: "The iPod could hold 1,000 songs - our entire music collection in our pocket!",
    },
    {
      id: 5,
      category: "90s Cartoons",
      question: "In Tom & Jerry, which one is the cat?",
      options: ["Jerry", "Tom", "Spike", "Butch"],
      correctAnswer: 1,
      funFact: "Tom & Jerry has been entertaining audiences since 1940!",
    },
  ];

  const currentQuiz = quizzes[currentQuizIndex];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === currentQuiz.correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuiz = () => {
    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Quiz completed
      setCurrentQuizIndex(0);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  const isLastQuiz = currentQuizIndex === quizzes.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-retro-peach/30 via-retro-cream to-retro-teal/30 relative">
      <VHSOverlay />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-retro-charcoal hover:text-retro-peach transition-colors mb-8 font-sans"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="text-center mb-8">
          <div className="inline-block mb-4 animate-pixel">
            <HelpCircle className="w-16 h-16 text-retro-peach" />
          </div>
          <h1 className="font-retro text-3xl md:text-5xl mb-4 text-retro-charcoal">
            Challenge Your Memory!
          </h1>
          <p className="font-sans text-lg text-retro-charcoal/80 mb-2">
            Test your retro knowledge across different categories
          </p>
          <div className="flex items-center justify-center gap-4 font-sans text-sm">
            <span className="text-retro-teal">
              Question {currentQuizIndex + 1} of {quizzes.length}
            </span>
            <span className="text-retro-mustard">•</span>
            <span className="text-retro-peach">
              Score: {score}/{quizzes.length}
            </span>
          </div>
        </div>

        <div className="retro-card max-w-2xl mx-auto">
          <div className="mb-2">
            <span className="inline-block px-4 py-1 bg-retro-teal/20 text-retro-teal rounded-full text-sm font-sans mb-4">
              {currentQuiz.category}
            </span>
          </div>

          <div className="mb-8">
            <h2 className="font-sans text-xl mb-6 text-retro-charcoal">
              {currentQuiz.question}
            </h2>
            
            <div className="space-y-3">
              {currentQuiz.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all font-sans ${
                    showResult && index === currentQuiz.correctAnswer
                      ? "bg-retro-teal border-retro-teal text-retro-charcoal font-semibold"
                      : showResult && index === selectedAnswer && index !== currentQuiz.correctAnswer
                      ? "bg-red-200 border-red-400 text-retro-charcoal"
                      : "bg-retro-cream border-retro-charcoal/20 hover:border-retro-peach hover:bg-retro-peach/20"
                  } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {showResult && (
            <div className="text-center border-t-2 border-retro-charcoal/10 pt-6">
              {selectedAnswer === currentQuiz.correctAnswer ? (
                <div className="mb-4">
                  <Trophy className="w-12 h-12 text-retro-mustard mx-auto mb-2 animate-pixel" />
                  <p className="font-retro text-retro-teal mb-2">
                    Correct!
                  </p>
                  <p className="font-sans text-retro-charcoal/80 mb-4">
                    You are a true retro legend!
                  </p>
                </div>
              ) : (
                <div className="mb-4">
                  <p className="font-retro text-retro-peach mb-2">
                    Not quite!
                  </p>
                  <p className="font-sans text-retro-charcoal/80 mb-4">
                    The correct answer was: {currentQuiz.options[currentQuiz.correctAnswer]}
                  </p>
                </div>
              )}
              
              <div className="bg-retro-mustard/20 p-4 rounded-lg mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-retro-mustard" />
                  <span className="font-retro text-xs text-retro-mustard">Fun Fact</span>
                </div>
                <p className="font-sans text-sm text-retro-charcoal">
                  {currentQuiz.funFact}
                </p>
              </div>

              <div className="flex gap-3 justify-center">
                {!isLastQuiz ? (
                  <button
                    onClick={nextQuiz}
                    className="font-sans px-6 py-2 bg-retro-teal text-retro-charcoal rounded-lg hover:bg-retro-peach transition-colors"
                  >
                    Next Question →
                  </button>
                ) : (
                  <button
                    onClick={resetQuiz}
                    className="font-sans px-6 py-2 bg-retro-peach text-retro-charcoal rounded-lg hover:bg-retro-mustard transition-colors"
                  >
                    Start Over (Final Score: {score}/{quizzes.length})
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Motivational Quote Section */}
        <div className="mt-12 retro-card max-w-2xl mx-auto bg-retro-charcoal text-retro-cream">
          <div className="text-center">
            <p className="font-retro text-sm mb-4 text-retro-peach">
              Retro Wisdom
            </p>
            <p className="font-sans text-lg italic mb-4">
              "The best thing about the good old days is that we were young and didn't know they were the good old days."
            </p>
            <p className="font-sans text-sm text-retro-teal">
              Keep the memories alive, but don't forget to make new ones! 🎮
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunZone;
