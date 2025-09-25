import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ayushSystems = [
  {
    id: "ayurveda",
    name: "Ayurveda",
    icon: "🕉️",
    description: "The science of life and longevity, emphasizing balance between mind, body, and spirit.",
    principles: [
      "Based on three doshas: Vata, Pitta, and Kapha",
      "Prevention is better than cure",
      "Individualized treatment approach",
      "Use of natural herbs and lifestyle practices"
    ],
    background: "bg-forest-light/10 border-forest-light/20"
  },
  {
    id: "unani",
    name: "Unani",
    icon: "☪️",
    description: "A traditional system focusing on the balance of four humors in the human body.",
    principles: [
      "Based on four humors: Blood, Phlegm, Yellow bile, Black bile",
      "Emphasis on temperament (Mizaj) of individual",
      "Natural healing through herbs and lifestyle",
      "Holistic approach to health and disease"
    ],
    background: "bg-earth-warm/10 border-earth-warm/20"
  },
  {
    id: "siddha",
    name: "Siddha",
    icon: "🔱",
    description: "Ancient Tamil system of medicine focusing on spiritual and physical well-being.",
    principles: [
      "Based on three vital forces: Vatham, Pitham, Kapham",
      "Use of minerals, metals, and herbs",
      "Integration of yoga and meditation",
      "Emphasis on purification of body and mind"
    ],
    background: "bg-golden/10 border-golden/20"
  },
  {
    id: "homeopathy",
    name: "Homeopathy",
    icon: "💧",
    description: "System based on 'like cures like' principle using highly diluted substances.",
    principles: [
      "Law of similars - like cures like",
      "Minimum dose for maximum effect",
      "Individualized treatment approach",
      "Stimulates body's natural healing response"
    ],
    background: "bg-moss/10 border-moss/20"
  }
];

export const AyushSystems = () => {
  return (
    <section id="systems" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Understanding AYUSH Systems
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the rich heritage of traditional medicine systems that have been healing humanity for thousands of years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ayushSystems.map((system) => (
            <Card 
              key={system.id} 
              className={`${system.background} hover:shadow-natural transition-all duration-300 hover:transform hover:scale-105`}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{system.icon}</span>
                  <CardTitle className="text-xl font-display font-bold">
                    {system.name}
                  </CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {system.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-foreground mb-3">Core Principles:</h4>
                <ul className="space-y-2">
                  {system.principles.map((principle, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 max-w-4xl mx-auto shadow-natural border border-border">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Integrative Approach to Wellness
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These traditional systems share common principles of holistic healing, natural remedies, 
              and personalized treatment approaches. They complement modern medicine by focusing on 
              prevention, lifestyle modifications, and the root causes of illness rather than just symptoms.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">5000+</div>
                <div className="text-sm text-muted-foreground">Years of Wisdom</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Medicinal Plants</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">4</div>
                <div className="text-sm text-muted-foreground">Traditional Systems</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">Millions</div>
                <div className="text-sm text-muted-foreground">People Benefited</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};