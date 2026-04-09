import React from "react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-indigo-600 p-12">

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Ready to Transform Your IT Infrastructure?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/90">
          Join hundreds of satisfied clients who trust Aritechs for their IT needs
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Primary Button */}
          <button className="rounded-md bg-white px-6 py-3 text-sm sm:text-base font-semibold text-black shadow-lg hover:bg-red-500 transition">
            Schedule Consultation
          </button>

          {/* Secondary Button */}
          {/* <button className="rounded-full border border-white px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white hover:text-indigo-600 transition">
            View Case Studies
          </button> */}

        </div>

      </div>

      {/* Background Glow Effects */}
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-black/20 blur-3xl"></div>

    </section>
  );
};

export default CTASection;
