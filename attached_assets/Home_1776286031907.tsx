import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Zap,
  Trash2,
  DollarSign,
  Truck,
  Box,
  Construction,
  Leaf,
  Building,
  Clock,
  Star,
  Phone,
  ArrowRight,
  CheckCircle,
  Shield,
  ThumbsUp,
} from "lucide-react";
import { SiGoogle } from "react-icons/si";
import googlePng from "@assets/google_1769221388476.png";
import { BUSINESS_INFO, SLIDESHOW_IMAGES, BEFORE_AFTER_JOBS } from "@/lib/config";

const valueProps = [
  {
    icon: Zap,
    title: "Fast Response",
    description: "Same-day junk removal available. We're local and ready to haul.",
  },
  {
    icon: Shield,
    title: "Professional Team",
    description: "Respectful of your property. We handle everything.",
  },
  {
    icon: DollarSign,
    title: "Straightforward Pricing",
    description: "No hidden fees. Transparent estimates based on volume/items.",
  },
];

const services = [
  {
    icon: Box,
    title: "Furniture & Appliances",
    description: "Old couches, mattresses, refrigerators, and more removed with ease.",
  },
  {
    icon: Truck,
    title: "Garage & Storage",
    description: "Full cleanouts of cluttered garages, attics, and storage units.",
  },
  {
    icon: Construction,
    title: "Construction Debris",
    description: "Renovation waste, wood, drywall, and debris removal for contractors.",
  },
  {
    icon: Leaf,
    title: "Yard Waste",
    description: "Branches, clippings, and outdoor debris cleared quickly.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Downtown",
    rating: 5,
    text: "L.E.M was fantastic! They cleared out my entire garage in under two hours. Professional and very careful with my home.",
  },
  {
    name: "Michael R.",
    location: "Westside",
    rating: 5,
    text: "Great experience. Called for appliance removal and they were here the same day. Transparent pricing and very friendly.",
  },
  {
    name: "Jennifer L.",
    location: "Suburbs",
    rating: 5,
    text: "They handled an estate cleanout for us with total respect and efficiency. Highly recommend L.E.M for any big cleanup job.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        {SLIDESHOW_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img src={img} alt="Junk Removal" className="w-full h-full object-cover" />
          </div>
        ))}
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-full mb-6 text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Eco-Friendly Disposal</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4" data-testid="text-hero-headline">
              Tired of the Clutter?
              <span className="text-green-500 block mt-2">We'll Haul It Away</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl" data-testid="text-hero-subheadline">
              Fast. Reliable. Done Right. L.E.M Junk Removal handles the heavy lifting so you don't have to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-base md:text-lg px-8 py-6" data-testid="button-hero-schedule">
                  Book Pickup
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href={`tel:${BUSINESS_INFO.phoneNumeric}`}>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-base md:text-lg px-8 py-6" data-testid="button-hero-call">
                  <Phone className="w-5 h-5 mr-2" />
                  Call or Text {BUSINESS_INFO.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{BUSINESS_INFO.slogan}</h2>
            <p className="text-lg text-muted-foreground">See the difference professional junk removal makes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {BEFORE_AFTER_JOBS.map((job, idx) => (
              <div key={idx} className="space-y-4" data-testid={`gallery-job-${idx}`}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Before</span>
                    <div className="aspect-video rounded-lg overflow-hidden border">
                      <img src={job.before} alt="Before" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-green-600">After</span>
                    <div className="aspect-video rounded-lg overflow-hidden border-2 border-green-500/20">
                      <img src={job.after} alt="After" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <p className="text-center font-medium text-muted-foreground italic">{job.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-heading">
              Real Customers. Real Feedback.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We take pride in our work and it shows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 border-green-500/10 relative"
                data-testid={`card-testimonial-${index}`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-green-600">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <img src={googlePng} alt="Google" className="w-5 h-5 object-contain" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {valueProps.map((prop, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 text-center hover:-translate-y-1 transition-transform duration-300 border-green-500/10"
                data-testid={`card-value-prop-${index}`}
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <prop.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
                <p className="text-muted-foreground">{prop.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-services-heading">
              How We Can Help
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional hauling for residential and commercial spaces. No job is too big or too small.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:-translate-y-1 transition-transform duration-300 border-green-500/10"
                data-testid={`card-service-${index}`}
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <Link href="/services">
                  <span className="text-sm font-medium text-green-600 hover:underline inline-flex items-center gap-1">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-green-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to clear your space?</h2>
            <p className="text-green-50">Same-day service often available. Call or text today.</p>
          </div>
          <a href={`tel:${BUSINESS_INFO.phoneNumeric}`}>
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-6">
              <Phone className="w-5 h-5 mr-2" />
              {BUSINESS_INFO.phone}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
