import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "remesas", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Contacto</p>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">¿Listo para empezar? Contáctanos</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="text" placeholder="Nombre" required
              value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="email" placeholder="Email" required
                value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="tel" placeholder="Teléfono"
                value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <select
              value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="remesas">Remesas</option>
              <option value="p2p">P2P</option>
              <option value="enterprise">Enterprise</option>
              <option value="otro">Otro</option>
            </select>
            <textarea
              placeholder="Mensaje" rows={5} required
              value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Enviar mensaje <Send className="w-4 h-4" />
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:pl-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-semibold">Email</p>
                <p className="text-muted-foreground">contacto@criptosya.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-semibold">WhatsApp</p>
                <p className="text-muted-foreground">WhatsApp disponible</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-semibold">Ubicación</p>
                <p className="text-muted-foreground">Latinoamérica</p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-foreground font-semibold mb-4">Síguenos</p>
              <div className="flex gap-3">
                {["X (Twitter)", "Telegram", "Instagram", "LinkedIn"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="px-4 py-2 rounded-lg border border-border text-muted-foreground text-sm hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
