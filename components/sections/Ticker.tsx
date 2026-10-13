
const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "REST API",
  "Git & GitHub",
];

export default function Ticker() {
  return (
    <div className="ticker" aria-label="Frontend texnologiyalari">
      <div className="ticker-track">
        {[...technologies, ...technologies].map((technology, index) => (
          <span key={`${technology}-${index}`}>
            <i>✳</i>
            {technology.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}

