import VHSOverlay from "@/components/VHSOverlay";
import { ArrowLeft, HelpCircle, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FunZone = () => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const quiz = {
    question: "Which classic game used the famous cheat code: ↑↑↓↓←→←→BA?",
    options: [
      "Super Mario Bros",
      "Contra",
      "Street Fighter",
      "Pac-Man",
    ],
    correctAnswer: 1,
  };

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-retro-peach/30 via-retro-cream to-retro-teal/30 relative">
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
            <HelpCircle className="w-16 h-16 text-retro-peach" />
          </div>
          <h1 className="font-retro text-3xl md:text-5xl mb-4 text-retro-charcoal">
            Challenge Your Memory!
          </h1>
          <p className="font-sans text-lg text-retro-charcoal/80">
            Test your retro knowledge
          </p>
        </div>

        <div className="retro-card max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="font-sans text-xl mb-6 text-retro-charcoal">
              {quiz.question}
            </h2>
            
            <div className="space-y-3">
              {quiz.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all font-sans ${
                    showResult && index === quiz.correctAnswer
                      ? 'bg-retro-teal border-retro-teal text-retro-charcoal'
                      : showResult && index === selectedAnswer && index !== quiz.correctAnswer
                      ? 'bg-red-200 border-red-400 text-retro-charcoal'
                      : 'bg-retro-cream border-retro-charcoal/20 hover:border-retro-peach hover:bg-retro-peach/20'
                  } ${showResult ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {showResult && (
            <div className="text-center">
              {selectedAnswer === quiz.correctAnswer ? (
                <div className="mb-4">
                  <Trophy className="w-12 h-12 text-retro-mustard mx-auto mb-2 animate-pixel" />
                  <p className="font-retro text-retro-teal mb-2">
                    Correct!
                  </p>
                  <p className="font-sans text-retro-charcoal/80">
                    You're a true retro gaming legend!
                  </p>
                </div>
              ) : (
                <div className="mb-4">
                  <p className="font-retro text-retro-peach mb-2">
                    Not quite!
                  </p>
                  <p className="font-sans text-retro-charcoal/80">
                    The Konami Code was famous in Contra!
                  </p>
                </div>
              )}
              <button
                onClick={resetQuiz}
                className="font-sans px-6 py-2 bg-retro-charcoal text-retro-cream rounded-lg hover:bg-retro-peach hover:text-retro-charcoal transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="font-retro text-xs text-retro-teal">
            More quizzes coming soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FunZone;
