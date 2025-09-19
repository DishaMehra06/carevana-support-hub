import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Therapists = () => {
  const therapists = [
    {
      name: "Dr. Aisha Rahman",
      specialization: "Speech Therapist",
      experience: "8 years experience",
      description: "Specializes in language development, articulation disorders, and communication skills for children with autism and developmental delays.",
      credentials: "M.S. Speech-Language Pathology, CCC-SLP"
    },
    {
      name: "Dr. Rohan Patel",
      specialization: "Physiotherapist",
      experience: "12 years experience", 
      description: "Expert in pediatric physiotherapy, motor skill development, and therapeutic exercises for children with physical disabilities.",
      credentials: "DPT, Pediatric Certified Specialist"
    },
    {
      name: "Dr. Meera Singh",
      specialization: "Genetic Counselor",
      experience: "10 years experience",
      description: "Provides comprehensive genetic counseling, testing coordination, and family support for inherited conditions and developmental disorders.",
      credentials: "M.S. Genetic Counseling, CGC"
    },
    {
      name: "Dr. James Thompson",
      specialization: "Occupational Therapist",
      experience: "15 years experience",
      description: "Focuses on sensory integration, fine motor skills, and adaptive strategies to help children achieve independence in daily activities.",
      credentials: "M.S. Occupational Therapy, OTR/L"
    },
    {
      name: "Dr. Sarah Williams",
      specialization: "Child Psychologist", 
      experience: "9 years experience",
      description: "Specializes in behavioral therapy, emotional regulation, and family counseling for children with special needs and their families.",
      credentials: "Ph.D. Clinical Psychology, Licensed Psychologist"
    },
    {
      name: "Dr. Ahmed Hassan",
      specialization: "Pediatric Neurologist",
      experience: "14 years experience",
      description: "Expert in neurological conditions affecting children, including epilepsy, cerebral palsy, and developmental brain disorders.",
      credentials: "M.D. Neurology, Board Certified Pediatric Neurologist"
    }
  ];

  const handleContact = (therapistName: string) => {
    console.log(`Contact initiated for ${therapistName}`);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Our Expert Therapists
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Meet our dedicated team of licensed professionals committed to providing exceptional care and support for children with special needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {therapists.map((therapist, index) => (
          <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 border-0 bg-gradient-card">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                  <span className="text-2xl text-primary-foreground font-bold">
                    {therapist.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {therapist.name}
                  </CardTitle>
                  <p className="text-sm font-medium text-primary">
                    {therapist.specialization}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-accent font-medium mb-2">
                  {therapist.experience}
                </p>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {therapist.description}
                </CardDescription>
              </div>
              
              <div>
                <p className="text-xs text-muted-foreground font-medium">
                  {therapist.credentials}
                </p>
              </div>

              <Button 
                onClick={() => handleContact(therapist.name)}
                className="w-full mt-4"
                variant="outline"
              >
                Contact
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Therapists;