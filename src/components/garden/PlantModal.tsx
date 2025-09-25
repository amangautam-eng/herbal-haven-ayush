import { Plant } from "@/data/plants";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { X, Leaf, Microscope, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlantModalProps {
  plant: Plant;
  onClose: () => void;
}

export const PlantModal = ({ plant, onClose }: PlantModalProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <div>
              <DialogTitle className="text-2xl font-display font-bold text-foreground mb-2">
                {plant.name}
              </DialogTitle>
              <p className="text-lg text-muted-foreground italic mb-4">
                {plant.scientificName}
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Plant image */}
          <div className="aspect-square bg-gradient-subtle rounded-xl overflow-hidden border border-border">
            <img 
              src={plant.image} 
              alt={plant.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Basic info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{plant.description}</p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Common Uses</h3>
              <div className="flex flex-wrap gap-2">
                {plant.ailments.map((ailment) => (
                  <Badge key={ailment} variant="secondary" className="bg-sage/20 text-sage">
                    {ailment}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Detailed information tabs */}
        <Tabs defaultValue="ayush" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="ayush" className="flex items-center gap-2">
              <Microscope className="h-4 w-4" />
              AYUSH Uses
            </TabsTrigger>
            <TabsTrigger value="cultivation" className="flex items-center gap-2">
              <Sprout className="h-4 w-4" />
              Cultivation
            </TabsTrigger>
            <TabsTrigger value="benefits" className="flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              Benefits
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ayush" className="mt-6">
            <div className="space-y-6">
              {plant.ayushUses.ayurveda && (
                <div className="bg-forest-light/10 rounded-lg p-4 border border-forest-light/20">
                  <h4 className="font-semibold text-forest-deep mb-2 flex items-center gap-2">
                    🕉️ Ayurveda
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {plant.ayushUses.ayurveda}
                  </p>
                </div>
              )}

              {plant.ayushUses.unani && (
                <div className="bg-earth-warm/10 rounded-lg p-4 border border-earth-warm/20">
                  <h4 className="font-semibold text-earth-warm mb-2 flex items-center gap-2">
                    ☪️ Unani
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {plant.ayushUses.unani}
                  </p>
                </div>
              )}

              {plant.ayushUses.siddha && (
                <div className="bg-golden/10 rounded-lg p-4 border border-golden/20">
                  <h4 className="font-semibold text-golden mb-2 flex items-center gap-2">
                    🔱 Siddha
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {plant.ayushUses.siddha}
                  </p>
                </div>
              )}

              {plant.ayushUses.homeopathy && (
                <div className="bg-moss/10 rounded-lg p-4 border border-moss/20">
                  <h4 className="font-semibold text-moss mb-2 flex items-center gap-2">
                    💧 Homeopathy
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {plant.ayushUses.homeopathy}
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="cultivation" className="mt-6">
            <div className="bg-sage/10 rounded-lg p-6 border border-sage/20">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Sprout className="h-5 w-5 text-sage" />
                Growing Guide
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {plant.cultivation}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="mt-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {plant.ailments.map((ailment, index) => (
                <div key={index} className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium text-foreground capitalize">{ailment}</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800">
            <strong>Disclaimer:</strong> This information is for educational purposes only and is not a substitute for professional medical advice. Please consult a qualified healthcare provider before using any herbal remedies.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};