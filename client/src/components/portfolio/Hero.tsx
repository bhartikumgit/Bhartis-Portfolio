import { DATA } from "@/lib/data";
import {
  ArrowDown,
  Database,
  LayoutDashboard,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

      {/* HERO */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            Data · Product · GTM · Automation
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
            Hi, I’m <span className="text-primary">{DATA.profile.name}</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            The Insight Architect.
          </p>

          <p className="text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed mb-8">
            I like to call myself this because I focus on how information moves from
            raw data to decisions. My work connects analysis, product thinking, and
            go-to-market execution, supported by simple automations that reduce
            manual effort.
          </p>

          <a
            href="#projects"
            className="inline-block px-10 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-transform hover:-translate-y-1 shadow-lg shadow-primary/20"
          >
            View Work
          </a>
        </motion.div>

        {/* AVATAR */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
            <div className="absolute inset-0 bg-primary/25 rounded-full blur-3xl opacity-60 translate-x-6 translate-y-6" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white shadow-2xl">
              <img
                src="/images/avatar.png"
                alt={DATA.profile.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* EXPLANATION STRIP — pulled UP to fill space */}
      <div className="container mx-auto px-6 mt-16 grid gap-12 md:grid-cols-4 text-center">
        <div>
          <Database className="mx-auto mb-4 w-8 h-8 text-primary" />
          <h3 className="font-semibold mb-2">Data</h3>
          <p className="text-sm text-muted-foreground">
            Analyzing customer, product, and operational data to surface signals
            and trade-offs that matter.
          </p>
        </div>

        <div>
          <LayoutDashboard className="mx-auto mb-4 w-8 h-8 text-primary" />
          <h3 className="font-semibold mb-2">Product</h3>
          <p className="text-sm text-muted-foreground">
            Turning insights into prioritization decisions and clear product
            direction.
          </p>
        </div>

        <div>
          <TrendingUp className="mx-auto mb-4 w-8 h-8 text-primary" />
          <h3 className="font-semibold mb-2">GTM</h3>
          <p className="text-sm text-muted-foreground">
            Connecting analysis to growth through positioning, funnels, and
            execution.
          </p>
        </div>

        <div>
          <Zap className="mx-auto mb-4 w-8 h-8 text-primary" />
          <h3 className="font-semibold mb-2">Automation</h3>
          <p className="text-sm text-muted-foreground">
            Building lightweight workflows that remove manual work and make
            insights repeatable.
          </p>
        </div>
      </div>

      {/* SCROLL CUE */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
}
