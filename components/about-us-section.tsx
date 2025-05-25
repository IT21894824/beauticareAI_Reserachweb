import { Users, Award, Target, Heart } from "lucide-react";

export default function AboutUsSection() {
  const teamMembers = [
    {
      name: "S.A.D.E. Prasad",
      role: "Team Leader / Researcher",
      image: "/team/prasad.jpg",
    },
    {
      name: "M.K.I. Vidanaha",
      role: "Machine Learning Engineer",
      image: "/team/vidanaha.jpg",
    },
    {
      name: "P.M. Prabashwara",
      role: "Frontend Developer",
      image: "/team/prabashwara.jpg",
    },
    {
      name: "K.D.M. Mihisara",
      role: "Mobile Developer",
      image: "/team/mihisara.jpg",
    },
  ];

  const academicStaff = [
    {
      name: "Mr. J. Chamod Rukmal",
      role: "Supervisor",
      image: "/team/supervisor.jpg",
    },
    {
      name: "Ms. S.A.D. Sanjana",
      role: "Co-Supervisor",
      image: "/team/cosupervisor.jpg",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-[#FAE7FB]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate team behind BeautiCare AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Team Members */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
              Student Team
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                  />
                  <div className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </div>
                  <div className="text-sm text-gray-600">{member.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Supervisors */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
              Academic Guidance
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {academicStaff.map((staff, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                  />
                  <div className="text-lg font-semibold text-gray-800">
                    {staff.name}
                  </div>
                  <div className="text-sm text-gray-600">{staff.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
