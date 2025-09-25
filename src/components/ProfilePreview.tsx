import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ProfilePreview = () => {
  const sampleProfiles = [
    {
      id: 1,
      name: "Sarah Wanjiku",
      title: "Software Developer",
      location: "Nairobi, Kenya",
      education: "BSc Computer Science - University of Nairobi",
      skills: ["React", "Node.js", "Python", "MongoDB"],
      experience: "2 years",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1494790108755-2616b9e5dd06?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "James Ochieng",
      title: "Digital Marketing Specialist",
      location: "Mombasa, Kenya",
      education: "Diploma in Marketing - Kenya Institute of Management",
      skills: ["Social Media", "SEO", "Content Creation", "Analytics"],
      experience: "3 years",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Grace Akinyi",
      title: "Graphic Designer",
      location: "Kisumu, Kenya",
      education: "Certificate in Graphic Design - Nairobi Institute of Technology",
      skills: ["Photoshop", "Illustrator", "Figma", "Branding"],
      experience: "1 year",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Meet Our Exceptional Youth
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover talented young professionals ready to contribute to your organization's success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProfiles.map((profile) => (
            <Card key={profile.id} className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-border/50">
              <CardHeader className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
                  <img 
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{profile.name}</h3>
                  <p className="text-primary font-medium">{profile.title}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 text-secondary" />
                  {profile.location}
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Education</p>
                  <p className="text-sm text-muted-foreground">{profile.education}</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Key Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {profile.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{profile.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Experience: </span>
                    <span className="font-medium text-foreground">{profile.experience}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium text-accent">{profile.rating}</span>
                    <span className="text-accent">★</span>
                  </div>
                </div>
                
                <Link to={`/profile/${profile.id}`}>
                  <Button className="w-full" variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Full Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Browse All Profiles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfilePreview;