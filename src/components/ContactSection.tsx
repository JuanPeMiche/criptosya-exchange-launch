import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "remesas", message: "", channel: "whatsapp" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.channel === "whatsapp") {
      const text = `Hola, soy *${formData.name}*%0A📧 ${formData.email}${formData.phone ? `%0A📱 ${formData.phone}` : ""}%0A📋 Asunto: ${formData.subject}%0A%0A${formData.message}`;
      window.open(`https://wa.me/59893357188?text=${text}`, "_blank");
      toast({ title: "¡Redirigido a WhatsApp!", description: "Completa el envío desde la app." });
    } else {
      const mailSubject = encodeURIComponent(`[${formData.subject}] Consulta de ${formData.name}`);
      const mailBody = encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}${formData.phone ? `\nTeléfono: ${formData.phone}` : ""}\nAsunto: ${formData.subject}\n\n${formData.message}`);
      window.open(`mailto:contacto@criptosya.com?subject=${mailSubject}&body=${mailBody}`, "_blank");
      toast({ title: "¡Abriendo tu cliente de correo!", description: "Completa el envío desde tu app de email." });
    }
    setFormData({ name: "", email: "", phone: "", subject: "remesas", message: "", channel: "whatsapp" });
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

            {/* Channel selector */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Enviar por:</p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, channel: "whatsapp" })}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${
                    formData.channel === "whatsapp"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, channel: "email" })}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${
                    formData.channel === "email"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  Email
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Enviar mensaje <Send className="w-4 h-4" />
            </button>
          </motion.form>

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
                <a href="https://wa.me/59893357188" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">+598 93 357 188</a>
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
                {[
                  { label: "Instagram", href: "https://www.instagram.com/criptosya/" },
                  { label: "X (Twitter)", href: "#" },
                  { label: "Telegram", href: "#" },
                  { label: "LinkedIn", href: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href !== "#" ? "_blank" : undefined}
                    rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                    className="px-4 py-2 rounded-lg border border-border text-muted-foreground text-sm hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    {s.label}
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
