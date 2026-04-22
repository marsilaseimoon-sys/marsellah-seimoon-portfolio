import useInView from "../hooks/useInView";

export default function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, vis] = useInView(0.08);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s ${delay}s, transform 0.8s ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
