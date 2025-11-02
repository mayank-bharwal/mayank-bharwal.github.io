import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Stats } from "./Stats";
import styles from "./about.module.scss";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="about" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              hello world🫡, i&apos;m mayank. i&apos;m passionate about building intelligent systems 
              that bridge the gap between AI research and real-world applications, with expertise in 
              machine learning, embedded systems, and full-stack development.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              outside of tech, i&apos;m into weightlifting, improvisational comedy, mindfulness meditation, and biking. 
              you&apos;ll often find me exploring new technical challenges in AI and systems programming.
            </p>
          </Reveal>
          <Reveal>
            <div>
              <p className={styles.aboutText} style={{ fontWeight: "bold" }}>
                now:
              </p>
              <p className={styles.aboutText}>
                leading software engineering for avionics systems at{" "}
                <a target="_blank" href="https://uoft-star.github.io/Website/">
                  university of toronto&apos;s amateur rocketry club
                </a>, developing real-time control algorithms and sensor fusion for VTOL rockets.
              </p>
              <p className={styles.aboutText}>
                researching multi-agent AI systems and LLM cooperation at{" "}
                <a target="_blank" href="https://sites.google.com/view/uofttmi">
                  trustworthy machine intelligence
                </a>, simulating complex social dynamics in game theory environments.
              </p>
              <p className={styles.aboutText}>
                pursuing my bachelor&apos;s in computer science at uoft with double focus in artificial intelligence 
                and computer systems.
              </p>

              <p className={styles.aboutText} style={{ fontWeight: "bold" }}>
                previously:
              </p>
              <p className={styles.aboutText}>
                developed full-stack employee management systems as a software engineering intern at hyundai motors 
                using React, Django, and SQLite.
              </p>
              <p className={styles.aboutText}>
                architected and built{" "}
                <a target="_blank" href="https://github.com/mayank-bharwal/CSC207-GYMULI-">
                  yapyap
                </a>, a desktop social media messenger implementing clean architecture and SOLID principles.
              </p>
              <p className={styles.aboutText}>
                created{" "}
                <a target="_blank" href="https://github.com/mayank-bharwal/DeepWorkSwitch">
                  deepworkswitch
                </a>, a focus automation tool that helps ADHD students reduce procrastination through automated environment setup.
              </p>
              <p className={styles.aboutText}>
                developed{" "}
                <a target="_blank" href="https://github.com/mayank-bharwal/AlgorithmArena">
                  algorithm arena
                </a>, an automated content generation system using OpenAI API to create educational computer science content.
              </p>
              <p className={styles.aboutText}>
                tutored computer science concepts to 10 students as a cs tutor at{" "}
                <a target="_blank" href="https://www.urbanpro.com/una/mayank-bharwal/25796556">
                  urbanpro
                </a>, with 9/10 achieving above 95/100 in board examinations.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>continue the conversation:</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};