import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl">
            My professional journey across data analytics, content strategy, and product insights.
          </p>
        </motion.div>

        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
          {DATA.experience.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background"></div>
              
              <div className="bg-white p-6 md:p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                    <div className="flex items-center gap-2 text-primary font-medium mt-1">
                      <Building2 className="w-4 h-4" />
                      {job.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-4 h-4" />
                    {job.period}
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6 list-disc list-outside ml-4 text-muted-foreground">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                
                {job.skills && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {job.skills.map(skill => (
                      <span key={skill} className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
