import React, { useState, useEffect } from "react";
import "../assets/HomePage/Home.css";

function Home() {
  const textLine1 = "Hi, I'm";
  const textLine2 = "Said Zahidov";
  const textLine3 = "Front-End Developer";

  const [key, setKey] = useState(0); // render üçün trigger

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 5000); // 5 saniyədən bir yenidən render

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

const AnimatedText = ({
  text,
  delay = 0,
  highlight = false,
  small = false,
}) => {
  return (
    <h1
      className={`animated-text ${highlight ? "highlight" : ""} ${
        small ? "small" : ""
      }`}
    >
      {text.split("").map((char, idx) => (
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
