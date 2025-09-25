import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Practitioner {
  name: string;
  specialty: string;
  clinic: string;
  address: string;
  phone: string;
}

const practitionersData: Record<string, Practitioner[]> = {
  "Delhi": [
    {
      name: "Dr. Priya Sharma",
      specialty: "Ayurveda Specialist",
      clinic: "Wellness Clinic",
      address: "Karol Bagh, Delhi",
      phone: "+91 98765 43210"
    },
    {
      name: "Dr. Rajesh Kumar",
      specialty: "Unani Medicine",
      clinic: "Heritage Health Center",
      address: "CP, Delhi",
      phone: "+91 98765 43211"
    },
    {
      name: "Dr. Meera Patel",
      specialty: "Siddha Medicine",
      clinic: "Natural Healing Clinic",
      address: "Lajpat Nagar, Delhi",
      phone: "+91 98765 43212"
    }
  ],
  "Mumbai": [
    {
      name: "Dr. Anil Desai",
      specialty: "Ayurveda Specialist",
      clinic: "Ayur Wellness Center",
      address: "Andheri West, Mumbai",
      phone: "+91 98765 43213"
    },
    {
      name: "Dr. Sunita Joshi",
      specialty: "Homeopathy",
      clinic: "Holistic Health Hub",
      address: "Bandra East, Mumbai",
      phone: "+91 98765 43214"
    },
    {
      name: "Dr. Vikram Shah",
      specialty: "Naturopathy & Yoga",
      clinic: "Nature Cure Center",
      address: "Powai, Mumbai",
      phone: "+91 98765 43215"
    }
  ],
  "Bangalore": [
    {
      name: "Dr. Lakshmi Nair",
      specialty: "Ayurveda Specialist",
      clinic: "Ayush Healing Center",
      address: "Koramangala, Bangalore",
      phone: "+91 98765 43216"
    },
    {
      name: "Dr. Ravi Gowda",
      specialty: "Siddha Medicine",
      clinic: "Traditional Wellness Clinic",
      address: "Indiranagar, Bangalore",
      phone: "+91 98765 43217"
    },
    {
      name: "Dr. Preeti Kulkarni",
      specialty: "Unani Medicine",
      clinic: "Integrated Health Center",
      address: "Whitefield, Bangalore",
      phone: "+91 98765 43218"
    }
  ],
  "Chennai": [
    {
      name: "Dr. Murugan Pillai",
      specialty: "Siddha Medicine",
      clinic: "Traditional Siddha Center",
      address: "T. Nagar, Chennai",
      phone: "+91 98765 43219"
    },
    {
      name: "Dr. Kavitha Raman",
      specialty: "Ayurveda Specialist",
      clinic: "South Indian Ayurveda",
      address: "Adyar, Chennai",
      phone: "+91 98765 43220"
    },
    {
      name: "Dr. Suresh Babu",
      specialty: "Homeopathy",
      clinic: "Gentle Healing Clinic",
      address: "Velachery, Chennai",
      phone: "+91 98765 43221"
    }
  ],
  "Kolkata": [
    {
      name: "Dr. Biplab Chatterjee",
      specialty: "Homeopathy",
      clinic: "Bengal Homeo Center",
      address: "Salt Lake, Kolkata",
      phone: "+91 98765 43222"
    },
    {
      name: "Dr. Ritu Das",
      specialty: "Ayurveda Specialist",
      clinic: "Eastern Ayurveda Clinic",
      address: "Park Street, Kolkata",
      phone: "+91 98765 43223"
    }
  ],
  "Pune": [
    {
      name: "Dr. Madhav Joshi",
      specialty: "Ayurveda Specialist",
      clinic: "Marathi Ayurveda Center",
      address: "FC Road, Pune",
      phone: "+91 98765 43224"
    },
    {
      name: "Dr. Shweta Kulkarni",
      specialty: "Naturopathy & Yoga",
      clinic: "Holistic Wellness Center",
      address: "Koregaon Park, Pune",
      phone: "+91 98765 43225"
    }
  ]
};

const cities = Object.keys(practitionersData);

export const PractitionersSection = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [practitioners, setPractitioners] = useState<Practitioner[]>([]);

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    if (city && practitionersData[city]) {
      setPractitioners(practitionersData[city]);
    } else {
      setPractitioners([]);
    }
  };

  return (
    <section id="practitioners" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Find a Local AYUSH Practitioner
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with qualified practitioners in your city who specialize in traditional healing systems
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <label htmlFor="city-select" className="block text-lg font-semibold text-foreground mb-4">
              Select Your City:
            </label>
            <select
              id="city-select"
              value={selectedCity}
              onChange={(e) => handleCityChange(e.target.value)}
              className="w-full max-w-md px-6 py-4 rounded-lg border-2 border-border bg-card text-card-foreground font-medium shadow-natural focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            >
              <option value="">-- Select a City --</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="practitioners-results">
            {!selectedCity ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-6">🏥</div>
                <p className="text-xl text-muted-foreground">
                  Please select a city to see practitioners
                </p>
              </div>
            ) : practitioners.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-6">🔍</div>
                <p className="text-xl text-muted-foreground">
                  No practitioners found for {selectedCity}
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {practitioners.map((practitioner, index) => (
                  <Card 
                    key={index} 
                    className="hover:shadow-glow transition-all duration-300 hover:scale-105 border-2 border-border bg-card"
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl text-primary font-display">
                        {practitioner.name}
                      </CardTitle>
                      <CardDescription className="text-accent font-semibold">
                        {practitioner.specialty}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="text-forest-deep">🏥</div>
                        <div>
                          <p className="font-semibold text-foreground">{practitioner.clinic}</p>
                          <p className="text-muted-foreground">{practitioner.address}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 pt-2">
                        <div className="text-forest-deep">📞</div>
                        <p className="text-foreground font-medium">{practitioner.phone}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          <div className="mt-12 p-6 bg-earth-light/20 rounded-lg border-2 border-earth-warm/30">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Disclaimer:</strong> The practitioners listed above are for demonstration purposes. 
              Please verify credentials and consult with qualified healthcare providers before seeking treatment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};