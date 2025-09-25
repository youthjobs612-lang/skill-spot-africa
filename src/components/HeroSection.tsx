import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BriefcaseIcon, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Connect
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Talented Youth </span>
                with Dream Opportunities
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empowering young professionals in Kenya and beyond to showcase their skills, 
                while helping employers discover exceptional talent. Your career journey starts here.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Create Your Profile
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                <BriefcaseIcon className="h-5 w-5 mr-2" />
                Find Talent
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1,200+</div>
                <div className="text-sm text-muted-foreground">Youth Registered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">350+</div>
                <div className="text-sm text-muted-foreground">Employers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">750+</div>
                <div className="text-sm text-muted-foreground">Successful Connections</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img 
                src={heroImage}
                alt="Young professionals collaborating in modern workspace"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-gradient-card p-4 rounded-xl shadow-card backdrop-blur-sm border border-border">
              <div className="flex items-center space-x-2">
                <div className="bg-success/10 p-2 rounded-lg">
                  <Star className="h-4 w-4 text-success" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Top Rated</div>
                  <div className="text-xs text-muted-foreground">95% Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-card p-4 rounded-xl shadow-card backdrop-blur-sm border border-border">
              <div className="flex items-center space-x-2">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Active Community</div>
                  <div className="text-xs text-muted-foreground">Join 1000+ members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;