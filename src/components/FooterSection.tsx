import logo from "@/assets/criptosya-logo.jpeg";

const FooterSection = () => {
  return (
    <footer className="border-t-2 border-primary">
      <div className="bg-card py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="Criptosya" className="w-8 h-8 rounded-lg" />
                <span className="text-lg font-bold text-foreground">Cripto<span className="text-primary">sya</span></span>
              </div>
              <p className="text-muted-foreground text-sm">Tu exchange de confianza en Latinoamérica.</p>
            </div>

            {/* Nav */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["Inicio", "Quiénes Somos", "Servicios", "Noticias", "Partners"].map(l => (
                  <li key={l}><a href={`#${l.toLowerCase().replace(/\s/g, '-').replace('í','i').replace('é','e')}`} className="hover:text-primary transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Remesas Internacionales</li>
                <li>Trading P2P</li>
                <li>Pagos Enterprise</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Política AML/KYC</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2025 Criptosya. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
