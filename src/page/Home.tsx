import { useState, useEffect } from "react";
import "../assets/HomePage/Home.css";

function Home() {
  const textLine1 = "Hi, I'm";
  const textLine2 = "Said Zahidov";
  const textLine3 = "Front-End Developer";

  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="text" key={key}>
        <AnimatedText text={textLine1} delay={0} />
        <AnimatedText text={textLine2} delay={0.5} highlight />
        <AnimatedText text={textLine3} delay={1.2} small />
      </div>
    </section>
  );
}

// Props interfeysi
interface AnimatedTextProps {
  text: string;
  delay?: number;
  highlight?: boolean;
  small?: boolean;
}

const AnimatedText = ({
  text,
  delay = 0,
  highlight = false,
  small = false,
}: AnimatedTextProps) => {
  return (
    <h1
      className={`animated-text ${highlight ? "highlight" : ""} ${
        small ? "small" : ""
      }`}
    >
      {text.split("").map((char: string, idx: number) => (
        <span
          key={idx}
          style={{
            animationDelay: `${delay + idx * 0.05}s`,
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default Home;
