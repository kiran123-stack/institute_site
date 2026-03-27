"use client";

import { useEffect, useState } from "react";
import { XCircle, MessageSquare } from "lucide-react";
import Link from "next/link";

const EnquiryPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-white p-8 rounded-lg max-w-md text-center relative">

        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-500"
        >
          <XCircle size={20} />
        </button>

        <div className="flex justify-center mb-4">
          <MessageSquare className="text-[#1E3A8A]" size={36} />
        </div>

        <h3 className="text-xl font-bold mb-3">
          Need Course Guidance?
        </h3>

        <p className="text-gray-600 mb-6">
          Talk to our experts and choose the best course for your career.
        </p>

        <Link
          href="/enquiry"
          className="bg-[#1E3A8A] text-white px-6 py-3 rounded-md"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
};

export default EnquiryPopup;