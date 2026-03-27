import React from "react";

const PlacementGrid = () => {
  const placedStudents = [
    { id: 1, name: "Amit Verma", course: "ADCA", company: "Tech Solutions", role: "Office Executive" },
    { id: 2, name: "Suman Kumari", course: "DMLT", company: "Metro Hospital", role: "Lab Technician" },
    { id: 3, name: "Rahul Singh", course: "Tally with GST", company: "Finance Corp", role: "Junior Accountant" },
    { id: 4, name: "Neha Raj", course: "OT Technician", company: "City Care", role: "OT Assistant" },
  ];

  const colors = [
    "from-purple-500 to-indigo-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-blue-500 to-cyan-500",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {placedStudents.map((student, index) => (
        <div
          key={student.id}
          className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          {/* Student Avatar */}
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mb-4 flex items-center justify-center text-gray-600 font-semibold">
            Photo
          </div>

          <h3 className="text-lg font-bold text-gray-900">{student.name}</h3>

          <p className="text-sm text-purple-600 font-semibold mb-3">
            {student.course}
          </p>

          <div className="pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-400 uppercase mb-2">Placed At</p>

            {/* Company Badge */}
            <div className="flex items-center justify-center gap-2 mb-1">
              <div
                className={`w-8 h-8 rounded-full bg-gradient-to-r ${colors[index]} flex items-center justify-center text-white font-bold text-sm`}
              >
                {student.company.charAt(0)}
              </div>

              <p className="font-semibold text-gray-800 text-sm">
                {student.company}
              </p>
            </div>

            <p className="text-xs text-gray-500">{student.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlacementGrid;