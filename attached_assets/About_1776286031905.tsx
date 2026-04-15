import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Award, Users, Heart, Target, CheckCircle, ArrowRight, Phone, Trash2, Recycle, Zap } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/config";

const values = [
  { icon: Shield, title: "Professionalism", description: "We treat your property with respect and complete every job with a high level of care." },
  { icon: Recycle, title: "Responsible Disposal", description: "We prioritize donation and recycling to keep as much as possible out of landfills." },
  { icon: Zap, title: "Speed", description: "We know your time is valuable. We offer same-day service and quick, efficient hauling." },
  { icon: Target, title: "Reliability", description: "When we schedule a pickup, we show up. Straightforward communication every step of the way." },
];

export default function About() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-background to-green-100/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Local. Reliable.<span className="text-green-600 block mt-2">Professional Hauling.</span></h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {BUSINESS_INFO.name} is a locally owned and operated junk removal service dedicated to clearing your space and giving you peace of mind. We handle everything from single item pickups to full estate cleanouts.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our mission is simple: provide top-tier service while being responsible stewards of our community. We don't just dump - we donate and recycle whenever possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact"><Button size="lg" className="bg-green-600 hover:bg-green-700 text-base px-8">Schedule Online <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
                <a href={`tel:${BUSINESS_INFO.phoneNumeric}`}><Button size="lg" variant="outline" className="text-base px-8 border-green-600 text-green-600 hover:bg-green-50"><Phone className="w-5 h-5 mr-2" /> {BUSINESS_INFO.phone}</Button></a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-green-500/10 text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-lg font-medium text-muted-foreground">Committed to Quality</div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                   <div className="p-4 bg-green-50 rounded-lg"><Trash2 className="w-8 h-8 text-green-600 mx-auto mb-2"/><div className="text-xs font-bold uppercase">Efficient</div></div>
                   <div className="p-4 bg-green-50 rounded-lg"><Recycle className="w-8 h-8 text-green-600 mx-auto mb-2"/><div className="text-xs font-bold uppercase">Eco-Friendly</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24"><div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">{values.map((v, i) => (<Card key={i} className="p-6 text-center hover:-translate-y-1 transition-transform border-green-500/10"><div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4"><v.icon className="w-7 h-7 text-green-600" /></div><h3 className="text-lg font-semibold mb-2">{v.title}</h3><p className="text-sm text-muted-foreground">{v.description}</p></Card>))}</div></section>
    </div>
  );
}
