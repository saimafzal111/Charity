import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold">Hope Foundation</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Hum ek registered charity organization hain jo Pakistan mein education, healthcare, 
              aur poverty alleviation ke liye kaam kar rahi hai. Aapki donations se hum hazaron 
              zindagiyaan behtar bana rahe hain.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-600" />
                <span className="text-gray-300">+92-300-1234567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-600" />
                <span className="text-gray-300">info@hopefoundation.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-600" />
                <span className="text-gray-300">Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Information</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>Registration No: NGO-2024-001</p>
              <p>Tax Exemption: U/S 2(36)</p>
              <p>NTN: 1234567-8</p>
              <p>Bank Account: 0123456789</p>
              <p>HBL Main Branch, Lahore</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Hope Foundation. All rights reserved. | 
            <span className="text-red-600"> Transparency</span> is our priority.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;