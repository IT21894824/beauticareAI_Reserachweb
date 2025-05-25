import { Calendar, CheckCircle, Clock, Target } from "lucide-react";

export default function MilestonesSection() {
  const milestones = [
    {
      phase: "Phase 1",
      title: "AI Model Development",
      date: "Jun 2024",
      description:
        "Building and training machine learning models for skin and facial feature analysis",
      status: "completed",
      icon: CheckCircle,
    },
    {
      phase: "Phase 2",
      title: "Interface Design",
      date: "Aug 2024",
      description: "Designing an intuitive and user-friendly mobile interface",
      status: "completed",
      icon: CheckCircle,
    },
    {
      phase: "Phase 3",
      title: "Application Development",
      date: "Oct 2024",
      description: "Integrating AI capabilities with mobile UI components",
      status: "in-progress",
      icon: Clock,
    },
    {
      phase: "Phase 4",
      title: "Makeup & Fashion Module Integration",
      date: "Feb 2025",
      description:
        "Expanding recommendations to include makeup and outfit styling",
      status: "upcoming",
      icon: Target,
    },
    {
      phase: "Phase 5",
      title: "Final Testing & Deployment",
      date: "Apr 2025",
      description: "System testing, final polishing, and release to production",
      status: "upcoming",
      icon: Target,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-100";
      case "in-progress":
        return "text-[#E3AADD] bg-[#FAE7FB]";
      case "upcoming":
        return "text-gray-500 bg-gray-100";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };

  return (
    <section
      id="milestones"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FAE7FB] to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Project Milestones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track our journey from concept to completion
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E3AADD] to-[#C3C7F4]"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-[#E3AADD] rounded-full z-10"></div>

                  {/* Content Card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-5/12 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-8"
                        : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-[#E3AADD] bg-[#FAE7FB] px-3 py-1 rounded-full">
                          {milestone.phase}
                        </span>
                        <div
                          className={`p-2 rounded-full ${getStatusColor(
                            milestone.status
                          )}`}
                        >
                          <IconComponent className="h-5 w-5" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {milestone.title}
                      </h3>

                      <div className="flex items-center text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{milestone.date}</span>
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
