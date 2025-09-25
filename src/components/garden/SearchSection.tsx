import { useState } from "react";
import { Plant } from "@/data/plants";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Leaf, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filteredPlants: Plant[];
  onPlantClick: (plant: Plant) => void;
}

export const SearchSection = ({ 
  searchQuery, 
  onSearchChange, 
  filteredPlants, 
  onPlantClick 
}: SearchSectionProps) => {
  const [selectedAilment, setSelectedAilment] = useState<string | null>(null);

  // Get all unique ailments for filtering
  const allAilments = Array.from(
    new Set(filteredPlants.flatMap(plant => plant.ailments))
  ).sort();

  // Filter plants by selected ailment
  const displayedPlants = selectedAilment
    ? filteredPlants.filter(plant => plant.ailments.includes(selectedAilment))
    : filteredPlants;

  return (
    <section id="search" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Search & Discover
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find medicinal plants by name or health condition. Discover nature's remedies for your wellness needs.
          </p>
        </div>

        {/* Search controls */}
        <div className="max-w-4xl mx-auto mb-12">
          {/* Search input */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by plant name, scientific name, or health condition..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-4 py-3 text-base border-2 focus:border-primary rounded-xl"
            />
          </div>

          {/* Ailment filters */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Filter className="h-4 w-4" />
              Filter by Health Condition:
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedAilment === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedAilment(null)}
                className="text-xs"
              >
                All Conditions
              </Button>
              {allAilments.map((ailment) => (
                <Button
                  key={ailment}
                  variant={selectedAilment === ailment ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedAilment(ailment)}
                  className="text-xs capitalize"
                >
                  {ailment}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Search results */}
        <div className="max-w-6xl mx-auto">
          {displayedPlants.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No plants found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or removing filters.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">
                  Found {displayedPlants.length} plant{displayedPlants.length !== 1 ? 's' : ''}
                  {selectedAilment && (
                    <span className="text-primary"> for {selectedAilment}</span>
                  )}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedPlants.map((plant) => (
                  <Card 
                    key={plant.id}
                    className="cursor-pointer hover:shadow-natural transition-all duration-300 hover:transform hover:scale-105 group"
                    onClick={() => onPlantClick(plant)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                            {plant.name}
                          </CardTitle>
                          <CardDescription className="text-sm italic mt-1">
                            {plant.scientificName}
                          </CardDescription>
                        </div>
                        <div className="w-10 h-10 bg-gradient-nature rounded-full flex items-center justify-center flex-shrink-0">
                          <Leaf className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {plant.description}
                      </p>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-xs font-semibold text-foreground mb-2">Common Uses:</h4>
                          <div className="flex flex-wrap gap-1">
                            {plant.ailments.slice(0, 4).map((ailment) => (
                              <Badge 
                                key={ailment} 
                                variant="secondary" 
                                className="bg-sage/20 text-sage text-xs"
                              >
                                {ailment}
                              </Badge>
                            ))}
                            {plant.ailments.length > 4 && (
                              <Badge variant="outline" className="text-xs">
                                +{plant.ailments.length - 4} more
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-border">
                          <span className="text-xs text-muted-foreground">
                            Click to learn more
                          </span>
                          <div className="text-xs text-primary group-hover:text-primary/80">
                            View Details →
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};