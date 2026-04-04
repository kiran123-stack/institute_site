"use client";

import { useEffect, useState } from "react";

const EnquiryPopup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const handleSubmit = () => {
    if (!name || !phone) return alert("Please fill all fields");

    const message = `Hello, I want course details.%0AName: ${name}%0APhone: ${phone}`;
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">

      {/* MAIN BOX */}
      <div className="bg-white rounded-xl overflow-hidden max-w-lg w-full shadow-xl relative grid grid-cols-2">

        {/* CLOSE */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-sm z-10"
        >
          ✕
        </button>

        {/* LEFT IMAGE (NO CUT) */}
        <div className="w-full h-full">
          <img
            src="/teacher.jfif"
            alt="Students"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-4 flex flex-col justify-center">

          {/* ICON */}
          <div className="flex justify-center mb-2">
            <img src="/icons/medical-team.png" alt="icon" className="w-8 h-8" />
          </div>

          <h3 className="text-base font-bold text-center text-gray-800 mb-1">
            Need Guidance?
          </h3>

          <p className="text-gray-500 text-xs text-center mb-3">
            Talk to our experts now.
          </p>

          {/* FORM */}
          <div className="space-y-2">

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 rounded-md text-sm focus:ring-2 focus:ring-blue-200 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border p-2 rounded-md text-sm focus:ring-2 focus:ring-blue-200 outline-none"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md text-sm font-semibold transition"
            >
              WhatsApp →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPopup;