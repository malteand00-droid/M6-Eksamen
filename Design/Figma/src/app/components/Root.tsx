import { Outlet, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Forside", href: "/" },
    { name: "Om Klubben", href: "/om-klubben" },
    { name: "Hold", href: "/hold" },
    { name: "Træning", href: "/traening" },
    { name: "Kampe", href: "/kampe" },
    { name: "Nyheder", href: "/nyheder" },
    { name: "Bliv Medlem", href: "/bliv-medlem" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-600 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">🥏</span>
              </div>
              <span className="text-xl font-bold">Aalborg Ultimate</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`hover:text-blue-200 transition-colors ${
                    isActive(item.href) ? "border-b-2 border-white" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-2 hover:text-blue-200 transition-colors ${
                    isActive(item.href) ? "font-bold" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Aalborg Ultimate Frisbee Klub</h3>
              <p className="text-gray-400">
                Din lokale ultimate frisbee klub i Aalborg
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Kontakt</h3>
              <p className="text-gray-400">Email: info@aalborgultimate.dk</p>
              <p className="text-gray-400">Tlf: +45 12 34 56 78</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Følg Os</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2026 Aalborg Ultimate Frisbee Klub. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}