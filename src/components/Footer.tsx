import { Link } from "wouter";
import logo from "@assets/joedumplogo_1776285630908.png";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 bg-white p-2 rounded-xl inline-block">
              <img src={logo} alt="Joe's Dumpsters Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-slate-300 mb-6 max-w-sm">
              Say goodbye to unwanted junk with Joe's Dumpsters. Your trusted local neighbor for professional, dependable dumpster rental and junk removal in Austin, TX.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Our Services</h4>
            <ul className="space-y-4 text-slate-300">
              <li>Dumpster Rentals</li>
              <li>Junk Removal & Haul Away</li>
              <li>Residential Cleanouts</li>
              <li>Commercial Cleanouts</li>
              <li>Construction Debris</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:512-586-9141" className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  512-586-9141
                </a>
              </li>
              <li>
                <a href="mailto:info@joedumpsters.com" className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  info@joedumpsters.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Southeast Austin<br/>Austin, TX 78744</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Joe's Dumpsters. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Family-owned and operated in Austin, TX</p>
        </div>
      </div>
    </footer>
  );
}
