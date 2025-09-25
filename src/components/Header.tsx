import { Button } from "@/components/ui/button";
import { Users, BriefcaseIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">TalentConnect</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#for-youth" className="text-muted-foreground hover:text-foreground transition-colors">
              For Youth
            </a>
            <a href="#for-employers" className="text-muted-foreground hover:text-foreground transition-colors">
              For Employers
            </a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <BriefcaseIcon className="h-4 w-4 mr-2" />
              I'm an Employer
            </Button>
            <Button variant="hero" size="sm">
              Join as Youth
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;