import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "figma:asset/e86b8fde47a5361c1bb3a22d4b94782a353cb7f7.png";

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        {/* Main Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center py-0.5">
              <img src={logo} alt="Great Life Financial" className="h-10 sm:h-11" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative py-2 transition-colors text-[15px] ${
                    isActive(item.path)
                      ? "text-[#00A651]"
                      : "text-gray-700 hover:text-[#00A651]"
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00A651]"></span>
                  )}
                </Link>
              ))}
              <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
                <a href="tel:+1234567890" className="text-gray-600 hover:text-[#00A651] transition-colors">
                  <Phone className="size-5" />
                </a>
                <Link
                  to="/contact"
                  className="px-6 py-2.5 bg-[#00A651] text-white rounded-full hover:bg-[#008F46] transition-all shadow-md hover:shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-50"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? "bg-green-50 text-[#00A651]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 bg-[#00A651] text-white text-center rounded-lg hover:bg-[#008F46] transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <img src={logo} alt="Great Life Financial" className="h-10 mb-4 brightness-0 invert" />
              <p className="text-gray-400 mb-4 max-w-md">
                Helping you build a secure financial future with personalized planning, investment strategies, and expert guidance.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-gray-400 hover:text-[#00A651] transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <Phone className="size-5 mt-0.5 flex-shrink-0" />
                  <span>(416) 477-8836</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="size-5 mt-0.5 flex-shrink-0" />
                  <span>jay@greatlife-financial.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Great Life Financial. All rights reserved.</p>
            <p className="mt-2">
              Securities offered through registered representatives. Investment advisory services offered through licensed advisors.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}