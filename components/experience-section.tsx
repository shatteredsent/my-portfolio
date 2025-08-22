import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Software Developer (Full Stack)",
    company: "Banyan Labs",
    location: "Tennessee",
    period: "2025 - Present",
    description:
      "Design, develop, and deploy full-stack applications using JavaScript, Python, and SQL. Collaborate in Agile/Scrum environment with focus on clean, maintainable code and API integration.",
    technologies: ["JavaScript", "React", "Node.js", "Python", "SQL", "Git", "GitHub"],
    achievements: [
      "Building and integrating APIs to enhance data accessibility",
      "Conducting peer code reviews to ensure efficient code quality",
      "Streamlining workflows for end users through database solutions",
    ],
  },
  {
    title: "Lead Sales Consultant",
    company: "Reiselman Motor Company",
    location: "Tennessee",
    period: "2023 - 2024",
    description:
      "Recruited and trained junior sales staff while developing consultative sales techniques. Led performance coaching and retention initiatives to enhance team effectiveness.",
    technologies: ["Team Training", "Performance Analytics", "Customer Relations"],
    achievements: [
      "Recruited and trained junior sales staff",
      "Enhanced team sales performance through coaching",
      "Developed consultative sales techniques and service models",
    ],
  },
  {
    title: "High School Principal",
    company: "Augusta High School",
    location: "Arkansas",
    period: "2022 - 2023",
    description:
      "Directed personnel management including licensure verification, recruitment, and performance evaluation. Ensured regulatory compliance while managing staff development and certification processes.",
    technologies: ["Data Analysis", "Performance Management", "Regulatory Compliance"],
    achievements: [
      "Managed 40+ annual staff performance evaluations",
      "Implemented certification and compliance meeting protocols",
      "Collaborated with district teams to align hiring with policy standards",
    ],
  },
  {
    title: "Education Consultant & Literacy Specialist",
    company: "Arkansas Department of Education",
    location: "Arkansas",
    period: "2019 - 2022",
    description:
      "Designed and facilitated professional training for 1,500+ education professionals across 13 districts. Managed data-driven workforce development and secured state funding through strategic partnerships.",
    technologies: ["Data Analysis", "Training Design", "Performance Analytics"],
    achievements: [
      "Increased recruitment and retention by 7% in targeted schools",
      "Secured and managed $90K annual state-funded grant",
      "Improved hiring pipelines and reduced licensure processing times",
    ],
  },
  {
    title: "Lead Literacy Teacher",
    company: "Palestine-Wheatley High School",
    location: "Arkansas",
    period: "2015 - 2019",
    description:
      "Mentored new teachers and supported hiring processes within academic teams. Delivered data-informed instruction and participated in school improvement planning initiatives.",
    technologies: ["Data-Informed Instruction", "Team Leadership", "Performance Coaching"],
    achievements: [
      "Mentored and onboarded new teaching staff",
      "Participated in hiring panels and school improvement planning",
      "Delivered tailored instruction based on student performance data",
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
