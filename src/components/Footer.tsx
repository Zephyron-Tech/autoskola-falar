// import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-white mb-1">
                Autoškola Falář
              </h3>
              <p className="text-sm text-gray-400">
                Vimperk • Prachatice • Volary
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2 text-center md:text-right">
              <a
                href="/gdpr"
                className="text-sm text-gray-400 hover:text-skoda-dynamic-blue transition-colors font-medium"
              >
                Ochrana údajů GDPR
              </a>
              <a
                href="/obchodni-podminky"
                className="text-sm text-gray-400 hover:text-skoda-dynamic-blue transition-colors font-medium"
              >
                Obchodní podmínky
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-500">
              © 2025 Autoškola Falář. Všechna práva vyhrazena.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Webové stránky vytvořila společnost</span>
              <a
                href="https://www.zephyron.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-skoda-dynamic-blue hover:text-blue-400 font-semibold transition-colors"
                title="Zephyron - Tvorba webových stránek a aplikací"
              >
                Zephyron
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
