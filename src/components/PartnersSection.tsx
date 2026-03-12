import { motion } from "framer-motion";

const partners = ["Binance", "Tether", "Visa", "Mastercard", "Chainlink", "Polygon"];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Partners</p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Nuestros Partners</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Trabajamos con los mejores del ecosistema para ofrecerte el mejor servicio
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <div className="marquee flex items-center gap-16">
            {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-8 py-4 rounded-xl border border-border bg-secondary/50 text-muted-foreground font-bold text-xl hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default select-none"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
