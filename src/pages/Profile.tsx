import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Calendar, Star, Award, Briefcase, GraduationCap, MessageCircle } from "lucide-react";

const Profile = () => {
  const { id } = useParams();
  
  // Sample profile data - in a real app, this would be fetched based on the ID
  const sampleProfiles = [
    {
      id: 1,
      name: "Sarah Wanjiku",
      title: "Software Developer",
      location: "Nairobi, Kenya",
      email: "sarah.wanjiku@email.com",
      education: "BSc Computer Science - University of Nairobi",
      graduationYear: 2022,
      grade: "Second Class Upper",
      skills: ["React", "Node.js", "Python", "MongoDB", "JavaScript", "HTML/CSS", "Git", "Docker"],
      experience: "2 years",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1494790108755-2616b9e5dd06?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate software developer with expertise in full-stack web development. I love creating user-friendly applications that solve real-world problems. Always eager to learn new technologies and contribute to innovative projects.",
      workExperience: [
        {
          title: "Junior Software Developer",
          company: "TechCorp Kenya",
          duration: "2022 - Present",
          description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions."
        },
        {
          title: "Software Development Intern",
          company: "Innovation Hub",
          duration: "2021 - 2022",
          description: "Participated in agile development processes and contributed to various client projects. Gained experience in database design and API development."
        }
      ],
      projects: [
        {
          name: "E-commerce Platform",
          description: "Built a full-stack e-commerce platform with payment integration",
          technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
        },
        {
          name: "Task Management App",
          description: "Developed a collaborative task management application",
          technologies: ["React", "Firebase", "Material-UI"]
        }
      ],
      certifications: [
        "AWS Cloud Practitioner",
        "React Developer Certification",
        "Agile Development Fundamentals"
      ]
    },
    {
      id: 2,
      name: "James Ochieng",
      title: "Digital Marketing Specialist",
      location: "Mombasa, Kenya",
      email: "james.ochieng@email.com",
      education: "Diploma in Marketing - Kenya Institute of Management",
      graduationYear: 2021,
      grade: "Distinction",
      skills: ["Social Media Marketing", "SEO", "Content Creation", "Analytics", "PPC", "Email Marketing", "Graphic Design", "Copywriting"],
      experience: "3 years",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Creative digital marketing specialist with a proven track record of driving brand growth through innovative marketing strategies. Experienced in social media management, content creation, and performance analytics.",
      workExperience: [
        {
          title: "Digital Marketing Specialist",
          company: "Creative Agency Ltd",
          duration: "2021 - Present",
          description: "Managed social media campaigns for multiple clients, increased engagement by 150% on average. Created compelling content and implemented SEO strategies."
        },
        {
          title: "Marketing Assistant",
          company: "Local Business Hub",
          duration: "2020 - 2021",
          description: "Assisted in developing marketing materials and managing client communications. Learned fundamentals of digital marketing and customer relationship management."
        }
      ],
      projects: [
        {
          name: "Tourism Campaign",
          description: "Led a successful digital campaign for coastal tourism that increased bookings by 200%",
          technologies: ["Facebook Ads", "Instagram", "Google Analytics", "Canva"]
        }
      ],
      certifications: [
        "Google Ads Certified",
        "Facebook Blueprint Certification",
        "Content Marketing Certification"
      ]
    },
    {
      id: 3,
      name: "Grace Akinyi",
      title: "Graphic Designer",
      location: "Kisumu, Kenya",
      email: "grace.akinyi@email.com",
      education: "Certificate in Graphic Design - Nairobi Institute of Technology",
      graduationYear: 2023,
      grade: "Distinction",
      skills: ["Photoshop", "Illustrator", "Figma", "Branding", "UI/UX Design", "Typography", "Print Design", "Logo Design"],
      experience: "1 year",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Creative graphic designer passionate about visual storytelling and brand identity development. I specialize in creating engaging designs that communicate effectively and leave lasting impressions.",
      workExperience: [
        {
          title: "Freelance Graphic Designer",
          company: "Self-employed",
          duration: "2023 - Present",
          description: "Providing graphic design services to small businesses and startups. Specialized in logo design, branding packages, and social media graphics."
        }
      ],
      projects: [
        {
          name: "Restaurant Branding",
          description: "Complete brand identity for a local restaurant including logo, menu design, and signage",
          technologies: ["Illustrator", "Photoshop", "InDesign"]
        },
        {
          name: "Mobile App UI Design",
          description: "User interface design for a food delivery mobile application",
          technologies: ["Figma", "Principle", "Adobe XD"]
        }
      ],
      certifications: [
        "Adobe Certified Expert - Photoshop",
        "UI/UX Design Fundamentals",
        "Brand Identity Design Certificate"
      ]
    }
  ];

  const profile = sampleProfiles.find(p => p.id === parseInt(id || "1")) || sampleProfiles[0];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <Card className="mb-8">
          <CardHeader className="text-center space-y-6">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20">
              <img 
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{profile.name}</h1>
              <p className="text-xl text-primary font-medium mb-4">{profile.title}</p>
              <div className="flex items-center justify-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-accent" />
                  {profile.rating}
                </div>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <Button variant="hero" size="lg">
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Candidate
              </Button>
              <Button variant="outline" size="lg">
                Download CV
              </Button>
            </div>
          </CardHeader>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-foreground">About</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{profile.bio}</p>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Work Experience
                </h2>
              </CardHeader>
              <CardContent className="space-y-6">
                {profile.workExperience.map((job, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4">
                    <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{job.duration}</p>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-foreground">Projects</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                {profile.projects.map((project, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Education */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Education
                </h2>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium text-foreground">{profile.education}</p>
                <p className="text-sm text-muted-foreground">Graduated: {profile.graduationYear}</p>
                <p className="text-sm text-muted-foreground">Grade: {profile.grade}</p>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold text-foreground">Skills</h2>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Certifications
                </h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {profile.certifications.map((cert, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <Award className="h-3 w-3 mt-1 text-accent flex-shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-bold text-foreground">Quick Stats</h2>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium text-foreground">{profile.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rating</span>
                  <span className="font-medium text-foreground">{profile.rating}★</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projects</span>
                  <span className="font-medium text-foreground">{profile.projects.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Skills</span>
                  <span className="font-medium text-foreground">{profile.skills.length}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;