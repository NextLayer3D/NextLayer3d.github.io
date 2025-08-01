import { Link } from "wouter";
import { Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">NextLayer 3D</h3>
            <p className="text-gray-200 mb-4">
              Precision 3D printing solutions for your business needs.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-200 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Rapid Prototyping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Production Parts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Custom Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Consultation
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <Link href="/about">
                  <a className="hover:text-white transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="hover:text-white transition-colors">Portfolio</a>
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-200">
              <p>
                123 Innovation Drive
                <br />
                Tech City, TC 12345
              </p>
              <p>Phone: (555) 123-NEXT</p>
              <p>Email: info@nextlayer3d.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-200">
          <p>&copy; 2024 NextLayer 3D Printing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
