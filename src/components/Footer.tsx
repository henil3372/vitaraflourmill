import { Award, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Manufacturing', href: '#manufacturing' },
    { label: 'Quality', href: '#quality' },
    { label: 'Contact', href: '#contact' }
  ];

  const products = [
    'Deluxe Model - 1.25 HP',
    'Super Gold Model - 1.25 HP',
    'Deluxe Model - 1.5 HP',
    'Pulveriser Model',
    'Platinum Model',
    'Diamond & Imperial Models'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Vitara Flour Mill</h3>
                <p className="text-xs text-gray-400">Madhuvan Industries</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              ISO 9001:2015 certified manufacturer of premium flour milling machinery,
              serving diverse industries with quality and reliability.
            </p>
            <div className="flex items-center space-x-2 bg-gold-400/20 px-3 py-2 rounded">
              <Award className="w-4 h-4 text-gold-400" />
              <span className="text-xs text-gray-300">ISO 9001:2015 Certified</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {product}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ramnagar-1, National Highway 8-b,<br />
                  B/h. Khodiyar Garage,<br />
                  Near Lijjat Papad Rajkot - 360 002,<br />
                  Gujarat, India
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                <a
                  href="mailto:vitaraflourmill@gmail.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  vitaraflourmill@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Vitara Flour Mill - Madhuvan Industries. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Registered Trade Mark No. 4937307</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
