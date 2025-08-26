import { FC } from "react";

interface TimelineStepType {
  title: string;
  description: string;
  period: string;
  position: string;
  current?: boolean;
}

interface TimelineStepProps {
  step: TimelineStepType;
  index: number;
}

interface TimelineCardProps {
  step: TimelineStepType;
}
const stats = [
  { value: "10+", label: "Years Leadership" },
  { value: "1500+", label: "Professionals Trained" },
  { value: "$270K", label: "Grant Managed" },
  { value: "∞", label: "Problems Solved" }
];

const badges = [
  "Systems Thinker",
  "User Advocate", 
  "Team Builder",
  "Continuous Learner"
];

const timelineSteps = [
  {
    title: "Education Leadership",
    description: "Teacher → Principal → State Consultant",
    period: "2015-2023",
    position: "left"
  },
  {
    title: "Career Transition", 
    description: "Data Analysis + Sales Experience",
    period: "2023-2024",
    position: "right"
  },
  {
    title: "Software Development",
    description: "Full-Stack Developer at Banyan Labs", 
    period: "2025-Present",
    position: "left",
    current: true
  }
];

const TimelineStep: FC<TimelineStepProps> = ({ step, index }) => {
  const isLeft = step.position === "left";
  return (
    <div className="flex items-center justify-between">
      <div className={`w-5/12 ${isLeft ? "text-right" : ""}`}>{isLeft && <TimelineCard step={step} />}</div>
      <div className={`w-4 h-4 bg-primary rounded-full border-4 border-background z-10 ${step.current ? "ring-4 ring-primary/20" : ""}`} />
      <div className={`w-5/12 ${!isLeft ? "text-left" : ""}`}>{!isLeft && <TimelineCard step={step} />}</div>
    </div>
  );
};

const TimelineCard: FC<TimelineCardProps> = ({ step }) => {
  return (
    <div className={`bg-card p-4 rounded-lg shadow-sm border ${
      step.current ? "border-primary/30" : ""
    }`}>
      <h4 className="font-semibold text-primary">{step.title}</h4>
      <p className="text-sm text-muted-foreground">{step.description}</p>
      <p className="text-xs text-muted-foreground mt-1">{step.period}</p>
    </div>
  );
};

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm Jake Shafer, a full-stack developer with an unconventional path into tech. 
                After spending over a decade in educational leadership—from classroom teacher to 
                high school principal to statewide education consultant—I discovered my passion for 
                solving complex problems through code.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My transition began while managing data systems and training programs for the Arkansas 
                Department of Education, where I realized technology could amplify my impact beyond 
                traditional boundaries. After some difficult experiences, I decided to make a change.
                This led me to pursue software development, combining my experience in stakeholder management, 
                regulatory compliance, and team leadership 
                with modern technical skills.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, as a full-stack developer at Banyan Labs, I bring a unique perspective to 
                building user-centered applications. My background in education gives me deep empathy 
                for end-users, while my leadership experience helps me navigate complex project 
                requirements and collaborate effectively with cross-functional teams.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, I continue giving back through mentorship at Hope Center Ministries, 
                helping individuals re-entering the workforce—a reminder that technology's greatest 
                power lies in its ability to transform lives.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                {badges.map((badge) => (
                  <div 
                    key={badge}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/profile.jpg" 
                alt="Jake Shafer" 
                className="w-80 h-80 rounded-full object-cover shadow-lg border-4 border-primary/20"
              />
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">My Journey</h3>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-primary/20" />
              
              <div className="space-y-8">
                {timelineSteps.map((step, index) => (
                  <TimelineStep key={index} step={step} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
