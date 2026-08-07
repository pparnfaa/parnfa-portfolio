import { useTheme } from "../theme/ThemeContext";

type Star = {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
};

type Cloud = {
  left: string;
  top: string;
  width: string;
  height: string;
  delay: string;
  duration: string;
};

function createStars(count: number): Star[] {
  const stars: Star[] = [];
  let seed = 42;

  const next = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let i = 0; i < count; i += 1) {
    const size = next() > 0.7 ? 2 : 1;
    stars.push({
      left: `${(next() * 100).toFixed(2)}%`,
      top: `${(next() * 100).toFixed(2)}%`,
      size,
      delay: `${(next() * 5).toFixed(2)}s`,
      duration: `${(2.5 + next() * 3.5).toFixed(2)}s`,
      opacity: 0.35 + next() * 0.55,
    });
  }

  return stars;
}

const STARS = createStars(52);

const CLOUDS: Cloud[] = [
  {
    left: "-4%",
    top: "8%",
    width: "34rem",
    height: "12rem",
    delay: "0s",
    duration: "18s",
  },
  {
    left: "48%",
    top: "2%",
    width: "28rem",
    height: "10rem",
    delay: "2s",
    duration: "22s",
  },
  {
    left: "12%",
    top: "42%",
    width: "36rem",
    height: "13rem",
    delay: "4s",
    duration: "20s",
  },
  {
    left: "58%",
    top: "55%",
    width: "30rem",
    height: "11rem",
    delay: "1s",
    duration: "24s",
  },
  {
    left: "28%",
    top: "72%",
    width: "32rem",
    height: "10rem",
    delay: "3s",
    duration: "19s",
  },
];

export function SkyAtmosphere() {
  const { theme } = useTheme();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {theme === "dark"
        ? STARS.map((star, index) => (
            <span
              key={index}
              className="animate-twinkle absolute rounded-full bg-white"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            />
          ))
        : CLOUDS.map((cloud, index) => (
            <span
              key={index}
              className="sky-cloud animate-cloud absolute"
              style={{
                left: cloud.left,
                top: cloud.top,
                width: cloud.width,
                height: cloud.height,
                animationDelay: cloud.delay,
                animationDuration: cloud.duration,
              }}
            />
          ))}
    </div>
  );
}
