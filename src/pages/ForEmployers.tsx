import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, MessageCircle, BarChart3, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ForEmployers = () => {
  const benefits = [
    {
      icon: Search,
      title: "Advanced Talent Search",
      description: "Use powerful filters to find candidates by skills, education, location, experience level, and more."
    },
    {
      icon: Users,
      title: "Verified Profiles",
      description: "Access profiles with verified credentials and authentic information from serious job seekers."
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Connect directly with candidates through our secure messaging system and schedule interviews."
    },
    {
      icon: BarChart3,
      title: "Recruitment Analytics",
      description: "Track your hiring process with detailed analytics on profile views, applications, and response rates."
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your company information and hiring activities are protected with enterprise-grade security."
    },
    {
      icon: Clock,
      title: "Save Time & Money",
      description: "Reduce recruitment costs and time-to-hire by accessing pre-screened, qualified young professionals."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Youth Profiles" },
    { number: "500+", label: "Partner Companies" },
    { number: "85%", label: "Successful Placements" },
    { number: "30%", label: "Faster Hiring Process" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Outstanding Young Talent
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Connect with skilled, motivated youth ready to contribute to your organization's success. Access verified profiles and streamline your recruitment process.
          </p>
          <Link to="/employer-signup">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Start Hiring Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Leading Companies Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamline your recruitment process and discover exceptional talent with our comprehensive platform.
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
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already finding top talent through TalentConnect. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/employer-signup">
              <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                Get Started Free
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForEmployers;