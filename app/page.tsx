
"use client";

import { useEffect, useState } from "react";
import Loader from "./components/Loader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Committees from "./components/Committees";
import SecretaryGeneral from "./components/SecretaryGeneral";
import FloatingElements from "./components/FloatingElements";
import Secretariat from "./components/Secretariat";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <main className="bg-[#07111F] text-white min-h-screen">
      {/* <FloatingElements /> */}

      <Navbar />
      <Hero />
      <SecretaryGeneral />
      <Committees />
      <Secretariat />
    </main>
  );
}