import * as React from "react";
import { useState, useRef, useEffect } from "react";
import VHSOverlay from "@/components/VHSOverlay";
import { ArrowLeft, ArrowUp, ArrowDown, ArrowLeft as ArrowLeftIcon, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PlayableGames = () => {
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games = [
    { id: "snake", name: "Snake Game", description: "Classic Nokia Snake - eat, grow, don't hit yourself!" },
    { id: "tetris", name: "Tetris", description: "Falling blocks puzzle - organize them before they stack up!" },
    { id: "pong", name: "Pong", description: "The original arcade classic - bounce the ball!" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-retro-cream via-retro-mustard/20 to-retro-peach/30 relative">
      <VHSOverlay />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-retro-charcoal hover:text-retro-peach transition-colors mb-8 font-sans"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        <div className="text-center mb-12">
          <h1 className="font-retro text-4xl md:text-6xl lg:text-7xl mb-6 text-retro-charcoal leading-tight">
            Play Retro Games
          </h1>
          <p className="font-sans text-lg text-retro-charcoal/80">
            Just like the good old days - no downloads, no ads, just pure fun!
          </p>
        </div>

        {!selectedGame ? (
          <div className="grid md:grid-cols-3 gap-6">
            {games.map((game) => (
              <div key={game.id} className="retro-card group cursor-pointer" onClick={() => setSelectedGame(game.id)}>
                <h2 className="font-retro text-xl text-retro-charcoal group-hover:text-retro-peach transition-colors mb-3">
                  {game.name}
                </h2>
                <p className="font-sans text-retro-charcoal/80 mb-4">
                  {game.description}
                </p>
                <button className="font-sans px-4 py-2 bg-retro-teal text-retro-charcoal rounded hover:bg-retro-peach transition-colors">
                  Play Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="retro-card">
            <button
              onClick={() => setSelectedGame(null)}
              className="mb-4 flex items-center gap-2 text-retro-charcoal hover:text-retro-peach transition-colors font-sans"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Games
            </button>
            
            <div className="bg-retro-charcoal rounded-lg p-4">
              {selectedGame === "snake" && <SnakeGame />}
              {selectedGame === "tetris" && <TetrisGame />}
              {selectedGame === "pong" && <PongGame />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Snake Game Component
const SnakeGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [direction, setDirection] = useState({ dx: 0, dy: 0 });

  const handleDirectionChange = (newDx: number, newDy: number) => {
    setDirection({ dx: newDx, dy: newDy });
  };

  useEffect(() => {
    if (!gameStarted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Make canvas responsive
    const updateCanvasSize = () => {
      const size = Math.min(400, window.innerWidth - 40);
      canvas.width = size;
      canvas.height = size;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const gridSize = canvas.width / 20;
    const tileCount = 20;
    let snake = [{ x: 10, y: 10 }];
    let food = { x: 15, y: 15 };
    let dx = direction.dx;
    let dy = direction.dy;
    let currentScore = 0;

    const drawGame = () => {
      // Update direction from state
      dx = direction.dx;
      dy = direction.dy;

      // Clear canvas
      ctx.fillStyle = "#2D3748";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Move snake
      if (dx !== 0 || dy !== 0) {
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };
        
        // Check wall collision
        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
          setGameStarted(false);
          return;
        }

        // Check self collision
        if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
          setGameStarted(false);
          return;
        }

        snake.unshift(head);

        // Check food collision
        if (head.x === food.x && head.y === food.y) {
          currentScore += 10;
          setScore(currentScore);
          food = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
          };
        } else {
          snake.pop();
        }
      }

      // Draw snake
      ctx.fillStyle = "#10b981";
      snake.forEach(segment => {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
      });

      // Draw food
      ctx.fillStyle = "#ef4444";
      ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      e.preventDefault();
      switch (e.key) {
        case "ArrowUp":
          if (direction.dy === 0) handleDirectionChange(0, -1);
          break;
        case "ArrowDown":
          if (direction.dy === 0) handleDirectionChange(0, 1);
          break;
        case "ArrowLeft":
          if (direction.dx === 0) handleDirectionChange(-1, 0);
          break;
        case "ArrowRight":
          if (direction.dx === 0) handleDirectionChange(1, 0);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    const gameLoop = setInterval(drawGame, 100);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener('resize', updateCanvasSize);
      clearInterval(gameLoop);
    };
  }, [gameStarted, direction]);

  return (
    <div className="text-center">
      <h3 className="font-retro text-retro-cream mb-4 text-xl md:text-2xl">Snake Game</h3>
      <p className="font-sans text-retro-cream/80 mb-2 text-lg">Score: {score}</p>
      {!gameStarted ? (
        <button
          onClick={() => { setGameStarted(true); setScore(0); setDirection({ dx: 0, dy: 0 }); }}
          className="font-sans px-6 py-3 bg-retro-teal text-retro-charcoal rounded hover:bg-retro-peach transition-colors mb-4"
        >
          Start Game
        </button>
      ) : (
        <p className="font-sans text-retro-cream/60 text-sm mb-4">Use Arrow Keys or Buttons Below</p>
      )}
      <canvas
        ref={canvasRef}
        className="mx-auto border-4 border-retro-teal rounded max-w-full"
      />
      
      {/* Mobile Controls */}
      {gameStarted && (
        <div className="mt-6 flex flex-col items-center gap-2">
          <button
            onClick={() => handleDirectionChange(0, -1)}
            className="p-4 bg-retro-teal text-retro-charcoal rounded-lg hover:bg-retro-peach transition-colors active:scale-95"
            aria-label="Move Up"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => handleDirectionChange(-1, 0)}
              className="p-4 bg-retro-teal text-retro-charcoal rounded-lg hover:bg-retro-peach transition-colors active:scale-95"
              aria-label="Move Left"
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleDirectionChange(0, 1)}
              className="p-4 bg-retro-teal text-retro-charcoal rounded-lg hover:bg-retro-peach transition-colors active:scale-95"
              aria-label="Move Down"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleDirectionChange(1, 0)}
              className="p-4 bg-retro-teal text-retro-charcoal rounded-lg hover:bg-retro-peach transition-colors active:scale-95"
              aria-label="Move Right"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Tetris Game Component
const TetrisGame = () => {
  return (
    <div className="text-center py-12">
      <h3 className="font-retro text-retro-cream mb-4 text-xl md:text-2xl">Tetris</h3>
      <p className="font-sans text-retro-cream/80 mb-4">
        Classic falling blocks puzzle game
      </p>
      <div className="bg-retro-charcoal/50 rounded p-8 max-w-md mx-auto">
        <p className="font-sans text-retro-cream/60 mb-4">
          Use arrow keys: ← → to move, ↑ to rotate, ↓ to drop faster
        </p>
        <p className="font-sans text-retro-peach">
          Full Tetris coming soon! For now, enjoy Snake and Pong!
        </p>
      </div>
    </div>
  );
};

// Pong Game Component
const PongGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [playerY, setPlayerY] = useState(160);

  useEffect(() => {
    if (!gameStarted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Make canvas responsive
    const updateCanvasSize = () => {
      const size = Math.min(400, window.innerWidth - 40);
      canvas.width = size;
      canvas.height = size;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    let computerY = canvas.height / 2 - 40;
    let ballX = canvas.width / 2;
    let ballY = canvas.height / 2;
    let ballDX = 3;
    let ballDY = 3;

    const paddleHeight = 80;
    const paddleWidth = 10;

    const drawGame = () => {
      // Clear canvas
      ctx.fillStyle = "#2D3748";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw middle line
      ctx.strokeStyle = "#4A5568";
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw paddles
      ctx.fillStyle = "#10b981";
      ctx.fillRect(10, playerY, paddleWidth, paddleHeight);
      ctx.fillRect(canvas.width - 20, computerY, paddleWidth, paddleHeight);

      // Draw ball
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(ballX, ballY, 8, 0, Math.PI * 2);
      ctx.fill();

      // Move ball
      ballX += ballDX;
      ballY += ballDY;

      // Ball collision with top/bottom
      if (ballY <= 0 || ballY >= canvas.height) ballDY = -ballDY;

      // Ball collision with paddles
      if (ballX <= 20 && ballY >= playerY && ballY <= playerY + paddleHeight) {
        ballDX = Math.abs(ballDX);
      }
      if (ballX >= canvas.width - 20 && ballY >= computerY && ballY <= computerY + paddleHeight) {
        ballDX = -Math.abs(ballDX);
      }

      // Score
      if (ballX < 0) {
        setScore(prev => ({ ...prev, computer: prev.computer + 1 }));
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
      }
      if (ballX > canvas.width) {
        setScore(prev => ({ ...prev, player: prev.player + 1 }));
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
      }

      // Simple AI
      if (computerY + paddleHeight / 2 < ballY) computerY += 2;
      if (computerY + paddleHeight / 2 > ballY) computerY -= 2;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newY = e.clientY - rect.top - paddleHeight / 2;
      setPlayerY(Math.max(0, Math.min(newY, canvas.height - paddleHeight)));
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const newY = touch.clientY - rect.top - paddleHeight / 2;
      setPlayerY(Math.max(0, Math.min(newY, canvas.height - paddleHeight)));
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    const gameLoop = setInterval(drawGame, 1000 / 60);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener('resize', updateCanvasSize);
      clearInterval(gameLoop);
    };
  }, [gameStarted, playerY]);

  return (
    <div className="text-center">
      <h3 className="font-retro text-retro-cream mb-4 text-xl md:text-2xl">Pong</h3>
      <p className="font-sans text-retro-cream/80 mb-2 text-lg">
        You: {score.player} | Computer: {score.computer}
      </p>
      {!gameStarted ? (
        <button
          onClick={() => { setGameStarted(true); setScore({ player: 0, computer: 0 }); }}
          className="font-sans px-6 py-3 bg-retro-teal text-retro-charcoal rounded hover:bg-retro-peach transition-colors mb-4"
        >
          Start Game
        </button>
      ) : (
        <p className="font-sans text-retro-cream/60 text-sm mb-4">
          Move your mouse or drag on mobile to control the paddle
        </p>
      )}
      <canvas
        ref={canvasRef}
        className="mx-auto border-4 border-retro-teal rounded max-w-full touch-none"
      />
    </div>
  );
};

export default PlayableGames;
