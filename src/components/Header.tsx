import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, BriefcaseIcon, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">TalentConnect</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link to="/for-youth" className="text-muted-foreground hover:text-foreground transition-colors">
              For Youth
            </Link>
            <Link to="/for-employers" className="text-muted-foreground hover:text-foreground transition-colors">
              For Employers
            </Link>
          </nav>
          
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/employer-signup">
              <Button variant="outline" size="sm">
                <BriefcaseIcon className="h-4 w-4 mr-2" />
                I'm an Employer
              </Button>
            </Link>
            <Link to="/join-youth">
              <Button variant="hero" size="sm">
                Join as Youth
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/how-it-works" 
                className="text-muted-foreground hover:text-foreground transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/for-youth" 
                className="text-muted-foreground hover:text-foreground transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                For Youth
              </Link>
              <Link 
                to="/for-employers" 
                className="text-muted-foreground hover:text-foreground transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                For Employers
              </Link>
            </nav>
            
            <div className="flex flex-col space-y-3 pt-3 border-t border-border">
              <Link to="/employer-signup" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="sm" className="w-full justify-center">
                  <BriefcaseIcon className="h-4 w-4 mr-2" />
                  I'm an Employer
                </Button>
              </Link>
              <Link to="/join-youth" onClick={() => setIsMenuOpen(false)}>
                <Button variant="hero" size="sm" className="w-full justify-center">
                  Join as Youth
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;