import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ShieldCheck, HeartHandshake } from "lucide-react";
import img3 from "@assets/joedump3_1776285630907.jpg";

export default function About() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">About Joe's Dumpsters</h1>
            <p className="text-xl text-slate-300">A family-owned business built on hard work, reliability, and serving our Austin neighbors.</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-slate max-w-none"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Joe's Dumpsters started with a simple idea: provide reliable, honest, and hardworking waste removal services to the Austin community. As a family-owned and operated business based right here in Southeast Austin, we aren't some faceless national franchise. We're your neighbors.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We understand that when you're tackling a big project—whether it's a home renovation, a garage cleanout, or a commercial construction job—the last thing you need to worry about is whether your dumpster will arrive on time or if the junk removal team will actually show up.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                That's why our promise is simple: we show up on time, we do exactly what we say we're going to do, and we offer fair, transparent pricing with absolutely no hidden fees. We treat every customer's property with the same respect and care we would treat our own.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Dependability First</h3>
                  <p className="text-slate-600">We respect your time and schedule. When you book with Joe's, you can count on prompt delivery and pick-up.</p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Community Focused</h3>
                  <p className="text-slate-600">We proudly serve Austin and surrounding areas, keeping our community clean and building lasting relationships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 text-slate-900">
            <MapPin className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Proudly Serving Austin, TX</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Based in Southeast Austin (78744), we provide our dumpster rental and junk removal services throughout the greater Austin area.
          </p>
          <Button size="xl" className="bg-primary text-slate-900 hover:bg-primary/90 text-lg font-bold rounded-full h-16 px-10" asChild>
            <a href="tel:512-586-9141">
              <Phone className="w-5 h-5 mr-2" /> Call 512-586-9141
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
