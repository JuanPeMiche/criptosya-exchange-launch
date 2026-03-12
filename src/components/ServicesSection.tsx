import { motion } from "framer-motion";
import { Send, Users, Building2 } from "lucide-react";

const services = [
  {
    icon: Send,
    title: "Remesas Internacionales",
    desc: "Envía y recibe dinero a cualquier parte del mundo usando criptomonedas como medio de transferencia. Rápido, económico y sin intermediarios bancarios. Ideal para familias y trabajadores en el exterior.",
  },
  {
    icon: Users,
    title: "Trading P2P",
    desc: "Compra y vende criptomonedas directamente con otros usuarios de forma segura. Nuestro sistema P2P garantiza que cada operación esté protegida, con custodia de fondos y verificación de identidad.",
  },
  {
    icon: Building2,
    title: "Pagos Enterprise",
    desc: "Soluciones de pago con criptomonedas para empresas. Integra pasarelas de pago cripto en tu negocio, realiza pagos a proveedores internacionales y gestiona tesorería digital con nuestra plataforma B2B.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Servicios</p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Soluciones cripto diseñadas para personas y empresas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i}
              className="bg-card border border-border rounded-2xl p-8 card-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/25 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
