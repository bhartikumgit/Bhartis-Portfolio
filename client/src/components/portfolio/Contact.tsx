import { DATA } from "@/lib/data";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export function Contact() {
  return (
    <footer id="contact" className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Let's build something meaningful.</h2>
            <p className="text-white/60 text-lg mb-8 max-w-md">
              Whether you need deep data analysis, a GTM strategy, or a functional prototype, I'm ready to help.
            </p>
            
            <div className="space-y-4">
              <a href={`mailto:${DATA.profile.email}`} className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                <div className="p-2 bg-white/10 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                {DATA.profile.email}
              </a>
              <a href={DATA.profile.linkedin} target="_blank" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                <div className="p-2 bg-white/10 rounded-full">
                  <Linkedin className="w-5 h-5" />
                </div>
                LinkedIn Profile
              </a>
              <a href={DATA.profile.github} target="_blank" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                <div className="p-2 bg-white/10 rounded-full">
                  <Github className="w-5 h-5" />
                </div>
                GitHub Profile
              </a>
              <div className="flex items-center gap-4 text-white/80">
                <div className="p-2 bg-white/10 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                {DATA.profile.phone}
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Name</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                <input type="email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="hello@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full bg-white text-foreground font-bold py-3 rounded-lg hover:bg-white/90 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Bharti Kumari. All rights reserved. Built with React & Tailwind.
        </div>
      </div>
    </footer>
  );
}
