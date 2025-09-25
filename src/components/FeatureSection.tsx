import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, Search, MessageCircle, Award, TrendingUp, Shield } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Complete Profile Creation",
      description: "Build comprehensive profiles showcasing education, skills, experience, and achievements to stand out to employers.",
      color: "text-primary"
    },
    {
      icon: Search,
      title: "Smart Talent Discovery",
      description: "Advanced search and filtering tools help employers find the perfect candidates based on skills, location, and experience.",
      color: "text-secondary"
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Seamless messaging system connecting youth with potential employers for interviews and opportunities.",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "Credential Verification",
      description: "Upload and verify academic credentials, certifications, and professional achievements with confidence.",
      color: "text-success"
    },
    {
      icon: TrendingUp,
      title: "Career Growth Tracking",
      description: "Monitor profile views, employer interests, and career progress with detailed analytics and insights.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Secure & Trusted",
      description: "Protected profiles and verified employers ensure a safe environment for professional connections.",
      color: "text-secondary"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How TalentConnect Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, powerful platform designed to bridge the gap between talented youth and forward-thinking employers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-border/50">
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-background to-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;