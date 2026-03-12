import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const news = [
  {
    category: "Mercado",
    date: "10 Mar 2025",
    title: "Bitcoin supera los $100,000: ¿qué significa para el mercado?",
    desc: "El activo digital más importante del mundo alcanza un nuevo hito histórico y genera expectativas sobre el futuro del ecosistema cripto.",
  },
  {
    category: "Educación",
    date: "5 Mar 2025",
    title: "Todo lo que necesitas saber sobre las stablecoins en 2025",
    desc: "Las stablecoins se consolidan como la puerta de entrada al mundo cripto. Conoce las principales y cómo funcionan.",
  },
  {
    category: "Remesas",
    date: "28 Feb 2025",
    title: "Cómo las remesas cripto están transformando Latinoamérica",
    desc: "Millones de familias en la región se benefician de transferencias más rápidas y económicas gracias a la tecnología blockchain.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const NewsSection = () => {
  return (
    <section id="noticias" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Noticias</p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Últimas Noticias del Mundo Crypto</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Mantente informado con las tendencias y novedades del ecosistema
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {news.map((n, i) => (
            <motion.article
              key={n.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i}
              className="bg-card border border-border rounded-2xl overflow-hidden card-hover group"
            >
              <div className="h-48 bg-secondary flex items-center justify-center">
                <span className="text-4xl opacity-30">₿</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/15 px-3 py-1 rounded-full">{n.category}</span>
                  <span className="text-xs text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="text-foreground font-bold text-lg mb-2 group-hover:text-primary transition-colors">{n.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{n.desc}</p>
                <button className="text-primary text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Leer más <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/10 transition-colors">
            Ver todas las noticias
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
