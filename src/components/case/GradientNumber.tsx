export function GradientNumber({ n, className = "" }: { n: number | string; className?: string }) {
  return (
    <span
      className={`font-display leading-none bg-gradient-to-b from-primary to-primary-glow bg-clip-text text-transparent ${className}`}
    >
      {n}
    </span>
  );
}