import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Led team of 5 developers on major product redesign",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2020 - 2022",
    description:
      "Developed MVP for fintech startup from concept to production. Built responsive web applications and RESTful APIs.",
    technologies: ["Vue.js", "Python", "FastAPI", "MongoDB", "Redis"],
    achievements: [
      "Built core platform serving 10K+ active users",
      "Integrated payment processing with 99.9% uptime",
      "Developed real-time notification system",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "Remote",
    period: "2019 - 2020",
    description:
      "Created responsive websites and web applications for diverse clients. Collaborated with design teams to implement pixel-perfect UIs.",
    technologies: ["JavaScript", "React", "SASS", "WordPress", "jQuery"],
    achievements: [
      "Delivered 25+ client projects on time and budget",
      "Improved website performance scores by average 35%",
      "Established component library used across projects",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "WebDev Studio",
    location: "New York, NY",
    period: "2018 - 2019",
    description:
      "Assisted in development of e-commerce platforms and corporate websites. Gained experience in full development lifecycle.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    achievements: [
      "Contributed to 15+ successful project launches",
      "Learned modern development practices and tools",
      "Collaborated effectively in agile development environment",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles and the impact I've made along the way
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="border-border bg-card hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-card-foreground mb-1">{exp.title}</h3>
                          <div className="flex items-center text-muted-foreground mb-2">
                            <Building size={16} className="mr-2" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-card-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-secondary/50 text-secondary-foreground text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
