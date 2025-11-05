import VHSOverlay from "@/components/VHSOverlay";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
          <h1 className="font-retro text-3xl md:text-5xl mb-4 text-retro-charcoal">
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
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (!gameStarted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gridSize = 20;
    const tileCount = 20;
    let snake = [{ x: 10, y: 10 }];
    let food = { x: 15, y: 15 };
    let dx = 0;
    let dy = 0;
    let currentScore = 0;

    const drawGame = () => {
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
      switch (e.key) {
        case "ArrowUp":
          if (dy === 0) { dx = 0; dy = -1; }
          break;
        case "ArrowDown":
          if (dy === 0) { dx = 0; dy = 1; }
          break;
        case "ArrowLeft":
          if (dx === 0) { dx = -1; dy = 0; }
          break;
        case "ArrowRight":
          if (dx === 0) { dx = 1; dy = 0; }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    const gameLoop = setInterval(drawGame, 100);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      clearInterval(gameLoop);
    };
  }, [gameStarted]);

  return (
    <div className="text-center">
      <h3 className="font-retro text-retro-cream mb-4">Snake Game</h3>
      <p className="font-sans text-retro-cream/80 mb-2">Score: {score}</p>
      {!gameStarted ? (
        <button
          onClick={() => { setGameStarted(true); setScore(0); }}
          className="font-sans px-6 py-3 bg-retro-teal text-retro-charcoal rounded hover:bg-retro-peach transition-colors mb-4"
        >
          Start Game
        </button>
      ) : (
        <p className="font-sans text-retro-cream/60 text-sm mb-4">Use Arrow Keys to Move</p>
      )}
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="mx-auto border-4 border-retro-teal rounded"
      />
    </div>
  );
};

// Tetris Game Component
const TetrisGame = () => {
  return (
    <div className="text-center py-12">
      <h3 className="font-retro text-retro-cream mb-4">Tetris</h3>
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
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (!gameStarted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let playerY = 160;
    let computerY = 160;
    let ballX = 200;
    let ballY = 200;
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
      ctx.moveTo(200, 0);
      ctx.lineTo(200, 400);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw paddles
      ctx.fillStyle = "#10b981";
      ctx.fillRect(10, playerY, paddleWidth, paddleHeight);
      ctx.fillRect(380, computerY, paddleWidth, paddleHeight);

      // Draw ball
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.arc(ballX, ballY, 8, 0, Math.PI * 2);
      ctx.fill();

      // Move ball
      ballX += ballDX;
      ballY += ballDY;

      // Ball collision with top/bottom
      if (ballY <= 0 || ballY >= 400) ballDY = -ballDY;

      // Ball collision with paddles
      if (ballX <= 20 && ballY >= playerY && ballY <= playerY + paddleHeight) {
        ballDX = Math.abs(ballDX);
      }
      if (ballX >= 380 && ballY >= computerY && ballY <= computerY + paddleHeight) {
        ballDX = -Math.abs(ballDX);
      }

      // Score
      if (ballX < 0) {
        setScore(prev => ({ ...prev, computer: prev.computer + 1 }));
        ballX = 200;
        ballY = 200;
      }
      if (ballX > 400) {
        setScore(prev => ({ ...prev, player: prev.player + 1 }));
        ballX = 200;
        ballY = 200;
      }

      // Simple AI
      if (computerY + paddleHeight / 2 < ballY) computerY += 2;
      if (computerY + paddleHeight / 2 > ballY) computerY -= 2;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      playerY = e.clientY - rect.top - paddleHeight / 2;
      playerY = Math.max(0, Math.min(playerY, 400 - paddleHeight));
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    const gameLoop = setInterval(drawGame, 1000 / 60);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      clearInterval(gameLoop);
    };
  }, [gameStarted]);

  return (
    <div className="text-center">
      <h3 className="font-retro text-retro-cream mb-4">Pong</h3>
      <p className="font-sans text-retro-cream/80 mb-2">
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
        <p className="font-sans text-retro-cream/60 text-sm mb-4">Move your mouse to control the paddle</p>
      )}
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="mx-auto border-4 border-retro-teal rounded"
      />
    </div>
  );
};

// Add React import for useRef and useEffect
import * as React from "react";

export default PlayableGames;
