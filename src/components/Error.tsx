import { useNavigate } from "react-router-dom";
import "../assets/error/error.css";

const ErrorPage = () => {
  const navigate = useNavigate();
  const text = "404 - Page Not Found";

  return (
    <section className="error-page">
      <h1 className="error-heading">
        {text.split("").map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.06}s` }}>
            {char}
          </span>
        ))}
      </h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <button onClick={() => navigate("/")}>Go Back Home</button>
    </section>
  );
};

export default ErrorPage;
