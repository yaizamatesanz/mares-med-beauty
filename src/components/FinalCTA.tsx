import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import maresTexture from "@/assets/mares-texture.jpg";
const FinalCTA = () => {
  const navigate = useNavigate();
  return <section className="py-20 relative overflow-hidden">
      {/* Background with Mares texture */}
      
      
      {/* Content */}
      <div className="relative z-10 w-[95%] max-w-6xl mx-auto px-6">
        
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-primary-foreground/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-primary-foreground/20 rounded-full animate-pulse" style={{
      animationDelay: '1s'
    }}></div>
    </section>;
};
export default FinalCTA;