import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Mail, Phone, MapPin, Users, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EmployerSignup = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Company Profile Created!",
      description: "Welcome to TalentConnect. You can now start searching for talented youth.",
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Join as an Employer
          </h1>
          <p className="text-xl text-muted-foreground">
            Connect with talented young professionals and build your dream team
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Company Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Company Information
              </CardTitle>
              <CardDescription>
                Tell us about your company and what you're looking for in candidates.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" placeholder="Enter your company name" required />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="finance">Finance & Banking</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="retail">Retail & E-commerce</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="media">Media & Entertainment</SelectItem>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companySize">Company Size</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">1-10 employees</SelectItem>
                      <SelectItem value="small">11-50 employees</SelectItem>
                      <SelectItem value="medium">51-200 employees</SelectItem>
                      <SelectItem value="large">201-1000 employees</SelectItem>
                      <SelectItem value="enterprise">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Company Website</Label>
                <Input id="website" type="url" placeholder="https://yourcompany.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Company Location</Label>
                <Input id="location" placeholder="City, County, Kenya" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Company Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your company, mission, values, and what makes it a great place to work..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact Information
              </CardTitle>
              <CardDescription>
                Provide contact details for candidates to reach out to you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Person Name</Label>
                  <Input id="contactName" placeholder="HR Manager / Recruiter name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input id="jobTitle" placeholder="e.g., HR Manager, Talent Acquisition" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="recruiter@company.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+254 XXX XXX XXX" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hiring Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Hiring Preferences
              </CardTitle>
              <CardDescription>
                Help us understand what kind of talent you're looking for.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="positions">Types of Positions</Label>
                <Textarea 
                  id="positions" 
                  placeholder="List the types of roles you typically hire for (e.g., Software Developer, Marketing Assistant, Sales Representative)..."
                  className="min-h-[80px]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="experienceLevel">Preferred Experience Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="junior">Junior Level</SelectItem>
                      <SelectItem value="mid">Mid Level</SelectItem>
                      <SelectItem value="mixed">All Levels</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hiringFrequency">Hiring Frequency</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="How often do you hire?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                      <SelectItem value="as-needed">As Needed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Special Requirements</Label>
                <Textarea 
                  id="requirements" 
                  placeholder="Any specific skills, certifications, or qualifications you typically look for..."
                  className="min-h-[80px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" size="lg" variant="hero" className="px-12">
              Create Company Profile
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              By creating a profile, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployerSignup;