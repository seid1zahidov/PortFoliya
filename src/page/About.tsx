import { useEffect, useState } from "react";
import "../assets/about/about.css";

const heading = "About Me";
const paragraph = `Motivated and fast-learning developer with hands-on experience in modern web technologies including React, Next.js, Tailwind CSS, and MongoDB. I've built freelance projects from scratch, collaborating with clients to turn ideas into working applications. I'm now ready to bring my skills into a company environment where I can contribute to a team, learn from experienced developers, and grow as a professional.`;

const About = () => {
  const [resetKey, setResetKey] = useState<number>(0);

  useEffect(() => {
    const loop = setInterval(() => {
      setResetKey(prev => prev + 1);
    }, 10000);
    return () => clearInterval(loop);
  }, []);

  return (
    <section className="about-section">
      <div className="content" key={resetKey}>
        <AnimatedText text={heading} delay={0} big />
        <AnimatedParagraph text={paragraph} delay={1} />
      </div>
    </section>
  );
};

interface AnimatedTextProps {
  text: string;
  delay?: number;
  big?: boolean;
}

const AnimatedText = ({ text, delay = 0, big = false }: AnimatedTextProps) => {
  return (
    <h1 className={`animated-heading ${big ? "big" : ""}`}>
      {text.split("").map((char: string, i: number) => (
        <span key={i} style={{ animationDelay: `${delay + i * 0.05}s` }}>
          {char}
        </span>
      ))}
    </h1>
  );
};

interface AnimatedParagraphProps {
  text: string;
  delay?: number;
}

const AnimatedParagraph = ({ text, delay = 0 }: AnimatedParagraphProps) => {
  return (
    <p className="animated-paragraph">
      {text.split(" ").map((word: string, i: number) => (
        <span key={i} style={{ animationDelay: `${delay + i * 0.08}s` }}>
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
};

export default About;
