import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Award, Target, Building } from "lucide-react"

const impactMetrics = [
  {
    number: "1,500+",
    label: "Education Professionals Trained",
    description: "Across 13 Arkansas school districts",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    category: "Training & Development"
  },
  {
    number: "$270K",
    label: "$90K Grant Secured & Managed (x3)",
    description: "Received and managed a state-funded workforce development grant three times",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50",
    category: "Financial Impact"
  },
  {
    number: "7%",
    label: "Improvement in Recruitment & Retention",
    description: "In targeted schools through strategic partnerships",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    category: "Performance Improvement"
  },
  {
    number: "40+",
    label: "Staff Performance Evaluations",
    description: "Managed annually as high school principal",
    icon: Award,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    category: "Leadership"
  },
  {
    number: "13",
    label: "School Districts Served",
    description: "As education consultant and compliance liaison",
    icon: Building,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    category: "Reach & Scale"
  },
  {
    number: "100%",
    label: "Regulatory Compliance Maintained",
    description: "Across all certification and licensure processes",
    icon: Target,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    category: "Quality Assurance"
  }
];

const summaryStats = [
  { value: "10+", label: "Years Leadership Experience" },
  { value: "3", label: "Industries (Education, Sales, Tech)" },
  { value: "5", label: "States Impacted (AR, TN)" },
  { value: "∞", label: "Problems Solved" }
];

type Metric = {
  number: string;
  label: string;
  description: string;
  icon: any;
  color: string;
  bgColor: string;
  category: string;
};

const MetricCard = ({ metric }: { metric: Metric }) => {
  const IconComponent = metric.icon;
  
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg ${metric.bgColor}`}>
            <IconComponent className={`w-6 h-6 ${metric.color}`} />
          </div>
          <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
            {metric.category}
          </span>
        </div>
        
        <div className="space-y-3">
          <div className="text-3xl font-bold text-primary">
            {metric.number}
          </div>
          
          <h3 className="font-semibold text-foreground leading-tight">
            {metric.label}
          </h3>
          
          <p className="text-sm text-muted-foreground leading-relaxed">
            {metric.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const SummaryStats = () => (
  <div className="bg-card rounded-lg shadow-sm border p-8">
    <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center">
      <TrendingUp className="w-6 h-6 mr-3 text-primary" />
      Career Overview
    </h3>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {summaryStats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export function ByTheNumbersSection() {
  return (
    <section id="numbers" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            By the Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Throughout my career, I've focused on delivering quantifiable results that drive 
            organizational success and create positive outcomes for stakeholders. Here's the 
            measurable impact I've made across education, leadership, and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {impactMetrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </div>

        <SummaryStats />

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">From Education to Tech</h3>
            <p className="text-muted-foreground leading-relaxed">
              My transition from managing large-scale educational programs to software development 
              brings a unique perspective focused on user impact, data-driven decisions, and 
              scalable solutions. I apply the same metrics-focused approach to building applications 
              that deliver measurable value to users and organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}