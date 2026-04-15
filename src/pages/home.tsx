import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, Star, Truck, Recycle, MapPin } from "lucide-react";

import img1 from "@assets/joedump1_1776285630908.jpg";
import img2 from "@assets/joedump2_1776285630908.jpg";
import img3 from "@assets/joedump3_1776285630907.jpg";
import img4 from "@assets/joedump4_1776285630906.jpg";
import img5 from "@assets/Screenshot_2026-04-15_154121_1776285761034.png";
import img6 from "@assets/Screenshot_2026-04-15_154212_1776285761034.png";
import img7 from "@assets/Screenshot_2026-04-15_154227_1776285761033.png";

const slides = [img1, img2, img3, img4, img5, img6, img7];

const reviews = [
  { name: "Marcus T.", location: "North Austin, TX", text: "Called Joe's on a Friday and had a dumpster in my driveway by Saturday morning. The price was fair, no hidden fees, and they picked it up exactly when they said they would. Will definitely use them again for my next project." },
  { name: "Diane R.", location: "Round Rock, TX", text: "Joe's Dumpsters made our home renovation so much easier. They dropped off a clean dumpster on time and the pickup was seamless. Super responsive when I called with questions. I've already recommended them to two neighbors." },
  { name: "Carlos M.", location: "Cedar Park, TX", text: "Great local company. Used them for a garage cleanout — they were professional, prompt, and the whole process was hassle-free. The driver was friendly and careful not to damage my driveway. Definitely recommend!" }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="w-full flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-slate-950/70 z-10" />
            <img src={slides[currentSlide]} alt="Joe's Dumpsters at work" className="w-full h-full object-cover" />
          </motion.div>
        </AnimatePresence>

        <div className="container relative z-20 mx-auto px-4 text-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
              <MapPin className="w-4 h-4" /> Serving Austin, TX & Surrounding Areas
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              Say goodbye to unwanted junk with <span className="text-primary">Joe's Dumpsters</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-medium">
              Reliable dumpster rentals and professional junk removal from your trusted local neighbors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="xl" className="w-full sm:w-auto text-lg font-bold rounded-full h-16 px-8 shadow-xl hover:scale-105 transition-transform" asChild>
                <a href="tel:512-586-9141">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 512-586-9141
                </a>
              </Button>
              <Button size="xl" variant="outline" className="w-full sm:w-auto text-lg font-bold rounded-full h-16 px-8 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-sm shadow-xl hover:scale-105 transition-transform" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Professional Services You Can Count On</h2>
            <p className="text-lg text-slate-600">Whether you're tackling a major renovation, cleaning out the garage, or managing a construction site, we have the equipment and muscle to help.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div whileHover={{ y: -5 }} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Dumpster Rental</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Various sizes for any project. We drop it off, you fill it up, we haul it away. Transparent pricing with no hidden fees, ever.
              </p>
              <ul className="space-y-3 mb-8">
                {['Residential Driveway Safe', 'Flexible Rental Periods', 'Prompt Drop-off & Pick-up'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Button variant="link" className="text-primary font-bold p-0 hover:no-underline group" asChild>
                <Link href="/services" className="flex items-center">
                  Learn more <span className="group-hover:translate-x-1 transition-transform inline-block ml-2">→</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6">
                <Recycle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Junk Removal</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Point at what you want gone, and our team will handle the heavy lifting. We sort, load, and responsibly dispose of your items.
              </p>
              <ul className="space-y-3 mb-8">
                {['Full-Service Loading', 'Eco-friendly Disposal', 'Same-day Service Available'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Button variant="link" className="text-slate-900 font-bold p-0 hover:no-underline group" asChild>
                <Link href="/services" className="flex items-center">
                  Learn more <span className="group-hover:translate-x-1 transition-transform inline-block ml-2">→</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }} />
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Austin Chooses Joe's</h2>
            <p className="text-xl text-slate-400">We're not a faceless franchise. We're a family-owned local business that cares about our reputation and our community.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "No Hidden Fees", desc: "Honest, upfront pricing. What we quote is what you pay." },
              { title: "On-Time Guarantee", desc: "We respect your time. We show up when promised, every time." },
              { title: "Driveway Protection", desc: "We treat your property like our own, ensuring zero damage." }
            ].map((prop, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6 text-slate-900 font-bold text-xl">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{prop.title}</h3>
                <p className="text-slate-400">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Trusted by the Neighborhood</h2>
            <div className="flex justify-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative"
              >
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-bold text-slate-900">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-slate-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to clear the clutter?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-medium">Contact us today to schedule your delivery or pick-up. We're ready to get to work.</p>
          <Button size="xl" className="bg-slate-900 text-white hover:bg-slate-800 text-lg font-bold rounded-full h-16 px-10 shadow-xl hover:scale-105 transition-transform" asChild>
            <a href="tel:512-586-9141">Call Joe's: 512-586-9141</a>
          </Button>
        </div>
      </section>
    </main>
  );
}
