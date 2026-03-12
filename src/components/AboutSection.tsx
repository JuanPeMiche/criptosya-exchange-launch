import { motion } from "framer-motion";
import { Shield, Zap, Handshake } from "lucide-react";

const values = [
  { icon: Shield, title: "Seguridad", desc: "Protección de activos con los más altos estándares de la industria." },
  { icon: Zap, title: "Velocidad", desc: "Transacciones procesadas en segundos, sin demoras." },
  { icon: Handshake, title: "Confianza", desc: "Transparencia total en cada operación que realizas." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const AboutSection = () => {
  return (
    <section id="quienes-somos" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          <motion.div variants={fadeInUp} custom={0}>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Quiénes Somos</p>
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">¿Quiénes Somos?</h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
              <h3 className="text-foreground font-semibold text-lg mb-2">Nuestra Misión</h3>
                <p>En Criptosya, desde Montevideo y Punta del Este, nuestra misión es democratizar el acceso a las criptomonedas en Uruguay y toda Latinoamérica, ofreciendo una plataforma segura, transparente y accesible para que cualquier persona pueda participar en la economía digital.</p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold text-lg mb-2">Nuestra Visión</h3>
                <p>Ser el exchange de referencia en Uruguay y la región, con presencia en Montevideo y Punta del Este, reconocido por su confianza, innovación tecnológica y compromiso con la educación financiera de sus usuarios.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} custom={1} className="relative">
            <div className="aspect-square rounded-2xl bg-secondary border border-border overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-12 h-12 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">Criptosya</p>
                <p className="text-muted-foreground mt-2">Tu exchange de confianza</p>
              </div>
            </div>
            <div className="absolute -z-10 inset-4 rounded-2xl bg-primary/10 blur-xl" />
          </motion.div>
        </motion.div>

        {/* Values */}
        <div className="grid sm:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i}
              className="bg-card border border-border rounded-xl p-8 text-center card-hover"
            >
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
