export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm Jake Shafer, a passionate full-stack developer with a unique background in education and sales. 
                My journey from education consultant to software developer has given me a distinctive perspective on 
                building user-centered solutions that truly make a difference.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With experience managing teams, training professionals, and now crafting digital experiences, I bring 
                strong leadership skills and a collaborative approach to every project. I'm passionate about creating 
                clean, efficient code and building applications that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, mentoring others in their tech journey, 
                or working on projects that combine my love for education and technology.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Problem Solver
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Team Leader
                </div>
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  Lifelong Learner
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border-4 border-primary/20">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white text-8xl font-bold shadow-lg">
                    JS
                  </div>
                </div>
                {/* Uncomment and replace with your actual photo if desired
                <img 
                  src="/your-photo.jpg" 
                  alt="Jake Shafer" 
                  className="w-80 h-80 rounded-full object-cover shadow-lg border-4 border-primary/20"
                />
                */}
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years in Education</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">1500+</div>
              <div className="text-sm text-muted-foreground">Professionals Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">13</div>
              <div className="text-sm text-muted-foreground">Districts Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Lines of Code</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}