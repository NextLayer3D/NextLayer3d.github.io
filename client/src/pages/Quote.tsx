import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Clock } from "lucide-react";

export default function Quote() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    description: "",
    quantity: "",
    timeline: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Your Quote
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to bring your project to life? Fill out our form and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2">
                    Company
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="projectType" className="text-sm font-medium text-gray-700 mb-2">
                  Project Type *
                </Label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rapid-prototyping">Rapid Prototyping</SelectItem>
                    <SelectItem value="production-parts">Production Parts</SelectItem>
                    <SelectItem value="custom-design">Custom Design</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description" className="text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </Label>
                <Textarea
                  id="description"
                  rows={5}
                  placeholder="Please describe your project requirements, materials, timeline, and any specific details..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="quantity" className="text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="1"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange("quantity", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="timeline" className="text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rush">Rush (1-3 days)</SelectItem>
                      <SelectItem value="standard">Standard (1-2 weeks)</SelectItem>
                      <SelectItem value="extended">Extended (2-4 weeks)</SelectItem>
                      <SelectItem value="no-rush">No rush</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2">
                  File Upload
                </Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <p className="text-gray-600">
                    Drag and drop your 3D files here, or click to browse
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Supported formats: STL, OBJ, 3MF, PLY (Max 25MB)
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-white py-4 px-8 rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                Submit Quote Request
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Prefer to Contact Us Directly?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                <p className="text-gray-600">(555) 123-NEXT</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <p className="text-gray-600">quotes@nextlayer3d.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                <p className="text-gray-600">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
