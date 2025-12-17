import { useState } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { DATA } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO / BK ICON */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
            BK
          </div>
          <span className="font-display font-semibold text-lg text-foreground hidden sm:inline">
            {DATA.profile.name}
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#projects" className="text-muted-foreground hover:text-foreground">
            Projects
          </a>
          <a href="#experience" className="text-muted-foreground hover:text-foreground">
            Experience
          </a>
          <a href="#skills" className="text-muted-foreground hover:text-foreground">
            Skills
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground">
            Contact
          </a>

          {/* SOCIALS — REPLACED RESUME */}
          <a
            href={DATA.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
            <a onClick={() => setOpen(false)} href="#projects">
              Projects
            </a>
            <a onClick={() => setOpen(false)} href="#experience">
              Experience
            </a>
            <a onClick={() => setOpen(false)} href="#skills">
              Skills
            </a>
            <a onClick={() => setOpen(false)} href="#contact">
              Contact
            </a>

            <div className="flex gap-4 pt-2">
              <a
                href={DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
