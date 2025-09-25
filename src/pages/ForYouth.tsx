import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, FileText, Star, TrendingUp, MessageSquare, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const ForYouth = () => {
  const benefits = [
    {
      icon: User,
      title: "Professional Profile",
      description: "Create a comprehensive profile that showcases your skills, education, and achievements to potential employers."
    },
    {
      icon: FileText,
      title: "Credential Verification",
      description: "Upload and verify your academic certificates, professional certifications, and work experience."
    },
    {
      icon: Star,
      title: "Skill Assessment",
      description: "Take skill assessments to validate your expertise and stand out from other candidates."
    },
    {
      icon: TrendingUp,
      title: "Career Analytics",
      description: "Track profile views, employer interest, and get insights to improve your job prospects."
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "Connect directly with employers and receive job opportunities through our messaging system."
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Your data is protected and only visible to verified employers, ensuring a secure job search experience."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Launch Your Career Today
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of young professionals who have found their dream jobs through TalentConnect. Create your profile and get discovered by top employers.
          </p>
          <Link to="/join-youth">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Create Your Profile Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose TalentConnect?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to showcase your talents and connect with the right employers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join TalentConnect today and take the first step towards your dream career. It's free to get started!
          </p>
          <Link to="/join-youth">
            <Button size="lg" variant="hero" className="text-lg px-8 py-4">
              Create Your Profile
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ForYouth;