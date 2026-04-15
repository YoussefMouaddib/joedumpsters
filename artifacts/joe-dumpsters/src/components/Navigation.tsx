import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logo from "@assets/joedumplogo_1776285630908.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <img src={logo} alt="Joe's Dumpsters Logo" className="h-12 w-auto" />
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-xl text-foreground leading-tight tracking-tight">Joe's Dumpsters</span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Rentals & Removal</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} className={`text-sm font-medium transition-colors hover:text-primary ${location === item.path ? "text-primary" : "text-foreground/80"}`}>
                  {item.name}
                </Link>
              ))}
            </div>
            
            <Button size="lg" className="font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5" asChild>
              <a href="tel:512-586-9141">
                <Phone className="w-4 h-4 mr-2" />
                512-586-9141
              </a>
            </Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`text-lg font-medium p-2 rounded-md ${location === item.path ? "bg-primary/10 text-primary" : "text-foreground"}`}>
                  {item.name}
                </Link>
              ))}
              <Button size="lg" className="w-full mt-4 font-bold" asChild>
                <a href="tel:512-586-9141">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 512-586-9141
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
