import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Shield, Zap, DollarSign, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/config";

export default function Contact() {
  return (
    <div>
      <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 via-background to-green-100/30 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Pickup</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">Ready to clear some space? Reach out to us via call, text, or email to schedule your junk removal appointment.</p>
      </section>

      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-8 border-green-500/10 flex flex-col items-center text-center hover-elevate transition-all">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Call or Text</h2>
            <p className="text-muted-foreground mb-6">The fastest way to get an estimate and schedule a time slot.</p>
            <a href={`tel:${BUSINESS_INFO.phoneNumeric}`} className="w-full">
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                {BUSINESS_INFO.phone}
              </Button>
            </a>
          </Card>

          <Card className="p-8 border-green-500/10 flex flex-col items-center text-center hover-elevate transition-all">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Email Us</h2>
            <p className="text-muted-foreground mb-6">Send us photos of your junk for a more accurate remote estimate.</p>
            <a href={`mailto:${BUSINESS_INFO.email}`} className="w-full">
              <Button variant="outline" size="lg" className="w-full border-green-600 text-green-600 hover:bg-green-50 text-lg py-6 break-all px-2">
                {BUSINESS_INFO.email}
              </Button>
            </a>
          </Card>

          <Card className="p-8 border-green-500/10 flex flex-col items-center text-center hover-elevate transition-all">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Availability</h2>
            <p className="text-muted-foreground mb-2 font-medium text-foreground italic">Flexible Hours</p>
            <div className="text-muted-foreground space-y-1">
              <p>Weekdays: 6:00 PM — 10:00 PM</p>
              <p>Weekends: 7:00 AM — 8:00 PM</p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-green-600 font-semibold bg-green-50 px-4 py-2 rounded-full text-sm">
              <Zap className="w-4 h-4" />
              Same-Day Service Available
            </div>
          </Card>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="p-8 bg-primary/5 border-primary/20 text-center">
            <h3 className="font-bold text-xl mb-4 flex items-center justify-center gap-2">
              <Shield className="w-6 h-6 text-green-600" />
              Why Choose L.E.M?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full" />
                <span className="text-sm">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full" />
                <span className="text-sm">Eco-Friendly Disposal</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full" />
                <span className="text-sm">Upfront Pricing - No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full" />
                <span className="text-sm">Locally Owned & Operated</span>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
