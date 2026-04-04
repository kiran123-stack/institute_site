"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      bgRef.current.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        /* ── Google Font ── */
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

        /* ── Reset ── */
        .hero * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Section ── */
        .hero {
          position: relative;
          height: 90vh;
          min-height: 580px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          color: #fff;
          font-family: 'Inter', sans-serif;
        }

        /* ── Background ── */
        .hero__bg {
          position: absolute;
          inset: -8%;
          background-image: url('/background.jfif');
          background-size: cover;
          background-position: center;
          transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: zoom 15s ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes zoom {
          from { transform: scale(1);   }
          to   { transform: scale(1.1); }
        }

        /* ── Overlay — same black/70 as original ── */
        .hero__overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.70);
        }

        /* ── Subtle warm vignette on top ── */
        .hero__vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(0,0,0,0.45) 100%);
          pointer-events: none;
        }

        /* ── Glow orbs ── */
        .hero__orb1 {
          position: absolute;
          top: 25%;
          left: 30%;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: rgba(245, 158, 11, 0.07);
          filter: blur(80px);
          pointer-events: none;
        }
        .hero__orb2 {
          position: absolute;
          bottom: 20%;
          right: 25%;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: rgba(251, 191, 36, 0.05);
          filter: blur(70px);
          pointer-events: none;
        }

        /* ── Content ── */
        .hero__content {
          position: relative;
          z-index: 10;
          padding: 0 1.5rem;
          max-width: 820px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── Badge ── */
        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(245, 158, 11, 0.10);
          border: 1px solid rgba(245, 158, 11, 0.32);
          color: #fbbf24;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 6px 18px;
          border-radius: 100px;
          margin-bottom: 1.75rem;
          opacity: 0;
          animation: fadeSlideUp 0.7s ease 0.1s forwards;
        }

        .hero__badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fbbf24;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1);    }
          50%      { opacity:.4; transform:scale(.7); }
        }

        /* ── Heading ── */
        .hero__heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.6rem, 7vw, 5.2rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.01em;
          margin-bottom: 1.25rem;
        }

        .hero__heading-line1 {
          display: block;
          color: #f7f3ed;
          opacity: 0;
          animation: fadeSlideUp 0.85s cubic-bezier(0.22,1,0.36,1) 0.25s forwards;
        }

        .hero__heading-line2 {
          display: block;
          color: #F59E0B;
          position: relative;
          opacity: 0;
          animation: fadeSlideUp 0.85s cubic-bezier(0.22,1,0.36,1) 0.42s forwards;
        }

        .hero__heading-line2::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          height: 2px;
          width: 0;
          background: linear-gradient(90deg, transparent, rgba(245,158,11,0.65), transparent);
          animation: expandLine 0.9s ease 1.1s forwards;
        }

        @keyframes expandLine {
          to { width: 58%; }
        }

        /* ── Divider ── */
        .hero__divider {
          width: 52px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent);
          margin: 1.25rem auto 1.5rem;
          opacity: 0;
          animation: fadeIn 0.6s ease 0.65s forwards;
        }

        /* ── Paragraph ── */
        .hero__para {
          font-size: clamp(0.88rem, 2.2vw, 1.08rem);
          font-weight: 300;
          color: rgba(220, 213, 205, 0.85);
          line-height: 1.8;
          max-width: 540px;
          margin-bottom: 2.5rem;
          opacity: 0;
          animation: fadeSlideUp 0.9s ease 0.75s forwards;
        }

        /* ── Stats ── */
        .hero__stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
          opacity: 0;
          animation: fadeSlideUp 0.8s ease 0.9s forwards;
        }

        .hero__stat {
          text-align: center;
        }

        .hero__stat-number {
          display: block;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.5rem, 3.5vw, 2.1rem);
          font-weight: 700;
          color: #F59E0B;
          line-height: 1;
        }

        .hero__stat-label {
          display: block;
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(180, 172, 162, 0.65);
          margin-top: 4px;
        }

        .hero__stat-sep {
          width: 1px;
          height: 36px;
          background: rgba(245, 158, 11, 0.2);
          flex-shrink: 0;
        }

        /* ── Buttons ── */
        .hero__btns {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
          margin-bottom: 2.5rem;
          opacity: 0;
          animation: fadeSlideUp 0.8s ease 1.05s forwards;
        }

        .hero__btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #F59E0B;
          color: #0c0700;
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 12px 32px;
          border-radius: 8px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.22s ease, transform 0.2s ease, box-shadow 0.22s ease;
          box-shadow: 0 4px 24px rgba(245, 158, 11, 0.32);
          position: relative;
          overflow: hidden;
        }

        .hero__btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.18), transparent);
          opacity: 0;
          transition: opacity 0.22s;
        }

        .hero__btn-primary:hover {
          background: #e08e00;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(245, 158, 11, 0.48);
        }

        .hero__btn-primary:hover::before { opacity: 1; }
        .hero__btn-primary:active { transform: scale(0.97); }

        .hero__btn-arrow {
          font-size: 1rem;
          display: inline-block;
          transition: transform 0.2s ease;
        }

        .hero__btn-primary:hover .hero__btn-arrow { transform: translateX(3px); }

        .hero__btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: #f7f3ed;
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 12px 32px;
          border-radius: 8px;
          text-decoration: none;
          border: 2px solid rgba(247, 243, 237, 0.35);
          cursor: pointer;
          transition: border-color 0.22s ease, background 0.22s ease, transform 0.2s ease;
          backdrop-filter: blur(4px);
        }

        .hero__btn-outline:hover {
          border-color: rgba(247, 243, 237, 0.75);
          background: rgba(247, 243, 237, 0.07);
          transform: translateY(-2px);
        }

        .hero__btn-outline:active { transform: scale(0.97); }

        /* ── Trust badges ── */
        .hero__trust {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          opacity: 0;
          animation: fadeIn 0.8s ease 1.3s forwards;
        }

        .hero__trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(10, 7, 2, 0.55);
          border: 1px solid rgba(245, 158, 11, 0.22);
          color: rgba(251, 191, 36, 0.75);
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 100px;
          backdrop-filter: blur(6px);
        }

        .hero__trust-badge-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #fbbf24;
          flex-shrink: 0;
        }

        /* ── Scroll indicator ── */
        .hero__scroll {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          z-index: 10;
          opacity: 0;
          animation: fadeIn 1s ease 1.7s forwards;
        }

        .hero__scroll-text {
          font-size: 0.57rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(180, 172, 160, 0.45);
        }

        .hero__scroll-mouse {
          width: 22px;
          height: 34px;
          border: 1.5px solid rgba(245, 158, 11, 0.32);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          padding-top: 6px;
        }

        .hero__scroll-wheel {
          width: 3px;
          height: 6px;
          background: #F59E0B;
          border-radius: 3px;
          animation: scrollWheel 1.8s ease-in-out infinite;
        }

        @keyframes scrollWheel {
          0%   { transform: translateY(0);    opacity: 1; }
          75%  { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0);    opacity: 0; }
        }

        /* ── Shared keyframes ── */
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .hero__stats { gap: 1.25rem; }
          .hero__stat-sep { display: none; }
          .hero__stat-last { display: none; }
          .hero__btns { flex-direction: column; align-items: center; }
          .hero__btn-primary,
          .hero__btn-outline { width: 100%; max-width: 260px; justify-content: center; }
        }

        @media (max-width: 380px) {
          .hero__badge { font-size: 0.58rem; padding: 5px 14px; }
        }
      `}</style>

      <section className="hero">

        {/* Background */}
        <div ref={bgRef} className="hero__bg" />

        {/* Same overlay as original — black/70 */}
        <div className="hero__overlay" />

        {/* Vignette */}
        <div className="hero__vignette" />

        {/* Glow orbs */}
        <div className="hero__orb1" />
        <div className="hero__orb2" />

        {/* Content */}
        <div className="hero__content">

        
          {/* Heading */}
          <h1 className="hero__heading">
            <span className="hero__heading-line1">Build Your Future</span>
            <span className="hero__heading-line2">
              With Real Skills
            </span>
          </h1>

          {/* Divider */}
          <div className="hero__divider" />

          {/* Paragraph */}
          <p className="hero__para">
            No theory. No confusion. Just real-world skills that get you hired.
            Learn computer &amp; paramedical courses with expert guidance.
          </p>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">5,000+</span>
              <span className="hero__stat-label">Graduates</span>
            </div>
            <div className="hero__stat-sep" />
            <div className="hero__stat">
              <span className="hero__stat-number">40+</span>
              <span className="hero__stat-label">Courses</span>
            </div>
            <div className="hero__stat-sep" />
            <div className="hero__stat">
              <span className="hero__stat-number">98%</span>
              <span className="hero__stat-label">Placement</span>
            </div>
            <div className="hero__stat-sep hero__stat-last" />
            <div className="hero__stat hero__stat-last">
              <span className="hero__stat-number">12+</span>
              <span className="hero__stat-label">Years</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="hero__btns">
            <Link href="/courses" className="hero__btn-primary">
              Explore Courses
              <span className="hero__btn-arrow">→</span>
            </Link>
            <Link href="/enquiry" className="hero__btn-outline">
              Enquire Now
            </Link>
          </div>

          
         

        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll">
          <span className="hero__scroll-text">Scroll</span>
          <div className="hero__scroll-mouse">
            <span className="hero__scroll-wheel" />
          </div>
        </div>

      </section>
    </>
  );
};

export default Hero;