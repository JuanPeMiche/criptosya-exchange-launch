import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "remesas", message: "", channel: "whatsapp" });
  const { toast } = useToast();

  const validatePhone = (phone: string) => {
    if (!phone) return true; // optional
    const cleaned = phone.replace(/\s/g, "");
    return /^(\+\d{1,3}\d{7,12}|0\d{7,12})$/.test(cleaned);
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast({ title: "Email inválido", description: "Ingresa un email válido (ej: nombre@dominio.com)", variant: "destructive" });
      return;
    }
    if (formData.phone && !validatePhone(formData.phone)) {
      toast({ title: "Teléfono inválido", description: "Debe comenzar con 0 o + seguido del código de país, y tener al menos 8 dígitos.", variant: "destructive" });
      return;
    }

    if (formData.channel === "whatsapp") {
      const text = encodeURIComponent(
        `Hola Criptosya! 👋\n\n` +
        `*Nombre:* ${formData.name}\n` +
        `*Teléfono:* ${formData.phone || "No proporcionado"}\n` +
        `*Servicio:* ${formData.subject}\n\n` +
        `*Consulta:*\n${formData.message}`
      );
      window.open(`https://wa.me/59893357188?text=${text}`, "_blank");
      toast({ title: "✅ Se abrió WhatsApp con tu mensaje.", description: "Solo confirmá el envío." });
    } else {
      const subject = encodeURIComponent(`Consulta desde web - ${formData.subject} - ${formData.name}`);
      const body = encodeURIComponent(
        `Nombre: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Teléfono: ${formData.phone || "No proporcionado"}\n` +
        `Servicio de interés: ${formData.subject}\n\n` +
        `Mensaje:\n${formData.message}\n\n` +
        `---\nEnviado desde el formulario de contacto de criptosya.com`
      );
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=contacto@criptosya.com&su=${subject}&body=${body}`;
      window.open(gmailUrl, "_blank");
      toast({ title: "✅ Se abrió Gmail con tu mensaje listo para enviar.", description: "Revisá la nueva pestaña." });
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
            <a href="https://wa.me/59893357188" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-semibold group-hover:text-primary transition-colors">WhatsApp</p>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">+598 93 357 188</p>
              </div>
            </a>
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
