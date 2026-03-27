"use client";

import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919999999999?text=Hello%20I%20want%20course%20details"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} />
    </a>
  );
};

export default WhatsAppButton;