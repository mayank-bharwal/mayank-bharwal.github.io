import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "YapYap Social Messenger",
    imgSrc: "/project-imgs/yapyap.png",
    code: "https://github.com/mayank-bharwal/CSC207-GYMULI-",
    projectLink: "",
    tech: ["Java", "MongoDB", "Clean Architecture", "Design Patterns"],
    description: "A desktop social media messenger built with Clean Architecture and SOLID principles, implementing multiple design patterns.",
    modalContent: (
      <>
        <p>
          Developed a comprehensive desktop social media application in a team of 6 students, focusing on 
          maintainable software architecture and scalable design. Implemented Factory, Facade, Observer, 
          and Dependency Injection patterns to create a modular and extensible codebase.
        </p>
        <p>
          Engineered the backend with MongoDB for data persistence, ensuring efficient storage and retrieval 
          of user messages, profiles, and chat histories. Applied Clean Architecture principles to separate 
          business logic from infrastructure concerns, making the system testable and framework-agnostic.
        </p>
        <p>
          Designed the user interface with a focus on real-time messaging capabilities and intuitive user 
          experience. Implemented proper error handling and validation throughout the application stack.
        </p>
        <p style={{ fontStyle: "italic" }}>
          This project demonstrated the importance of architectural patterns in building maintainable 
          software that can evolve with changing requirements while minimizing technical debt.
        </p>
      </>
    ),
  },
  {
    title: "DeepWorkSwitch",
    imgSrc: "/project-imgs/deepworkswitch.png",
    code: "https://github.com/mayank-bharwal/DeepWorkSwitch",
    projectLink: "",
    tech: ["JavaScript", "HTML/CSS", "Shell", "Chrome Extension"],
    description: "A focus automation tool that blocks distractions and sets up productive work environments for ADHD students.",
    modalContent: (
      <>
        <p>
          Built a comprehensive productivity system combining a desktop application with Chrome extension 
          to combat procrastination and improve focus for students with ADHD. The system automates the 
          entire work environment setup with a single keyboard shortcut.
        </p>
        <p>
          Implemented smart tab management that automatically closes distracting websites and applications 
          while preserving important work-related tabs. Created a custom Pomodoro timer with audio rituals 
          and background study noise to enhance concentration during work sessions.
        </p>
        <p>
          Developed a whitelist/blacklist system for websites and applications, allowing users to 
          customize their focus environment. Integrated system-level controls to manage application 
          windows and automate the launch of work-related software.
        </p>
        <p style={{ fontStyle: "italic" }}>
          This project addresses the real challenge of digital distraction and executive dysfunction, 
          providing an automated solution that reduces the mental overhead of starting focused work sessions.
        </p>
      </>
    ),
  },
  {
    title: "Algorithm Arena",
    imgSrc: "/project-imgs/algorithmarena.png",
    code: "https://github.com/mayank-bharwal/AlgorithmArena",
    projectLink: "",
    tech: ["Python", "OpenAI API", "PIL", "REST API"],
    description: "An automated content generation system that creates and posts educational computer science content.",
    modalContent: (
      <>
        <p>
          Engineered an automated content pipeline that generates computer science educational content 
          using OpenAI's API and schedules social media posts. The system creates engaging programming 
          questions, explanations, and visual content for technical audiences.
        </p>
        <p>
          Implemented image generation and processing using Python's PIL library to create visually 
          appealing posts with code snippets, diagrams, and educational content. Integrated with 
          Instagram's API for automated posting and scheduling of generated content.
        </p>
        <p>
          Developed content curation algorithms that ensure generated questions cover diverse computer 
          science topics including algorithms, data structures, system design, and programming concepts. 
          Created a feedback loop to improve content quality based on engagement metrics.
        </p>
        <p style={{ fontStyle: "italic" }}>
          This project demonstrates the power of AI in educational content creation and the potential 
          for automated systems to support continuous learning in the developer community.
        </p>
      </>
    ),
  },
  {
    title: "QuantWave Trading System",
    imgSrc: "/project-imgs/quantwave.png",
    code: "https://github.com/mayank-bharwal/QuantWave",
    projectLink: "",
    tech: ["Python", "Machine Learning", "Flask", "yfinance", "sklearn"],
    description: "Advanced algorithmic trading system using machine learning and GARCH models for real-time market analysis.",
    modalContent: (
      <>
        <p>
          Developed a sophisticated algorithmic trading system that combines machine learning with 
          advanced financial modeling for commodity and equity trading. Implemented logistic regression 
          models using scikit-learn to predict price movements and make automated trading decisions.
        </p>
        <p>
          Integrated GARCH (Generalized Autoregressive Conditional Heteroskedasticity) models for 
          volatility forecasting, combining daily volatility predictions with intraday technical 
          indicators. Created comprehensive backtesting frameworks with performance metrics and 
          risk-adjusted return analysis.
        </p>
        <p>
          Built a Flask web application with real-time data visualization and performance monitoring 
          dashboards. Implemented historical data analysis using yfinance library and developed 
          optimization algorithms for dynamic position sizing and risk management strategies.
        </p>
        <p style={{ fontStyle: "italic" }}>
          The system demonstrates sophisticated financial engineering techniques and real-time data 
          processing capabilities for quantitative trading applications across multiple asset classes.
        </p>
      </>
    ),
  },
  {
    title: "Pitchmaster Cricket Selector",
    imgSrc: "/project-imgs/pitchmaster.png",
    code: "https://github.com/mayank-bharwal/Pitchmaster_",
    projectLink: "",
    tech: ["Python", "CustomTkinter", "Machine Learning", "matplotlib", "numpy"],
    description: "AI-powered cricket team selection system using decision trees and performance metrics analysis.",
    modalContent: (
      <>
        <p>
          Engineered a comprehensive cricket team selection system that uses machine learning and decision 
          trees to generate optimal teams of 11 players based on performance metrics and user preferences.
        </p>
        <p>
          Developed custom algorithms to calculate player skill and consistency scores using weighted 
          formulas for batting averages, strike rates, bowling statistics, and fielding metrics. 
          Implemented decision tree structures for efficient player selection and team composition optimization.
        </p>
        <p>
          Created an interactive GUI using CustomTkinter with real-time visualization of player statistics 
          using matplotlib. Integrated data from multiple CSV datasets covering batting, bowling, and 
          fielding performance across different cricket formats.
        </p>
        <p style={{ fontStyle: "italic" }}>
          The system brings data-driven decision making to sports team selection, similar to Moneyball 
          concepts applied to cricket, with intuitive user controls for customizing selection criteria.
        </p>
      </>
    ),
  },
  {
    title: "EconoMystic Trading Bot",
    imgSrc: "/project-imgs/economystic.png",
    code: "https://github.com/mayank-bharwal/EconoMystic",
    projectLink: "",
    tech: ["Python", "GARCH", "pandas", "matplotlib", "financial analysis"],
    description: "Commodity trading bot specializing in Gold Futures using logistic regression and volatility forecasting.",
    modalContent: (
      <>
        <p>
          Implemented a specialized commodity trading bot focused on Gold Futures (CL=F) that combines 
          logistic regression with GARCH volatility forecasting for enhanced trading decision-making.
        </p>
        <p>
          Developed signal generation algorithms based on prediction premiums that integrate daily 
          and intraday data sources. Created real-time tracking systems with continuous updates for 
          trading decisions and performance monitoring across multiple timeframes.
        </p>
        <p>
          Built comprehensive risk management features that adjust position sizes based on forecasted 
          volatility and market conditions. Implemented visualization tools for cumulative returns 
          analysis and strategy performance evaluation with sub-minute latency for real-time operations.
        </p>
        <p style={{ fontStyle: "italic" }}>
          This project showcases the application of econometric models and machine learning to 
          algorithmic trading with proper risk management and real-time data processing capabilities.
        </p>
      </>
    ),
  },
  {
    title: "Breaking Bad Platformer Game",
    imgSrc: "/project-imgs/breakingbad.png",
    code: "https://github.com/mayank-bharwal/Breaking-Bad",
    projectLink: "",
    tech: ["Python", "Pygame", "Game Development", "Object-Oriented Programming"],
    description: "A themed platformer game featuring character movement, obstacle avoidance, and crystal collection mechanics.",
    modalContent: (
      <>
        <p>
          Developed a complete 2D platformer game using Python and Pygame library with Breaking Bad theme, 
          featuring character animations, physics-based movement, and interactive game mechanics.
        </p>
        <p>
          Implemented player character with smooth animations and responsive controls including running, 
          jumping, and collision detection. Created a crystal collection system with score tracking and 
          real-time UI updates to enhance player engagement and progression.
        </p>
        <p>
          Designed and integrated various obstacles and hazards with proper collision detection, 
          background music, and visual assets. Applied object-oriented programming principles to create 
          modular and maintainable game architecture with separate classes for player, obstacles, 
          and game management.
        </p>
        <p style={{ fontStyle: "italic" }}>
          This project demonstrates full-stack game development capabilities from concept to implementation, 
          showcasing skills in game physics, asset management, and interactive user experience design.
        </p>
      </>
    ),
  }
];