import { ImageWithFallback } from "./figma/ImageWithFallback.js";
import founderHero from "@/assets/founder-hero.jpg";
import sunLifeLogo from "@/assets/partners/sunLife.jpg";
import manulifeLogo from "@/assets/partners/manulife.png";
import desjardinsLogo from "@/assets/partners/desjardins.png";
import rbcLogo from "@/assets/partners/rbc.png";
import iaFinancialLogo from "@/assets/partners/iA.png";
import canadaProtectionPlanLogo from "@/assets/partners/canada-protection-plan.png";
import canadaLifeLogo from "@/assets/partners/canada-life.png";
import assumptionLifeLogo from "@/assets/partners/assumption-life.png";
import { Award, Target, Heart, Users, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Client-Centered",
      description: "Your goals and needs are at the heart of everything we do.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with transparency, honesty, and the highest ethical standards.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in service, advice, and results.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build long-term relationships based on trust and mutual success.",
    },
  ];

  const partners = [
    { name: "Sun Life Financial", logo: sunLifeLogo },
    { name: "Manulife", logo: manulifeLogo },
    { name: "Desjardins", logo: desjardinsLogo },
    { name: "RBC Insurance", logo: rbcLogo },
    { name: "iA Financial Group", logo: iaFinancialLogo },
    { name: "Canada Protection Plan", logo: canadaProtectionPlanLogo },
    { name: "Canada Life", logo: canadaLifeLogo },
    { name: "Assumption Life", logo: assumptionLifeLogo },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A651] opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">About Great Life Financial</h1>
            <p className="text-xl text-gray-300">
              Great Life Financial delivers personalized financial and insurance solutions throughout Ontario, with a special focus on the Greater Toronto Area. Our comprehensive offerings include home, auto, life, critical illness, mortgage, Super Visa, and final expense insurance, as well as investment options like RESP, RRSP, and TFSA. Partnering with industry leaders such as iA Financial, RBC, and Canada Life, we craft tailored plans designed to protect what matters most to you. Inspired by our guiding motto, “Make a Difference – Helping is Giving,” we are dedicated to supporting your aspirations and providing lasting peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-green-50 text-[#00A651] rounded-full text-sm font-medium mb-6">
                Our Journey
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Building Trust Since 1999</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Great Life Financial was founded with a simple mission: to help people achieve financial freedom and peace of mind through personalized, comprehensive financial planning.
                </p>
                <p>
                  Today, our trusted advisory team brings 25+ years of experience, manages over $10M in client assets, serves 1,000+ families, and partners with 10+ leading providers to deliver the secure financial futures our clients deserve.
                </p>
                <p>
                  What began as a small practice has grown into a respected firm serving families throughout Ontario and the Greater Toronto Area. Despite our growth, we remain focused on building genuine relationships, protecting what matters most, and helping clients achieve their long-term goals.
                </p>
                <p>
                  Our certified advisors combine deep expertise in wealth management, retirement planning, estate planning, insurance, and investment strategies. We stay ahead of financial trends and regulatory changes to make sure your plan remains aligned with your goals.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#00A651] opacity-10 rounded-full blur-3xl"></div>
              <ImageWithFallback
                src={founderHero}
                alt="Great Life Financial founder"
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every relationship we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-[#00A651] group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-2xl mb-6 group-hover:bg-[#00A651] transition-colors">
                    <Icon className="size-8 text-[#00A651] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted providers we work with to create the best protection and investment solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center justify-center rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-all bg-white">
                <div className="flex items-center justify-center w-36 h-36 bg-white rounded-3xl overflow-hidden border border-gray-100 mb-6 p-4">
                  <ImageWithFallback
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-center text-lg font-semibold text-gray-900">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A651] opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-300">
              Results that speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: "25+", label: "Years in Business" },
              { icon: Users, value: "1,000+", label: "Satisfied Clients" },
              { icon: Award, value: "$2B+", label: "Assets Under Management" },
              { icon: Shield, value: "98%", label: "Client Retention Rate" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4">
                    <Icon className="size-8 text-[#00A651]" />
                  </div>
                  <div className="text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let's discuss how we can help you achieve your financial goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00A651] text-white rounded-full hover:bg-[#008F46] transition-all shadow-lg font-semibold"
          >
            Schedule a Consultation
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}