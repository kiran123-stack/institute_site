import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  href: string;
  label: string;
}

const CTAButton = ({ href, label }: Props) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition shadow-md"
    >
      {label}
      <ArrowRight size={18} />
    </Link>
  );
};

export default CTAButton;