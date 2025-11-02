import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "University of Toronto's Amateur Rocketry Club",
    position: "Software Engineering Lead",
    time: "August 2025 - Present",
    location: "Toronto, ON",
    description: `Architected and implemented comprehensive avionics software system for VTOL (Vertical Take-Off and Landing) rockets, developing Sensor Abstraction Layer (SAL), Hardware Abstraction Layer (HAL), and testing framework using Cython and design patterns.\n
    Engineered real-time sensor fusion algorithms using complementary and extended Kalman filters, achieving 95% accuracy in position and orientation estimation for rocket navigation and control systems.\n
    Implemented advanced control algorithms for trajectory planning, waypoint guidance, and autonomous landing logic, improving landing precision by 20% through sophisticated flight path optimization.\n
    Built complete telemetry stack with low-range radio communication and ground station GUI, enabling live monitoring and data logging for flight systems with real-time performance analytics.\n
    Managed team of 8-10 developers using Agile methodology, implementing CI/CD pipelines with GitHub Actions and hardware-in-the-loop testing to ensure system reliability and rapid iteration cycles.`,
    tech: ["C++", "Python", "Cython", "JSBSim", "REST APIs", "Git", "Docker", "Linux", "Hardware-in-the-Loop"]
  },
  {
    title: "Trustworthy Machine Intelligence",
    position: "AI Engineer",
    time: "October 2025 - Present",
    location: "Toronto, ON",
    description: `Designed and implemented large-scale multi-agent simulation framework simulating 50+ LLM agents in small-world networks to study emergent social behaviors and cooperation patterns in complex environments.\n
    Created sophisticated agent architecture with memory, personality traits, and LLM-based decision policies, improving strategic coordination accuracy by 28% across repeated Prisoner's Dilemma interactions.\n
    Developed modular Gameworld and Agent Graph components enabling scalable simulations with 5,000+ agent-neighbor interactions per experiment, tracking payoffs and norm diffusion across diverse scenarios.\n
    Implemented intervention mechanisms including penalties, subsidies, and cross-community links that increased fairness metrics by 22% and reduced polarization between communities by 15%.\n
    Achieved 35% higher sustained cooperation in Public Goods games over 100 rounds compared to baseline models, providing valuable insights for multi-agent AI safety and alignment research.`,
    tech: ["Python", "LLMs", "Machine Learning", "Game Theory", "Network Analysis", "Statistical Modeling"]
  },
  {
    title: "Hyundai Motors",
    position: "Full Stack Software Engineering Intern",
    time: "June 2023 - August 2023",
    location: "India",
    description: `Designed and implemented comprehensive full-stack employee management software using modern web technologies, deployed on company's internal server infrastructure for enterprise-wide usage.\n
    Developed robust backend system with Django framework and SQLite database, creating efficient data models for employee information, performance metrics, and project history tracking.\n
    Engineered interactive frontend using React.js with responsive design principles, creating user-friendly interfaces for data visualization and administrative functions across multiple user roles.\n
    Implemented automated data collection system with custom forms that streamlined information gathering from 200+ employees, achieving significant reduction in data collection time and improving data accuracy.\n
    Created comprehensive database schema for storing employee performance history, project assignments, and organizational hierarchy, enabling efficient querying and reporting capabilities.`,
    tech: ["React", "Django", "SQLite", "JavaScript", "HTML/CSS", "REST APIs", "Python"]
  },
  {
    title: "UrbanPro.com",
    position: "Computer Science Tutor",
    time: "March 2020 - October 2020",
    location: "India",
    description: `Provided comprehensive computer science tutoring to group of 10 students, covering advanced topics including Object-Oriented Programming, Data Structures, and complex algorithms.\n
    Developed customized lesson plans and practical coding exercises focused on Java programming language, sorting/searching algorithms, and Divide and Conquer algorithmic strategies.\n
    Achieved exceptional academic results with 9 out of 10 students scoring above 95/100 in ICSE board examinations, demonstrating effective teaching methodologies and personalized instruction.\n
    Created interactive learning materials and real-world programming projects to reinforce theoretical concepts and build practical software development skills.\n
    Implemented progress tracking and assessment systems to monitor student understanding and adapt teaching approaches based on individual learning needs and pace.`,
    tech: ["Java", "Algorithms", "Data Structures", "Teaching Methodologies", "Educational Technology"]
  }
];