import { useState, useEffect } from "react";
import { plantsData, Plant } from "@/data/plants";
import { Hero } from "./garden/Hero";
import { Navigation } from "./garden/Navigation";
import { InteractiveGarden } from "./garden/InteractiveGarden";
import { PlantModal } from "./garden/PlantModal";
import { AyushSystems } from "./garden/AyushSystems";
import { SearchSection } from "./garden/SearchSection";
import { PractitionersSection } from "./garden/PractitionersSection";
import { Footer } from "./garden/Footer";

const VirtualHerbalGarden = () => {
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>(plantsData);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredPlants(plantsData);
    } else {
      const filtered = plantsData.filter(plant =>
        plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plant.ailments.some(ailment =>
          ailment.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredPlants(filtered);
    }
  }, [searchQuery]);

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle font-body">
      <Navigation currentSection={currentSection} onNavigate={scrollToSection} />
      
      <main>
        <Hero onExploreClick={() => scrollToSection("garden")} />
        
        <InteractiveGarden 
          plants={plantsData}
          onPlantClick={setSelectedPlant}
        />
        
        <AyushSystems />
        
        <SearchSection 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filteredPlants={filteredPlants}
          onPlantClick={setSelectedPlant}
        />
        
        <PractitionersSection />
      </main>

      <Footer />
      
      {selectedPlant && (
        <PlantModal 
          plant={selectedPlant}
          onClose={() => setSelectedPlant(null)}
        />
      )}
    </div>
  );
};

export default VirtualHerbalGarden;