import { useState } from "react";
import { Plant } from "@/data/plants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Leaf } from "lucide-react";

interface InteractiveGardenProps {
  plants: Plant[];
  onPlantClick: (plant: Plant) => void;
}

export const InteractiveGarden = ({ plants, onPlantClick }: InteractiveGardenProps) => {
  const [hoveredPlant, setHoveredPlant] = useState<string | null>(null);

  return (
    <section id="garden" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Explore the Virtual Garden
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any plant to discover its medicinal properties, traditional uses, and cultivation methods.
          </p>
        </div>

        {/* Garden Map */}
        <div className="relative max-w-6xl mx-auto">
          {/* Garden Background */}
          <div className="relative w-full h-[600px] bg-gradient-to-br from-earth-light to-sage/30 rounded-3xl overflow-hidden shadow-natural">
            {/* Garden pathways */}
            <svg className="absolute inset-0 w-full h-full opacity-30">
              <path 
                d="M100 300 Q300 100 500 300 T900 300" 
                stroke="hsl(var(--earth-warm))" 
                strokeWidth="8" 
                fill="none"
                strokeDasharray="10,5"
              />
              <path 
                d="M150 150 Q400 250 650 150 T950 150" 
                stroke="hsl(var(--moss))" 
                strokeWidth="6" 
                fill="none"
                strokeDasharray="8,4"
              />
            </svg>

            {/* Decorative garden elements */}
            <div className="absolute top-10 left-10 w-16 h-16 bg-moss/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-12 h-12 bg-golden/20 rounded-full animate-float"></div>
            <div className="absolute top-1/3 right-10 w-8 h-8 bg-forest-light/30 rounded-full"></div>

            {/* Plant hotspots */}
            <TooltipProvider>
              {plants.map((plant) => (
                <Tooltip key={plant.id}>
                  <TooltipTrigger asChild>
                    <button
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                        hoveredPlant === plant.id 
                          ? "scale-125 animate-pulse-glow" 
                          : "hover:scale-110"
                      }`}
                      style={{
                        left: `${plant.position.x}%`,
                        top: `${plant.position.y}%`,
                      }}
                      onClick={() => onPlantClick(plant)}
                      onMouseEnter={() => setHoveredPlant(plant.id)}
                      onMouseLeave={() => setHoveredPlant(null)}
                    >
                      <div className="relative">
                        {/* Plant icon */}
                        <div className="w-12 h-12 bg-gradient-nature rounded-full flex items-center justify-center shadow-natural border-2 border-white/50">
                          <Leaf className="h-6 w-6 text-white" />
                        </div>
                        
                        {/* Ripple effect */}
                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                        
                        {/* Glow effect on hover */}
                        {hoveredPlant === plant.id && (
                          <div className="absolute inset-0 bg-golden/30 rounded-full blur-lg scale-150"></div>
                        )}
                      </div>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="top" 
                    className="bg-card border border-border shadow-natural rounded-lg p-3"
                  >
                    <div className="text-center">
                      <p className="font-semibold text-foreground">{plant.name}</p>
                      <p className="text-sm text-muted-foreground italic">{plant.scientificName}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>

            {/* Interactive garden legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-natural">
              <h4 className="font-semibold text-foreground mb-2">Garden Legend</h4>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-4 h-4 bg-gradient-nature rounded-full"></div>
                <span>Medicinal Plant</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Click any plant to learn more</p>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">{plants.length}</div>
            <div className="text-sm text-muted-foreground">Medicinal Plants</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">4</div>
            <div className="text-sm text-muted-foreground">AYUSH Systems</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">100+</div>
            <div className="text-sm text-muted-foreground">Health Benefits</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">5000+</div>
            <div className="text-sm text-muted-foreground">Years of Wisdom</div>
          </div>
        </div>
      </div>
    </section>
  );
};