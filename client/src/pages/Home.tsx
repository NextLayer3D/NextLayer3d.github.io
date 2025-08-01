import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Precision 3D Printing Solutions
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Transform your ideas into reality with our cutting-edge 3D printing technology. 
                From prototypes to production, we deliver quality results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/gallery">
                  <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                    View Our Work
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold"
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional 3D printer creating detailed model"
                className="rounded-xl shadow-2xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional 3D printing services tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-neutral-50 rounded-xl hover:shadow-lg transition-shadow">
              <img
                src="https://pixabay.com/get/gc52c3effc56781a0a1a0e57e6ea4ea16a8fe2d2693275586488a6486c2531efe75b597043841510d2d934f8aa3a954817984911a38c9a1bbe571a1afc9acc6bd_1280.jpg"
                alt="3D printing process showing detailed layer formation"
                className="rounded-lg mx-auto mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Rapid Prototyping
              </h3>
              <p className="text-gray-600">
                Fast, accurate prototypes to bring your concepts to life quickly and cost-effectively.
              </p>
            </div>
            
            <div className="text-center p-8 bg-neutral-50 rounded-xl hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                alt="Industrial 3D printing setup with professional equipment"
                className="rounded-lg mx-auto mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Production Parts
              </h3>
              <p className="text-gray-600">
                High-quality production parts with precision engineering and durable materials.
              </p>
            </div>
            
            <div className="text-center p-8 bg-neutral-50 rounded-xl hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                alt="3D printer creating complex geometric structures"
                className="rounded-lg mx-auto mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Custom Design
              </h3>
              <p className="text-gray-600">
                Bespoke design services from concept to completion with expert consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              From idea to finished product in four simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-200">
                Discuss your project requirements and specifications
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray-200">
                Create and optimize 3D models for printing
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Printing</h3>
              <p className="text-gray-200">
                Precision printing with quality materials
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-gray-200">
                Quality control and timely delivery
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
