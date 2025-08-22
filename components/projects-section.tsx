import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "FinanceFlow - SaaS Platform",
    description:
      "Enterprise financial management platform serving 10K+ users with real-time analytics, automated reporting, and multi-currency support.",
    image: "/modern-financial-dashboard.png",
    technologies: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "https://financeflow-demo.vercel.app",
    githubUrl: "https://github.com/alexchen-dev/financeflow",
  },
  {
    title: "DevCollab - Team Management",
    description:
      "Real-time collaboration platform for development teams with integrated code reviews, sprint planning, and performance metrics.",
    image: "/team-collaboration-dashboard.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "Docker"],
    liveUrl: "https://devcollab-app.com",
    githubUrl: "https://github.com/alexchen-dev/devcollab",
  },
  {
    title: "EcoTracker - Sustainability App",
    description:
      "Mobile-first application helping users track carbon footprint with AI-powered recommendations and community challenges.",
    image: "/eco-friendly-app-interface.png",
    technologies: ["React Native", "Expo", "Supabase", "TensorFlow.js", "TypeScript"],
    liveUrl: "https://ecotracker.app",
    githubUrl: "https://github.com/alexchen-dev/ecotracker",
  },
  {
    title: "CloudSync - File Management",
    description:
      "Secure cloud storage solution with end-to-end encryption, version control, and team sharing capabilities.",
    image: "/cloud-storage-interface.png",
    technologies: ["Vue.js", "Python", "FastAPI", "AWS S3", "PostgreSQL", "WebRTC"],
    liveUrl: "https://cloudsync-storage.com",
    githubUrl: "https://github.com/alexchen-dev/cloudsync",
  },
  {
    title: "AIWrite - Content Assistant",
    description:
      "AI-powered writing assistant with grammar checking, style suggestions, and multi-language support for content creators.",
    image: "/ai-writing-assistant-interface.png",
    technologies: ["Next.js", "OpenAI API", "Vercel AI SDK", "Tailwind CSS", "Supabase"],
    liveUrl: "https://aiwrite-assistant.com",
    githubUrl: "https://github.com/alexchen-dev/aiwrite",
  },
  {
    title: "CryptoPortfolio - Trading Dashboard",
    description:
      "Real-time cryptocurrency portfolio tracker with advanced analytics, price alerts, and automated trading strategies.",
    image: "/crypto-trading-dashboard.png",
    technologies: ["React", "TypeScript", "WebSocket", "Chart.js", "Node.js", "CoinGecko API"],
    liveUrl: "https://cryptoportfolio-tracker.com",
    githubUrl: "https://github.com/alexchen-dev/crypto-portfolio",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/ecommerce",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
    image: "/task-management-dashboard.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/taskmanager",
  },
  {
    title: "Weather Analytics Dashboard",
    description: "Data visualization platform for weather patterns with interactive charts and predictive analytics.",
    image: "/weather-analytics-dashboard.png",
    technologies: ["Vue.js", "Python", "FastAPI", "Chart.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/weather-dashboard",
  },
  {
    title: "Social Media Mobile App",
    description: "Cross-platform mobile application for social networking with real-time messaging and media sharing.",
    image: "/mobile-social-media-app.png",
    technologies: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/social-app",
  },
  {
    title: "AI Content Generator",
    description: "Machine learning powered content generation tool with natural language processing capabilities.",
    image: "/ai-content-generator-interface.png",
    technologies: ["Python", "TensorFlow", "Flask", "React", "OpenAI API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/ai-content",
  },
  {
    title: "Blockchain Voting System",
    description: "Secure and transparent voting platform built on blockchain technology with smart contracts.",
    image: "/blockchain-voting-interface.png",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/blockchain-voting",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise across various domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border bg-card overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                      Live Demo
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
