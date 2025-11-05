import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface MemoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  icon: LucideIcon;
}

const MemoryCard = ({ title, description, image, link, icon: Icon }: MemoryCardProps) => {
  return (
    <Link to={link} className="group">
      <div className="retro-card overflow-hidden cursor-pointer">
        <div className="relative overflow-hidden rounded-md mb-4 aspect-square">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-retro-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Icon className="w-8 h-8 text-retro-cream" />
          </div>
        </div>
        <h3 className="text-lg font-retro mb-2 text-retro-charcoal group-hover:text-retro-peach transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground font-sans">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default MemoryCard;
