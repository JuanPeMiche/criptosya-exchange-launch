import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Usuarios registrados" },
  { value: 50, prefix: "$", suffix: "M+", label: "En volumen transaccionado" },
  { value: 15, suffix: "+", label: "Criptomonedas disponibles" },
  { value: 99.9, suffix: "%", label: "Uptime de la plataforma" },
];

const Counter = ({ end, prefix = "", suffix = "", isFloat = false }: { end: number; prefix?: string; suffix?: string; isFloat?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-extrabold">
      {prefix}{isFloat ? count.toFixed(1) : Math.floor(count)}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-stats">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-primary-foreground">
                <Counter end={s.value} prefix={s.prefix} suffix={s.suffix} isFloat={s.value % 1 !== 0} />
              </div>
              <p className="text-primary-foreground/80 mt-2 font-medium">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
