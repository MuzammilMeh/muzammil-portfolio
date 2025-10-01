import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  techStack: string[];
  achievements: string[];
  index: number;
}

export const ProjectCard = ({ title, description, challenge, solution, techStack, achievements, index }: ProjectCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden border-border bg-card shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader className="relative">
        <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          {title}
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-primary mb-2">The Challenge</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{challenge}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-primary mb-2">The Solution</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{solution}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-primary mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-primary mb-2">Key Achievements</h4>
          <ul className="space-y-1">
            {achievements.map((achievement, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
