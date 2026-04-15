import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Truck, Recycle, Home, Building2, HardHat, CheckCircle2, ArrowRight } from "lucide-react";
import img4 from "@assets/joedump4_1776285630906.jpg";
import img2 from "@assets/joedump2_1776285630908.jpg";

export default function Services() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${img4})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300">From driveway-safe dumpster rentals to full-service junk removal, we have the right solution for your project.</p>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={img2} alt="Dumpster Rental" className="w-full h-auto object-cover aspect-video" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <h3 className="text-3xl font-bold text-white">Dumpster Rentals</h3>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Truck className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Driveway-Safe Dumpster Rentals</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We offer a variety of dumpster sizes perfect for any project. Our roll-off dumpsters are designed to be driveway-safe, and we always use protective boards to ensure zero damage to your property. We drop it off, you fill it up on your schedule, and we haul it away when you're done.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "10-yard, 15-yard, and 20-yard sizes available",
                  "Flexible rental periods (1-7 days standard)",
                  "Transparent pricing with no hidden weight fees",
                  "Prompt delivery and pick-up exactly when scheduled"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="font-bold" asChild>
                <a href="tel:512-586-9141">Call for Pricing</a>
              </Button>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl lg:order-2"
            >
              <img src={img4} alt="Junk Removal" className="w-full h-auto object-cover aspect-video" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <h3 className="text-3xl font-bold text-white">Junk Removal & Haul Away</h3>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6">
                <Recycle className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Full-Service Junk Removal</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Don't want to do the heavy lifting yourself? Let our professional team handle it. You just point to what needs to go, and we'll load it up and haul it away. We sort items for donation, recycling, and proper disposal.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "We handle all the heavy lifting and loading",
                  "Eco-friendly disposal and recycling",
                  "Single-item pick-ups (appliances, furniture)",
                  "Full property cleanouts"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="font-bold" asChild>
                <a href="tel:512-586-9141">Get a Free Estimate</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cleanouts Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Specialized Cleanout Services</h2>
            <p className="text-lg text-slate-600">Whatever type of space you need cleared out, we have the experience to get it done quickly and efficiently.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="w-8 h-8" />,
                title: "Residential Cleanouts",
                desc: "Garage cleanouts, estate cleanouts, basement purging, and yard debris removal. We treat your home with respect."
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Commercial Cleanouts",
                desc: "Office furniture removal, retail space clear-outs, warehouse decluttering, and property management evictions."
              },
              {
                icon: <HardHat className="w-8 h-8" />,
                title: "Construction Debris",
                desc: "Post-renovation cleanup, roofing materials, drywall, wood, and general contractor site clearing."
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-slate-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-medium">Contact us today to schedule your delivery or pick-up. We're ready to get to work.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="bg-slate-900 text-white hover:bg-slate-800 text-lg font-bold rounded-full h-16 px-10 shadow-xl hover:scale-105 transition-transform" asChild>
              <a href="tel:512-586-9141">Call Joe's: 512-586-9141</a>
            </Button>
            <Button size="xl" variant="outline" className="bg-transparent border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white text-lg font-bold rounded-full h-16 px-10 shadow-xl hover:scale-105 transition-transform" asChild>
              <Link href="/contact">Message Us <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
