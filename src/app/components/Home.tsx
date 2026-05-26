import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, PiggyBank, Plane, ArrowRight, Target, Lightbulb, HandshakeIcon, Phone } from "lucide-react";
import founderHero from "@/assets/founder-hero.jpg";

export function Home() {
  const services = [
    {
      icon: Heart,
      title: "Life Insurance",
      description: "Protect your loved ones with life insurance solutions tailored to your family's needs and goals.",
      image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=1080&q=80",
    },
    {
      icon: PiggyBank,
      title: "RESP, RRSP, TFSA",
      description: "Grow your savings with tax-advantaged registered accounts designed for education, retirement, and flexible goals.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      icon: Plane,
      title: "Travel Insurance",
      description: "Travel with confidence knowing you're protected wherever your journey takes you.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      externalLink: "https://shop.tugo.com/store/GLF000",
    },
  ];

  const approach = [
    {
      icon: Target,
      title: "Goal-Focused",
      description: "Every strategy we develop is aligned with your specific life goals and values.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "We leverage the latest financial tools and strategies to optimize your outcomes.",
    },
    {
      icon: HandshakeIcon,
      title: "Long-Term Partnership",
      description: "We're committed to being your trusted advisor through every stage of life.",
    },
  ];

  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "$10M+", label: "Assets Managed" },
    { value: "1,000+", label: "Clients Served" },
    { value: "10+", label: "Partners" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-10 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
                {/* Removed '✨ Trusted Financial Planning Since 1999' */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
                Your Financial Future,{" "}
                <span className="text-[#00A651] block">Reimagined</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Experience personalized financial planning that adapts to your life's journey. From retirement dreams to estate planning, we're here every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#00A651] text-white rounded-full hover:bg-[#008F46] transition-all shadow-lg hover:shadow-xl gap-2 group"
                >
                  Start Your Journey
                  <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-[#00A651] hover:text-[#00A651] transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-72 h-72 bg-[#00A651] opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-green-300 opacity-10 rounded-full blur-3xl"></div>
                <ImageWithFallback
                  src={founderHero}
                  alt="Great Life Financial founder"
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#00A651] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-green-100 text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-20 pb-10 lg:pt-24 lg:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored strategies designed to help you achieve your unique financial goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#00A651] transition-all hover:shadow-2xl"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00A651] to-green-400 opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-full"></div>
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-green-50 rounded-2xl mb-4 group-hover:bg-[#00A651] transition-colors">
                      <Icon className="size-7 text-[#00A651] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    {"externalLink" in service && service.externalLink ? (
                      <a
                        href={service.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#00A651] hover:text-[#008F46] gap-2 group/link font-medium"
                      >
                        Learn More
                        <ArrowRight className="size-5 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <Link
                        to="/services"
                        className="inline-flex items-center text-[#00A651] hover:text-[#008F46] gap-2 group/link font-medium"
                      >
                        Learn More
                        <ArrowRight className="size-5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="pt-10 pb-20 lg:pt-12 lg:pb-24 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1689152496131-9cecc95cde25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWFsdGglMjBtYW5hZ2VtZW50JTIwYnVzaW5lc3MlMjBoYW5kc2hha2V8ZW58MXx8fHwxNzcyMjE1MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional meeting"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                A Different Approach to Financial Planning
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We believe financial planning should be personal, transparent, and focused on what truly matters to you. That's why we take the time to understand your story before crafting your strategy.
              </p>
              
              <div className="space-y-6">
                {approach.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#00A651] rounded-xl flex items-center justify-center">
                        <Icon className="size-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-[#00A651] text-white rounded-full hover:bg-[#008F46] transition-all shadow-lg"
              >
                Learn About Us
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00A651] to-[#00C060]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Take Control of Your Financial Future?
          </h2>
          <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto">
            Schedule a complimentary consultation and discover how we can help you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#00A651] rounded-full hover:bg-gray-50 transition-all shadow-xl font-semibold"
            >
              Schedule Consultation
              <ArrowRight className="size-5" />
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all font-semibold"
            >
              <Phone className="size-5" />
              (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}