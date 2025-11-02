import { Reveal } from "@/components/utils/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { FaBrain, FaCode, FaToolbox } from "react-icons/fa";
import styles from "./stats.module.scss";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <span>tools and languages i like to use:</span>
          </h4>
          <h4>
            <FaCode size="2.4rem" color="var(--brand)" />
            <span>languages</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">Java</span>
            <span className="chip">C++</span>
            <span className="chip">C</span>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">SQL</span>
            <span className="chip">Rust</span>
            <span className="chip">HTML/CSS</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <FaBrain size="2.4rem" color="var(--brand)" />
            <span>frameworks & libraries</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React</span>
            <span className="chip">Node.js</span>
            <span className="chip">PyTorch</span>
            <span className="chip">TensorFlow</span>
            <span className="chip">scikit-learn</span>
            <span className="chip">Django</span>
            <span className="chip">FastAPI</span>
            <span className="chip">MongoDB</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">REST APIs</span>
            <span className="chip">Cython</span>
            <span className="chip">OpenCV</span>
            <span className="chip">pandas</span>
            <span className="chip">NumPy</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>tools & platforms</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Docker</span>
            <span className="chip">AWS</span>
            <span className="chip">Git</span>
            <span className="chip">Kubernetes</span>
            <span className="chip">Jenkins</span>
            <span className="chip">Google Cloud</span>
            <span className="chip">Linux</span>
            <span className="chip">Bash</span>
            <span className="chip">GraphQL</span>
            <span className="chip">REST APIs</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};