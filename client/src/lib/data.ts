import { LucideIcon, Brain, TrendingUp, Search, Database, LayoutDashboard, Code2, LineChart, FileText } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  metrics?: string[];
  link?: string;
  icon?: LucideIcon;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  skills?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: LucideIcon;
}

export const DATA = {
  profile: {
    name: "Bharti Kumari",
    role: "AI Automation & Data Strategist",
    tagline: "Engineering intelligent workflows that bridge data, backend logic, and business strategy.",
    summary: "Hi, I am Bharti, and I like to call myself 'The Insight Architect'. Why? Because I don't just analyze data—I build the systems that give it meaning. I blend Data Science, AI Automation, and Backend Development to create scalable solutions. Beyond the code, I thrive on collaboration—working across teams to translate technical complexity into clear business value. My current obsession? Pushing the boundaries of what's possible with AI Automation.",
    location: "Bhopal, India",
    email: "bhartikum08@gmail.com",
    linkedin: "https://linkedin.com/in/bharti-kumari-771b46251",
    github: "https://github.com/bhartikumgit",
    phone: "+91 7357244181",
    avatar: "/attached_assets/shakal_1765811737986.jpg"
  },
  experience: [
    {
      role: "Business Data Analyst Intern",
      company: "Woodman Electronics",
      period: "Oct 2024 – Jan 2025",
      description: [
        "Analyzed 10K+ sales and customer records to uncover revenue drivers and market demand patterns that informed GTM planning.",
        "Built KPI dashboards across sales, segmentation, and inventory, reducing reporting effort by 20%.",
        "Ran cohort & retention analysis on 5K+ customers, driving a ~7% uplift in repeat purchases.",
        "Collaborated with product and growth teams to deliver execution-ready insights."
      ],
      skills: ["Power BI", "Power Query", "Market Research", "GTM Strategy", "SQL", "Python"]
    },
    {
      role: "Content Editor",
      company: "Acadbuddy",
      period: "March 2023 – Jun 2023",
      description: [
        "Wrote and optimized website content that boosted organic traffic by 35%.",
        "Worked with development and social media teams to increase on-page engagement by 25%.",
        "Streamlined content workflows in Notion, reducing turnaround time by 30%."
      ],
      skills: ["SEO", "Notion", "User Insights", "Content Strategy"]
    }
  ],
  projects: [
    {
      title: "Bank Lending Risk Analytics Platform",
      description: "A comprehensive risk analysis platform processing 10K+ loan records to identify high-risk borrowers. Engineered risk factors that helped reduce potential defaults by 10–12%.",
      tags: ["Python", "MySQL", "Excel", "Power BI", "Pandas"],
      metrics: ["Processed 10K+ records", "Reduced potential defaults by ~12%", "30-40% faster risk scoring"],
      icon: TrendingUp
    },
    {
      title: "Customer Churn Prediction & Analysis",
      description: "End-to-end churn prediction pipeline. Processed 7,500+ customer records, engineered 20+ predictive features, and trained a Random Forest model with 85% accuracy.",
      tags: ["Python", "Scikit-learn", "SQL Server", "Power BI", "Flask"],
      metrics: ["85% Model Accuracy", "Identified 1,450+ at-risk customers", "20% retention campaign improvement"],
      icon: Search
    },
    {
      title: "Healthcare Chatbot (Chikitsak)",
      description: "NLP-driven chatbot with a knowledge base of 35+ conditions. Uses PyTorch and SpaCy for intent classification, accelerated with GPU optimization.",
      tags: ["Python", "PyTorch", "SpaCy", "React", "GPU"],
      metrics: ["80% Intent Accuracy", "40% faster training with GPU", "120+ treatment responses"],
      icon: Brain
    },
    {
      title: "Lead Research & GTM Automation",
      description: "Automated research pipeline using Clay and OpenAI to qualify 100+ target companies. Integrated with Zapier for lead classification and Notion for tracking.",
      tags: ["Clay", "Zapier AI", "OpenAI", "Notion"],
      metrics: ["Qualifies 100+ companies", "50% less manual research", "Automated ICP signals"],
      icon: Database
    }
  ],
  skills: [
    {
      category: "Data & ML",
      skills: ["Python (Pandas, NumPy)", "Scikit-learn", "PyTorch", "NLP (SpaCy)", "SQL", "Feature Engineering"],
      icon: Code2
    },
    {
      category: "BI & Analytics",
      skills: ["Power BI", "Power Query", "Excel", "DAX", "Tableau", "KPI Design"],
      icon: LineChart
    },
    {
      category: "Soft Skills & Strategy",
      skills: ["Cross-functional Collaboration", "Technical Communication", "Stakeholder Management", "Problem Solving", "Agile/Scrum"],
      icon: TrendingUp
    },
    {
      category: "Tools & Dev",
      skills: ["Git", "Jupyter", "MySQL Workbench", "Jira", "Figma", "Notion", "React (Basic)"],
      icon: LayoutDashboard
    }
  ],
  education: {
    university: "VIT Bhopal University",
    degree: "BTech - Computer Science Engineering",
    period: "Expected May 2026",
    cgpa: "8.5/10"
  }
};
