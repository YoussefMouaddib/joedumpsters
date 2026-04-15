import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, CalendarDays } from "lucide-react";
import img1 from "@assets/joedump1_1776285630908.jpg";

export default function Contact() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300">Ready to book a dumpster or schedule junk removal? We're here to help.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <a href="tel:512-586-9141" className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-primary/20 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Phone</h3>
                    <p className="text-xl text-slate-600 font-medium">512-586-9141</p>
                    <p className="text-sm text-slate-500 mt-1">Call us for immediate service or quotes</p>
                  </div>
                </a>

                <a href="mailto:info@joedumpsters.com" className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-primary/20 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Email</h3>
                    <p className="text-lg text-slate-600 font-medium">info@joedumpsters.com</p>
                    <p className="text-sm text-slate-500 mt-1">Send us an email for general inquiries</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Hours of Operation</h3>
                    <p className="text-lg text-slate-600 font-medium flex items-center gap-2">
                      <CalendarDays className="w-4 h-4" /> Mon - Sun
                    </p>
                    <p className="text-lg text-slate-600 font-medium">6:00 AM – 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Service Area</h3>
                    <p className="text-lg text-slate-600 font-medium">Southeast Austin</p>
                    <p className="text-slate-600">Austin, TX 78744</p>
                    <p className="text-sm text-slate-500 mt-1">Serving Austin and surrounding areas</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-3xl p-10 text-white flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-6">Fast & Reliable Service</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                At Joe's Dumpsters, we believe in straightforward communication and dependable service. Whether you need a dumpster delivered tomorrow or have a pile of junk that needs hauling away right now, give us a call.
              </p>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                When you call us, you'll speak directly to our team — no runarounds, no automated systems.
              </p>
              
              <div className="p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                <h3 className="font-bold text-primary mb-2 text-xl">Need a quote?</h3>
                <p className="text-slate-300 mb-6">Call us with the details of your project and we'll give you a fair, transparent price over the phone.</p>
                <Button size="xl" className="w-full bg-primary text-slate-900 hover:bg-primary/90 text-lg font-bold rounded-xl h-14 shadow-lg" asChild>
                  <a href="tel:512-586-9141">Call 512-586-9141</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
