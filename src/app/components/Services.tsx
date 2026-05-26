import { Heart, PiggyBank, Users, Car, HeartPulse, ArrowRight, CheckCircle, Plane } from "lucide-react";
import { Link } from "react-router";

export function Services() {
  const services = [
    {
      icon: Heart,
      title: "Life Insurance",
      description: "Protect your loved ones with life insurance solutions tailored to your family's needs and goals.",
      features: [
        "Term and permanent life insurance options",
        "Coverage for income replacement and debt protection",
        "Business and key person life insurance",
        "Beneficiary and policy review",
        "Personalized recommendations for your situation",
      ],
    },
    {
      icon: PiggyBank,
      title: "RESP, RRSP, TFSA",
      description: "Grow your savings with tax-advantaged registered accounts designed for education, retirement, and flexible goals.",
      features: [
        "Registered Education Savings Plans (RESP)",
        "Registered Retirement Savings Plans (RRSP)",
        "Tax-Free Savings Accounts (TFSA)",
        "Contribution and withdrawal strategies",
        "Goal-based planning for every life stage",
      ],
    },
    {
      icon: Plane,
      title: "Travel Insurance",
      description: "Travel with confidence knowing you're protected wherever your journey takes you.",
      features: [
        "Trip cancellation and interruption coverage",
        "Emergency medical and evacuation",
        "Lost luggage and travel delays",
        "24/7 travel assistance",
        "Coverage for multiple trip types",
      ],
      externalLink: "https://shop.tugo.com/store/GLF000",
    },
    {
      icon: Car,
      title: "Home and Auto Insurance",
      description: "Safeguard your home, vehicle, and belongings with coverage that fits your lifestyle and budget.",
      features: [
        "Homeowners and tenant insurance",
        "Auto insurance for personal vehicles",
        "Liability and property damage coverage",
        "Policy comparisons and renewals",
        "Bundling options to maximize savings",
      ],
    },
    {
      icon: HeartPulse,
      title: "Health Insurance",
      description: "Access health coverage and benefits that help protect you and your family beyond provincial plans.",
      features: [
        "Individual and family health plans",
        "Dental and vision coverage options",
        "Prescription drug and extended health benefits",
        "Critical illness and disability coverage",
        "Guidance on supplemental health protection",
      ],
    },
    {
      icon: Users,
      title: "Estate Planning",
      description: "Protect your legacy and ensure your assets are distributed according to your wishes.",
      features: [
        "Will and trust planning",
        "Beneficiary designations",
        "Estate tax strategies",
        "Legacy planning",
        "Charitable giving strategies",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A651] opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive financial solutions designed to help you achieve your goals at every stage of life
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-[#00A651] group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl mb-6 group-hover:from-[#00A651] group-hover:to-[#00C060] transition-all">
                    <Icon className="size-8 text-[#00A651] group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="size-5 text-[#00A651] flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {service.externalLink && (
                    <a
                      href={service.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00A651] to-[#00C060] text-white rounded-full hover:shadow-lg transition-all font-semibold"
                    >
                      Apply Here Now
                      <ArrowRight className="size-5" />
                    </a>
                  )}
                </div>
              );
            })}
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
            Let's Build Your Financial Strategy Together
          </h2>
          <p className="text-xl text-green-50 mb-10">
            Contact us today to schedule a complimentary consultation with one of our advisors.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#00A651] rounded-full hover:bg-gray-50 transition-all shadow-xl font-semibold"
          >
            Schedule Consultation
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}