"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-foreground mb-4">Jake Shafer</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Full-Stack Software Developer passionate about creating innovative solutions and building exceptional user
              experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:john@example.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase())
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>API Development</li>
              <li>Database Design</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            Made with <Heart size={16} className="text-red-500 mx-1" /> by Jake Shafer
            <span className="mx-2">•</span>© {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
