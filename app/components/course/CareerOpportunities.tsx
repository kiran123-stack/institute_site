import { Briefcase } from "lucide-react";

interface Props {
  careers: string[];
}

const CareerOpportunities = ({ careers }: Props) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-[#1E3A8A] font-poppins mb-6 flex items-center gap-2 border-b border-blue-200/50 pb-4">
        <Briefcase size={22} className="text-[#F59E0B]" />
        Career Opportunities
      </h3>

      <div className="flex flex-col gap-3">
        {careers.map((career, i) => (
          <div 
            key={i} 
            className="flex items-center gap-4 bg-white p-4 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow group cursor-default"
          >
            <div className="bg-blue-50 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors p-2.5 rounded-lg text-[#3B82F6]">
              <Briefcase size={18} />
            </div>
            <span className="text-gray-800 font-semibold text-sm md:text-base font-inter">
              {career}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerOpportunities;