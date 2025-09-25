import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import gardenHeroImage from "@/assets/garden-hero.jpg";

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero = ({ onExploreClick }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-nature opacity-80"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url(${gardenHeroImage})`
        }}
      ></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-golden/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-12 h-12 bg-forest-light/30 rounded-full blur-lg"></div>
      </div>
      <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-20 h-20 bg-sage/25 rounded-full blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <Sparkles className="h-4 w-4 text-golden animate-pulse" />
          <span className="text-white text-sm font-medium">Ancient Wisdom Meets Modern Science</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
          Discover the
          <span className="block bg-gradient-to-r from-golden to-cream bg-clip-text text-transparent">
            Healing Power
          </span>
          of Nature
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Explore our interactive Virtual Herbal Garden and unlock the ancient wisdom of 
          AYUSH medicinal plants used for centuries in Ayurveda, Unani, Siddha, and Homeopathy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={onExploreClick}
            size="lg"
            className="bg-gradient-earth hover:shadow-glow transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold group"
          >
            Explore the Garden
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <div className="text-white/80 text-sm">
            🌿 10+ Medicinal Plants • 📚 Ancient Wisdom • 🔬 Modern Applications
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};