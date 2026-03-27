"use client";

import { Phone } from "lucide-react";

const CallButton = () => {
  return (
    <a
      href="tel:+919999999999"
      className="fixed bottom-20 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50"
      aria-label="Call Institute"
    >
      <Phone size={22} />
    </a>
  );
};

export default CallButton;