import { useState } from 'react';
import { ChevronRight, Users, Cpu, Wrench, Briefcase, Car, Utensils, Building, Scissors, Stethoscope, Zap } from 'lucide-react';

const CareerPathways = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const sectors = [
    {
      id: 1,
      title: "Beauty & Cosmetics",
      icon: <Scissors className="w-8 h-8" />,
      gradient: "from-pink-500 to-rose-500",
      description: "Transform lives through beauty and wellness services",
      courses: [
        "Professional Hair Styling & Cutting",
        "Makeup Artistry & Special Effects",
        "Nail Technology & Art Design",
        "Skincare & Facial Treatments",
        "Salon Management & Business"
      ]
    },
    {
      id: 2,
      title: "Information Technology",
      icon: <Cpu className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
      description: "Shape the future with cutting-edge technology",
      courses: [
        "Web Development & Programming",
        "Cybersecurity & Network Defense",
        "Mobile App Development",
        "Data Analysis & AI Fundamentals",
        "Cloud Computing & DevOps"
      ]
    },
    {
      id: 3,
      title: "Healthcare Services",
      icon: <Stethoscope className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      description: "Make a difference in people's health and wellbeing",
      courses: [
        "Medical Assistant Training",
        "Pharmacy Technician",
        "Physical Therapy Assistant",
        "Medical Coding & Billing",
        "Emergency Medical Technician"
      ]
    },
    {
      id: 4,
      title: "Hospitality & Tourism",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-purple-500 to-indigo-500",
      description: "Create memorable experiences for travelers worldwide",
      courses: [
        "Hotel Management & Operations",
        "Culinary Arts & Food Service",
        "Event Planning & Coordination",
        "Tour Guide & Travel Services",
        "Restaurant Management"
      ]
    },
    {
      id: 5,
      title: "Automotive Technology",
      icon: <Car className="w-8 h-8" />,
      gradient: "from-red-500 to-orange-500",
      description: "Master the mechanics of modern transportation",
      courses: [
        "Automotive Repair & Maintenance",
        "Electric Vehicle Technology",
        "Auto Body & Paint Technology",
        "Diesel Engine Technology",
        "Automotive Service Management"
      ]
    },
    {
      id: 6,
      title: "Culinary Arts",
      icon: <Utensils className="w-8 h-8" />,
      gradient: "from-yellow-500 to-amber-500",
      description: "Create culinary masterpieces and food experiences",
      courses: [
        "Professional Cooking Techniques",
        "Baking & Pastry Arts",
        "Food Safety & Sanitation",
        "Menu Planning & Cost Control",
        "International Cuisine"
      ]
    },
    {
      id: 7,
      title: "Construction & Trades",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-gray-600 to-slate-600",
      description: "Build the infrastructure of tomorrow",
      courses: [
        "Carpentry & Woodworking",
        "Electrical Installation & Repair",
        "Plumbing & Pipe Fitting",
        "Masonry & Concrete Work",
        "Construction Project Management"
      ]
    },
    {
      id: 8,
      title: "Manufacturing & Engineering",
      icon: <Wrench className="w-8 h-8" />,
      gradient: "from-teal-500 to-green-600",
      description: "Innovate and create products that change the world",
      courses: [
        "CNC Machining & Programming",
        "Welding & Metal Fabrication",
        "Quality Control & Inspection",
        "Industrial Maintenance",
        "CAD Design & Engineering"
      ]
    },
    {
      id: 9,
      title: "Business & Finance",
      icon: <Briefcase className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-600",
      description: "Drive economic growth and business success",
      courses: [
        "Business Administration",
        "Accounting & Bookkeeping",
        "Digital Marketing & Sales",
        "Project Management",
        "Entrepreneurship & Startups"
      ]
    },
    {
      id: 10,
      title: "Energy & Utilities",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      description: "Power the future with sustainable energy solutions",
      courses: [
        "Solar Panel Installation",
        "Wind Turbine Maintenance",
        "Electrical Power Systems",
        "Energy Efficiency Auditing",
        "Smart Grid Technology"
      ]
    }
  ];

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
              Career Pathways
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 animate-scale-in"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed animate-slide-up-delay">
              Career Pathways are well-structured routes of learning and training that guide students from education to meaningful employment. Within the TVET sector, they play a vital role in linking skills development with real job opportunities, ensuring that learners are prepared for the demands of the labor market.
            </p>
            <p className="text-lg text-blue-200 max-w-4xl mx-auto mt-6 leading-relaxed animate-slide-up-delay-2">
              A Career Pathway provides learners with a clear roadmap, showing how they can progress step by step from basic training to advanced qualifications, while gaining the practical skills and competencies needed by different industries. It helps students make informed choices about their career direction, aligns training with employer needs, and supports continuous growth through lifelong learning.
            </p>
          </div>
        </div>
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-particle w-4 h-4 bg-white/10 rounded-full absolute top-20 left-10"></div>
          <div className="floating-particle w-6 h-6 bg-blue-300/20 rounded-full absolute top-40 right-20"></div>
          <div className="floating-particle w-3 h-3 bg-cyan-300/30 rounded-full absolute bottom-40 left-1/4"></div>
          <div className="floating-particle w-5 h-5 bg-purple-300/20 rounded-full absolute bottom-20 right-1/3"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore Career Sectors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover diverse pathways that align with your interests and the growing demands of the job market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={sector.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer animate-card-appear`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => toggleCard(sector.id)}
            >
              <div className={`bg-gradient-to-r ${sector.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 opacity-10 transform rotate-12 translate-x-4 -translate-y-4">
                  {sector.icon}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                      {sector.icon}
                    </div>
                    <ChevronRight 
                      className={`w-6 h-6 transition-transform duration-300 ${
                        expandedCard === sector.id ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{sector.title}</h3>
                  <p className="text-sm text-white/90">{sector.description}</p>
                </div>
              </div>

              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                expandedCard === sector.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                    Available Courses
                  </h4>
                  <ul className="space-y-3">
                    {sector.courses.map((course, courseIndex) => (
                      <li
                        key={courseIndex}
                        className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 animate-list-item"
                        style={{ animationDelay: `${courseIndex * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        <a 
                          href="#" 
                          className="hover:underline hover:text-blue-600 transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {course}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Choose your pathway and begin building the skills that will shape your future career
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scaleX(0); }
          to { opacity: 1; transform: scaleX(1); }
        }
        
        @keyframes card-appear {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes list-item {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes floating {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-slide-up-delay { animation: slide-up 0.8s ease-out 0.3s both; }
        .animate-slide-up-delay-2 { animation: slide-up 0.8s ease-out 0.6s both; }
        .animate-scale-in { animation: scale-in 1s ease-out 0.5s both; }
        .animate-card-appear { animation: card-appear 0.6s ease-out both; }
        .animate-list-item { animation: list-item 0.4s ease-out both; }
        .floating-particle { animation: floating 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default CareerPathways;