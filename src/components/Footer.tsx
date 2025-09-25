import { Users, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <Users className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-foreground">TalentConnect</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Connecting talented youth with exceptional opportunities across Kenya and beyond. 
              Building the future of work, one connection at a time.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">For Youth</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Create Profile</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Career Resources</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">For Employers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Find Talent</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Post Jobs</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Employer Tools</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>hello@talentconnect.ke</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 TalentConnect. All rights reserved. Empowering youth, connecting futures.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;