import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "HIPAA-Compliant Medical AI Chatbot",
      description: "A secure AI assistant designed to automate the transcription and analysis of sensitive patient audio records for healthcare providers.",
      challenge: "Medical staff were spending excessive time manually transcribing and documenting patient intake calls, leading to potential inaccuracies and delays in patient care. A secure, automated solution was needed to handle a high volume of audio records while adhering to strict HIPAA privacy regulations.",
      solution: "I developed an AI-powered healthcare chatbot that ingests patient audio records and performs automated transcription and analysis. The system leverages a custom NLP pipeline to accurately extract key entities and medical terminology, converting unstructured audio into structured JSON data ready for analysis and integration with electronic health records (EHR). The entire solution was containerized and deployed in a secure AWS environment, ensuring end-to-end encryption and role-based access controls to maintain HIPAA compliance.",
      techStack: ["AWS", "Whisper X", "Python", "spaCy", "Docker", "S3", "EC2"],
      achievements: [
        "Processed over 50,000 patient transcripts with a validated 98% transcription accuracy",
        "Reduced manual transcription workload by 80%, freeing up medical staff to focus on direct patient care",
        "Significantly improved the accuracy and consistency of patient intake documentation"
      ]
    },
    {
      title: "ChatGenie – Conversational AI for Visual Data Insights",
      description: "An intelligent, conversational AI assistant that empowers enterprise users to explore complex data and generate visual insights using natural language.",
      challenge: "Business teams without deep technical expertise struggled to perform data analysis, relying on manual report generation from data analysts. This created bottlenecks and limited their ability to make timely, data-driven decisions.",
      solution: "I engineered ChatGenie, an AI assistant that integrates with existing enterprise data systems. Users can ask business-related questions in plain English (e.g., 'What were our sales trends last quarter in the North region?'). The system, powered by LLMs, understands the query, retrieves the relevant data, performs analysis, and automatically generates both textual insights and corresponding data visualizations (charts, graphs). It also includes proactive anomaly detection to alert teams to unusual patterns.",
      techStack: ["Large Language Models", "Generative AI", "Python", "Data Visualization"],
      achievements: [
        "Empowered non-technical teams with self-service analytics, democratizing data access",
        "Enabled real-time anomaly detection, allowing for proactive business interventions",
        "Enhanced operational efficiency by eliminating manual report generation and accelerating strategic decision-making"
      ]
    },
    {
      title: "Enterprise Retrieval-Augmented Generation (RAG) System",
      description: "A high-performance RAG system designed to replace slow, manual knowledge base lookups with instant, AI-driven information retrieval.",
      challenge: "Client operations teams were losing significant time searching through vast internal knowledge bases to answer complex queries. The existing legacy platform was slow, inefficient, and hampered decision-making speed.",
      solution: "I designed and deployed a scalable RAG system that uses a vector database to index all enterprise documentation. When a user asks a question, the system retrieves the most relevant information and uses a powerful LLM to synthesize a precise, context-aware answer. The architecture was built for speed and scale, containerized, and deployed on AWS with serverless triggers to ensure low-latency responses even under heavy load.",
      techStack: ["GPT-4", "Pinecone", "LangChain", "FastAPI", "Docker", "AWS EC2", "AWS Lambda"],
      achievements: [
        "Successfully handles over 10,000 enterprise queries daily with a 95% retrieval accuracy",
        "Reduced average query response time by 60% compared to the legacy system",
        "Dramatically improved decision-making speed and productivity for client operations teams"
      ]
    },
    {
      title: "Customer Segmentation & ML Model for Risk Decisions",
      description: "An integrated machine learning model that automates credit risk assessment to improve portfolio quality and reduce default rates.",
      challenge: "The company needed a more reliable method for assessing the credit risk of new customers to minimize the rate of late payments and defaults. Manual or rule-based systems were proving insufficient.",
      solution: "I developed a machine learning model to segment customers and predict the probability of an account becoming 14 days past due (DPD 14). This model was trained on historical data and deployed on a scalable cloud platform. I then led the integration of this predictive model directly into the company's core risk service, enabling it to automatically approve or reject customer orders in real-time based on their calculated risk score.",
      techStack: ["Python", "scikit-learn", "AWS SageMaker", "Machine Learning"],
      achievements: [
        "Reduced default rates by proactively identifying and declining high-risk applications",
        "Improved the overall quality and repayment performance of the customer portfolio through data-driven decisioning"
      ]
    },
    {
      title: "Risk & Operations Automation Platform",
      description: "A comprehensive automation solution that streamlines critical business processes, including customer verification, reporting, and document processing.",
      challenge: "Key operational workflows were manual, repetitive, and time-consuming, limiting the team's ability to scale and leading to slow turnaround times for customers.",
      solution: "I architected and built a series of automated workflows using n8n to connect multiple disparate systems. The solution leverages AI to interpret and process documents, integrates with internal and external APIs to verify customer information, and automates the generation of operational reports. This created a seamless, 'hands-off' process for many core tasks.",
      techStack: ["n8n", "OpenAI GPT-4o", "Notion API", "Google Drive API", "Pipedrive API"],
      achievements: [
        "Decreased the manual operational workload by 40%",
        "Tripled the throughput for document verification and approval processing, significantly speeding up customer onboarding"
      ]
    },
    {
      title: "Additional AI & Frontend Projects",
      description: "Collection of innovative AI and frontend projects showcasing computer vision, automation, and interactive interfaces.",
      challenge: "Various challenges across different domains requiring specialized AI and frontend solutions.",
      solution: "Developed multiple projects including: Solar Panel Detection System using YOLO and UNet for satellite imagery analysis; Autonomous Agent Platform with LangChain and GPT-4 for multi-step business workflow automation (hackathon winner); Interactive AI Interfaces including a 3D Avatar Chatbot with Three.js and a responsive web-based chatbot using Vite.js and Tailwind CSS, both with real-time WebSocket integration.",
      techStack: ["YOLO", "UNet", "LangChain", "GPT-4", "Three.js", "Vite.js", "Tailwind CSS", "WebSocket"],
      achievements: [
        "Won hackathon with innovative autonomous agent platform",
        "Successfully implemented computer vision for geospatial data processing",
        "Created highly engaging, real-time interactive AI experiences"
      ]
    }
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-accent" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container relative z-10 px-4">
          <div className="text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="bg-gradient-primary bg-clip-text text-transparent">Muzammil Ayub</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              AI/ML Software Engineer specializing in building intelligent systems that solve real-world problems
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                onClick={scrollToProjects}
              >
                View Projects
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href="https://github.com/MuzammilMeh" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/muzammil-ayub/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <SectionHeading 
            title="About Me" 
            subtitle="Passionate about leveraging AI and machine learning to create innovative solutions"
          />
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in-up">
            <p>
              I'm a software engineer with a strong focus on artificial intelligence, machine learning, and full-stack development. 
              My expertise lies in building scalable, production-ready systems that combine cutting-edge AI technologies with robust 
              engineering practices.
            </p>
            <p>
              With experience across healthcare, enterprise software, and automation platforms, I've successfully delivered projects 
              that process millions of data points, serve thousands of users, and significantly improve operational efficiency. I'm 
              particularly passionate about making AI accessible and practical for real-world applications.
            </p>
            <p>
              My technical toolkit spans from deep learning frameworks and NLP to cloud infrastructure and modern web technologies. 
              I thrive in environments where I can work on challenging problems that require both technical depth and creative thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="A selection of impactful projects showcasing AI/ML expertise and full-stack development"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <SectionHeading 
            title="Technical Skills" 
            subtitle="Technologies and tools I work with"
          />
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
            <div className="p-6 rounded-lg border border-border bg-card shadow-card">
              <h3 className="text-xl font-semibold mb-4 text-primary">AI & Machine Learning</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Large Language Models (GPT-4, LangChain)</li>
                <li>• Computer Vision (YOLO, UNet)</li>
                <li>• NLP & spaCy</li>
                <li>• Whisper X (Speech Recognition)</li>
                <li>• Vector Databases (Pinecone)</li>
                <li>• scikit-learn & ML Frameworks</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card shadow-card">
              <h3 className="text-xl font-semibold mb-4 text-primary">Cloud & DevOps</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• AWS (EC2, S3, Lambda, SageMaker)</li>
                <li>• Docker & Containerization</li>
                <li>• Serverless Architecture</li>
                <li>• FastAPI</li>
                <li>• CI/CD Pipelines</li>
                <li>• Scalable System Design</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card shadow-card">
              <h3 className="text-xl font-semibold mb-4 text-primary">Full-Stack Development</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Python (Advanced)</li>
                <li>• JavaScript/TypeScript</li>
                <li>• React & Vite.js</li>
                <li>• Three.js (3D Graphics)</li>
                <li>• Tailwind CSS</li>
                <li>• API Integration & Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container max-w-4xl mx-auto text-center">
          <SectionHeading 
            title="Let's Connect" 
            subtitle="I'm always open to discussing new projects, opportunities, or partnerships"
          />
          <div className="flex flex-wrap gap-6 justify-center animate-fade-in-up">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
              asChild
            >
              <a href="mailto:muzammilofficial9@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/MuzammilMeh" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="https://www.linkedin.com/in/muzammil-ayub/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container text-center text-muted-foreground">
          <p>© 2025 Muzammil Ayub. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
