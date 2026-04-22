import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-card/30 to-dark-light" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-border to-transparent" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-teal/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-dark-card/30 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-teal-light text-sm font-medium tracking-widest uppercase mb-6">Let's Talk</p>
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4 text-foreground">
              Have a project in mind?
            </h2>
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light via-[#3a9da5] to-[#4ec6c9]">
                Let's create something amazing together.
              </span>
            </h2>
            <a
              href="mailto:hello@kodedaw.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal to-teal-light text-white font-bold rounded-full text-lg hover:shadow-xl hover:shadow-teal/25 transition-all duration-300 hover:scale-105"
            >
              Get in Touch <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative bg-dark-light border-t border-gray-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/images/kodedaw-logo.png"
                  alt="Kodedaw"
                  className="h-6 w-auto mix-blend-screen"
                />
              </div>
              <p className="text-gray-text text-sm leading-relaxed mb-6">
                Digital Customer Experience & Development Agency. Crafting seamless digital experiences since 2026.
              </p>
              <div className="flex gap-3">
                {[
                  { label: '@', href: '#' },
                  { label: 'Ig', href: 'https://www.instagram.com/kodedaw/' },
                  { label: 'X', href: '#' },
                  { label: 'Fb', href: '#' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    className="w-10 h-10 rounded-full bg-dark-card border border-gray-border flex items-center justify-center text-xs font-bold text-gray-text hover:text-foreground hover:border-teal/40 hover:bg-teal/10 transition-all duration-300"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-foreground/60">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Services', 'Work', 'Insights', 'Careers'].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-text hover:text-foreground transition-colors text-sm flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-teal-light transition-all duration-300 mr-0 group-hover:mr-1" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-foreground/60">Services</h4>
              <ul className="space-y-3">
                {['Creative', 'Engineering', 'Experience', 'Growth', 'SEO', 'Strategy'].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-text hover:text-foreground transition-colors text-sm flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-teal-light transition-all duration-300 mr-0 group-hover:mr-1" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-foreground/60">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-text group hover:text-foreground transition-colors cursor-pointer">
                  <Mail size={16} className="mt-0.5 text-teal-light shrink-0" />
                  <span>business@kodedaw.com</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-text group hover:text-foreground transition-colors cursor-pointer">
                  <Phone size={16} className="mt-0.5 text-teal-light shrink-0" />
                  <span>+62</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-text group hover:text-foreground transition-colors cursor-pointer">
                  <MapPin size={16} className="mt-0.5 text-teal-light shrink-0" />
                  <span>Balikpapan, Indonesia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-gray-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-text text-sm">© 2026 Kodedaw. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-text hover:text-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-text hover:text-foreground text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
