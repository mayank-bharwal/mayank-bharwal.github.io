import { StandardButton } from "@components/buttons/StandardButton";
import { Reveal } from "@components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        {/* Hero Content with Larger Profile Picture */}
        <Reveal>
          <div className={styles.heroContent}>
            <div className={styles.profileImageContainer}>
              <Image
                src="/project-imgs/profilepic.jpg" // Make sure to add your profile image to the public folder
                alt="Mayank Bharwal"
                width={180}
                height={180}
                className={styles.profileImage}
                priority
              />
            </div>
            <div className={styles.textContent}>
              <h1 className={styles.title}>
                hi, i&apos;m mayank<span>.</span>
              </h1>
              <h2 className={styles.subTitle}>
                welcome to my <span>little corner of the world wide web</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.aboutCopy}>
            <p>
              -&gt; computer science, math, and stats student @ uoft <br /> <br /> 
              -&gt; building <span>impactful</span>, <span>scalable</span>, and <span>secure</span> software <br /> <br /> 
              -&gt; passionate about machine learning, artificial intelligence, computer systems engineering and neurotech
            </p>
            <br />
            <p>let&apos;s connect! (p.s., try clicking one of the dots!)</p>
          </div>
        </Reveal>
        
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};