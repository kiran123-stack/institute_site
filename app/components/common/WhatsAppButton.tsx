"use client";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919999999999?text=Hello%20I%20want%20course%20details"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 bg-white hover:scale-105 transition"
      aria-label="Chat on WhatsApp"
    >
       <img
        src="/WHATSAPP.svg"
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </a>
  );
};

export default WhatsAppButton;