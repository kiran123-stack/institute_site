import React from "react";
import { GraduationCap } from "lucide-react";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-4">
        <GraduationCap className="text-[#1E3A8A]" size={36} />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;