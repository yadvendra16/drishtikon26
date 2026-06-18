"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#07111F] flex flex-col items-center justify-center z-[99999]">
      <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-4">
        DRISHTIKON'26
      </h1>

      <p className="text-gray-300 tracking-[0.3em] uppercase mb-8">
        सोच • संवाद • समाधान
      </p>

      <div className="w-24 h-1 bg-yellow-500 rounded-full animate-pulse" />
    </div>
  );
}