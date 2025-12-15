import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of projects where I've applied data science and engineering to solve real problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {DATA.projects.map((project, index) => {
            const Icon = project.icon;
            const isHighlighted = project.highlight;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={isHighlighted ? "md:col-span-2" : ""}
              >
                <Card className={cn(
                  "h-full flex flex-col hover:border-primary/50 transition-all hover:shadow-lg group bg-white border-border/60",
                  isHighlighted ? "border-primary/40 shadow-md bg-primary/5" : ""
                )}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={cn(
                        "p-2 rounded-lg transition-colors",
                        isHighlighted ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                      )}>
                        {Icon && <Icon className="w-6 h-6" />}
                      </div>
                      {isHighlighted && (
                         <span className="text-xs font-bold px-2 py-1 bg-primary text-primary-foreground rounded-full uppercase tracking-wider">Featured</span>
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <CardDescription className={cn("text-base leading-relaxed", isHighlighted ? "text-foreground/80" : "")}>
                      {project.description}
                    </CardDescription>
                    
                    {project.metrics && (
                      <div className={cn("space-y-1 p-3 rounded-lg", isHighlighted ? "bg-white/60 border border-primary/10" : "bg-secondary/50")}>
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                            <span className={cn("w-1.5 h-1.5 rounded-full", isHighlighted ? "bg-primary" : "bg-primary/60")}></span>
                            {metric}
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant={isHighlighted ? "default" : "secondary"} className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
