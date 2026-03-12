import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const tickerData = [
  { symbol: "BTC", price: "$104,250", change: "+2.4%" },
  { symbol: "ETH", price: "$3,890", change: "+1.8%" },
  { symbol: "USDT", price: "$1.00", change: "0.0%" },
  { symbol: "BNB", price: "$715", change: "+3.1%" },
  { symbol: "SOL", price: "$248", change: "+5.2%" },
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 hero-grid" />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(24 95% 53% / 0.3), transparent 70%)" }}
      />

      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
            El futuro de las criptomonedas,{" "}
            <span className="text-gradient-orange">hoy en tus manos.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Compra, vende y transfiere activos digitales con seguridad, velocidad y confianza. Criptosya es tu exchange de confianza en Latinoamérica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Empezar ahora <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#quienes-somos"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-primary/10 transition-colors"
            >
              Conocer más <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 border-t border-border bg-secondary/50">
        <div className="overflow-hidden">
          <div className="animate-ticker flex whitespace-nowrap py-3">
            {[...tickerData, ...tickerData, ...tickerData].map((t, i) => (
              <div key={i} className="inline-flex items-center gap-2 px-8 text-sm">
                <span className="font-semibold text-foreground">{t.symbol}</span>
                <span className="text-muted-foreground">{t.price}</span>
                <span className={t.change.startsWith("+") ? "text-green-400" : "text-muted-foreground"}>
                  {t.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
