import { DATA } from "@/lib/data";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            Available for Opportunities
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6">
            Hi, I'm <span className="text-primary">{DATA.profile.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light mb-8 max-w-lg leading-relaxed">
            {DATA.profile.role}. <br/>
            <span className="text-foreground font-normal">{DATA.profile.tagline}</span>
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-transform hover:-translate-y-1 shadow-lg shadow-primary/20"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-white border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
            >
              View Work
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-50 translate-x-4 translate-y-4"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={DATA.profile.avatar} 
                alt={DATA.profile.name} 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
}
