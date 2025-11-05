import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface RetroButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: LucideIcon;
  variant?: "primary" | "secondary";
  className?: string;
}

const RetroButton = ({ 
  children, 
  onClick, 
  icon: Icon, 
  variant = "primary",
  className 
}: RetroButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "font-retro text-xs px-8 py-6 transition-all duration-300 border-2",
        variant === "primary" && "bg-retro-peach text-retro-charcoal border-retro-charcoal hover:bg-retro-mustard hover:shadow-lg hover:-translate-y-1",
        variant === "secondary" && "bg-retro-teal text-retro-charcoal border-retro-charcoal hover:bg-retro-peach hover:shadow-lg hover:-translate-y-1",
        className
      )}
      style={{ boxShadow: "4px 4px 0px hsl(var(--retro-charcoal))" }}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </Button>
  );
};

export default RetroButton;
