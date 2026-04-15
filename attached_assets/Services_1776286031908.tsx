import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, Truck, Box, Construction, Leaf, Building, Clock, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/config";

const services = [
  { icon: Box, title: "Furniture & Appliances", description: "Old couches, mattresses, refrigerators, and more removed with ease from any floor of your home." },
  { icon: Truck, title: "Garage & Storage", description: "Full cleanouts of cluttered garages, attics, and storage units to help you reclaim your space." },
  { icon: Construction, title: "Construction Debris", description: "Fast removal of renovation waste, wood, drywall, and other debris for homeowners and contractors." },
  { icon: Leaf, title: "Yard Waste", description: "Branches, clippings, soil, and outdoor debris cleared quickly so you can enjoy your yard again." },
  { icon: Building, title: "Estate & Eviction", description: "Respectful and efficient full-property cleanouts during difficult transitions or tenant turnovers." },
  { icon: Clock, title: "Same-Day Removal", description: "In a hurry? We offer rapid response for urgent junk removal needs across the area." },
];

export default function Services() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-background to-green-100/30 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Junk Removal Services</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">From single item pickups to full property cleanouts, we handle the heavy lifting so you don't have to.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact"><Button size="lg" className="bg-green-600 hover:bg-green-700 text-base px-8">Book a Pickup <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
          <a href={`tel:${BUSINESS_INFO.phoneNumeric}`}><Button size="lg" variant="outline" className="text-base px-8 border-green-600 text-green-600 hover:bg-green-50"><Phone className="w-5 h-5 mr-2" /> Call or Text</Button></a>
        </div>
      </section>
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <Card key={i} className="p-6 md:p-8 hover:-translate-y-1 transition-transform border-green-500/10">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4"><s.icon className="w-6 h-6 text-green-600" /></div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{s.description}</p>
              <Link href="/contact"><span className="text-sm font-medium text-green-600 hover:underline inline-flex items-center gap-1">Contact for service <ArrowRight className="w-4 h-4" /></span></Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
