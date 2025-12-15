import { DATA } from "@/lib/data";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-4">
            About Me
            <div className="h-px flex-1 bg-border"></div>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-foreground font-medium text-xl">
                I find clarity in chaos.
              </p>
              <p>
                My journey isn't just about writing code or analyzing spreadsheets—it's about understanding the "why" behind the data. Whether I'm building a machine learning model to predict churn or crafting a GTM strategy based on market signals, my goal is always the same: <strong className="text-primary font-medium">Actionable Impact.</strong>
              </p>
              <p>
                With a background in Computer Science and hands-on experience in Business Analytics, I bridge the gap between technical complexity and business strategy. I don't just report numbers; I tell the story they're hiding.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border h-fit">
              <h3 className="font-display font-bold text-lg mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Education</span>
                  <span className="font-medium text-right">B.Tech CSE, VIT Bhopal</span>
                </li>
                <li className="flex items-center justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Focus</span>
                  <span className="font-medium text-right">Data, Strategy, Dev</span>
                </li>
                <li className="flex items-center justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium text-right">{DATA.profile.location}</span>
                </li>
                <li className="flex items-center justify-between pt-2">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-green-600 font-medium text-right flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Open to work
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
