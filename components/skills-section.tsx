import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone, Server, Palette } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"],
    color: "text-blue-500",
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Python", "Express.js", "FastAPI", "GraphQL", "REST APIs"],
    color: "text-green-500",
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes", "Redis"],
    color: "text-purple-500",
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "PWA"],
    color: "text-orange-500",
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "Java", "Go", "Rust"],
    color: "text-red-500",
  },
  {
    title: "Design & Tools",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "Git", "GitHub", "VS Code", "Postman"],
    color: "text-pink-500",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-muted mr-3 ${category.color}`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
