import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BriefcaseIcon } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Transform Your Career or Find Amazing Talent?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Join thousands of young professionals and forward-thinking employers who are building the future of work together.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">For Youth</h3>
                <p className="text-white/80">
                  Create your professional profile, showcase your skills, and connect with employers who value your potential.
                </p>
                <Button variant="secondary" size="lg" className="w-full group">
                  Start Your Journey
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <BriefcaseIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">For Employers</h3>
                <p className="text-white/80">
                  Discover exceptional young talent, review verified credentials, and build your team with Africa's brightest minds.
                </p>
                <Button variant="outline" size="lg" className="w-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary group">
                  Find Talent
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 text-white/70">
            <p className="text-sm">
              Trusted by 350+ employers • 1,200+ youth profiles • 750+ successful connections
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;