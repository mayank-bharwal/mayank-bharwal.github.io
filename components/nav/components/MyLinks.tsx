import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineMediumWorkmark } from "react-icons/ai";
import styles from "./headinglinks.module.scss";

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href="https://www.linkedin.com/in/mayank-bharwal-68802b283/"
          target="_blank"
          rel="nofollow"
        >
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          href="https://github.com/mayank-bharwal"
          target="_blank"
          rel="nofollow"
        >
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          href="https://medium.com/@mayank-bharwal"
          target="_blank"
          rel="nofollow"
        >
          <AiOutlineMediumWorkmark size="2.4rem" />
        </Link>
      </motion.span>
    </div>
  );
};