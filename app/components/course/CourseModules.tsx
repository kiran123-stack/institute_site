import { CheckCircle2 } from "lucide-react";

interface Props {
  modules: string[];
}

const CourseModules = ({ modules }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#1E3A8A] font-poppins mb-6 border-b border-gray-100 pb-4">
        What You Will Learn
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {modules.map((module, i) => (
          <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-[#3B82F6] hover:bg-white transition-all shadow-sm">
            <CheckCircle2 className="text-[#10B981] shrink-0 mt-0.5" size={20} />
            <span className="text-gray-800 font-medium font-inter">{module}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseModules;