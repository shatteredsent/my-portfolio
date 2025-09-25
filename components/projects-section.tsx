import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Arkansas Education Performance Dashboard",
    description:
      "Data visualization dashboard showcasing district performance metrics and educational outcomes across 13 Arkansas school districts. Built during my tenure as Education Consultant at Arkansas Department of Education.",
    image: "/Header.png",
    technologies: ["React", "TypeScript", "CSS Grid", "Data Visualization"],
    liveUrl: "https://github.com/shatteredsent/my-portfolio/tree/main/projects/education-dashboard",
    githubUrl: "https://github.com/shatteredsent/my-portfolio/tree/main/projects/education-dashboard",
  },
  {
    title: "Weekly Meal Planner",
    description:
      "Cross-platform meal planning application that allows users to select recipes for each day of the week and automatically generates shopping lists based on selected ingredients. Features Alexa integration for voice-activated shopping list management.",
    image: "/meal-planner-preview.png",
    technologies: ["Flutter", "Dart", "Alexa Skills Kit", "Cross-platform Development"],
    liveUrl: "https://shatteredsent.github.io/meal-planner-app/",
    githubUrl: "https://github.com/shatteredsent/my_app",
  },
  {
    title: "Shattered & Sent Ministry Website",
    description:
      "Christian ministry website featuring video content integration, blog posts, and devotional resources. Built to share stories of redemption and provide biblical insights for spiritual growth, including study guides and practical faith applications.",
    image: "/shattered-sent-preview.png",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages", "YouTube API"],
    liveUrl: "https://shatteredsent.github.io/Shattered-Sent/",
    githubUrl: "https://github.com/shatteredsent/Shattered-Sent",
  },
  {
    title: "Customer Data Processing Pipeline",
    description: "End-to-end ETL pipeline that extracts customer data from multiple sources, transforms and validates the data for consistency, and loads it into a PostgreSQL database. Includes automated data quality checks, error handling, and performance monitoring to ensure reliable data processing workflows.",
    image: "/etl-pipeline-preview.png", // You'll need to create this
    technologies: ["Python", "PostgreSQL", "SQL", "Pandas", "ETL", "Data Validation"],
  },
  {
    title: "Automated Data Integration System",
    description: "Currently developing a scalable ETL pipeline to automate data integration from external APIs and flat files. Features include real-time data processing, transformation logic for data normalization, and automated loading into data warehouse. Implementing comprehensive logging and monitoring for production deployment.",
    image: "/data-integration-preview.png", // You'll need to create this  
    technologies: ["Python", "SQL", "API Integration", "Data Warehousing", "ETL Automation", "JSON Processing"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning web applications and cross-platform mobile development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border bg-card overflow-hidden hover-lift"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-primary/20 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="mr-1" />
                      Live App
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={14} />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}