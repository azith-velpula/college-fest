import React from "react";
import { GraduationCap } from "lucide-react";

export default function UniversityPatronage() {
  const leadershipRoles = [
    {
      title: "Chief Patron",
      name: "Prof. Kumar Molugaram",
      description: "Hon’ble Vice Chancellor, Osmania University",
    },
    {
      title: "Patron",
      name: "Prof. G. Naresh",
      description: "Registrar, Osmania University",
    },
    {
      title: "Chairman",
      name: "Dr. Indhrakanti Shekhar",
      description: "Principal, UCCBM, OU",
    },
    {
      title: "Vice Chairman",
      name: "Dr. Samunnatha",
      description: "Vice Principal, UCCBM, OU",
    },
    {
      title: "Head of the Department",
      name: "Dr. Y. Jahangir",
      description: "UCCBM, OU",
    },
    { title: "Faculty Coordinator", name: "Dr. Samunnatha", description: "" },
    {
      title: "Advisory Committee",
      name: "Prof. D. Sreeramulu,Dr. P. Venkataiah, Dr. Smitha Sambrani, Dr. G. Vidya Sagar Rao",
      description: "",
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20 text-white font-sans">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-6 text-white drop-shadow-lg">
            University Patronage & Leadership
          </h1>
          <p className="text-center mb-12 text-xl leading-relaxed text-white">
            Meet the esteemed leaders and academic visionaries guiding our
            institution towards excellence and innovation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipRoles.map((role, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-2xl text-center border border-white shadow-lg hover:scale-105 transform transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20 pointer-events-none"></div>
                <GraduationCap className="mx-auto mb-4 text-white" size={40} />
                <h3 className="text-2xl font-bold text-white relative z-10">
                  {role.title}
                </h3>
                <p className="text-xl font-semibold text-white mt-1 relative z-10">
                  {role.name}
                </p>
                {role.description && (
                  <p className="text-white mt-2 relative z-10">
                    {role.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
