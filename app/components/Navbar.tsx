"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#08172B]/80 backdrop-blur-md border-b border-yellow-500/20">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="Drishtikon"
                        width={60}
                        height={60}
                        priority
                        className="rounded-full"
                    />

                    <div>
                        <h1 className="font-bold text-xl tracking-wide text-yellow-400">
                            DRISHTIKON'26
                        </h1>

                        <p className="text-xs text-gray-400">
                            सोच • संवाद • समाधान
                        </p>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm text-white">

                    <a
                        href="https://docs.google.com/forms/d/1qhPThU1QJb6vgRzKbZ3paOuMLVqO-V9X4U6Q5huuJJo/edit"
                        className="hover:text-yellow-400 transition"
                    >
                        REGISTER
                    </a>

                    <a
                        href="https://docs.google.com/forms/d/1-Am9s3W69657v3nO4zhasfLkLyoWXGGr8jDMk8K_acM/edit"
                        className="hover:text-yellow-400 transition"
                    >
                        EXECUTIVE BOARD
                    </a>

                    <a
                        href="https://docs.google.com/forms/d/16QtT3OY_p3bqJ7AIsn5iq3s0jVybf-mHLzsJcLJNctk/edit"
                        className="hover:text-yellow-400 transition"
                    >
                        CAMPUS AMBASSADOR FORM
                    </a>


                    <a
                        href="#committees"
                        className="hover:text-yellow-400 transition"
                    >
                        COMMITTEES
                    </a>

                    <a
                        href="https://docs.google.com/spreadsheets/d/1O5zSYXjM8STrolygy494KglO3gMRzX7eleHlsKQO6k0/edit?gid=1136695232#gid=1136695232"
                        target="_blank"
                        className="hover:text-yellow-400 transition"
                    >
                        PORTFOLIO MATRIX
                    </a>

                    <a
                        href="/brochure.pdf"
                        target="_blank"
                        className="hover:text-yellow-400 transition"
                    >
                        BROCHURE
                    </a>

                    <a
                        href="#about"
                        className="hover:text-yellow-400 transition"
                    >
                        ITINERARY
                    </a>

                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>

            {/* Mobile Slide Menu */}
            {menuOpen && (
                <div className="md:hidden fixed top-0 right-0 h-screen w-72 z-[9999] bg-[#08172B] border-l border-yellow-500/20 p-8 flex flex-col gap-6 text-white shadow-2xl">

                    <button
                        onClick={() => setMenuOpen(false)}
                        className="self-end"
                    >
                        <X size={28} />
                    </button>

                    <a
                        href="https://docs.google.com/forms/d/1qhPThU1QJb6vgRzKbZ3paOuMLVqO-V9X4U6Q5huuJJo/edit"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-yellow-400 transition"
                    >
                        REGISTER
                    </a>
                    <a
                        href="https://docs.google.com/forms/d/1-Am9s3W69657v3nO4zhasfLkLyoWXGGr8jDMk8K_acM/edit"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-yellow-400 transition"
                    >
                        EXECUTIVE BOARD FORM
                    </a>

                    <a
                        href="https://docs.google.com/forms/d/16QtT3OY_p3bqJ7AIsn5iq3s0jVybf-mHLzsJcLJNctk/edit"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-yellow-400 transition"
                    >
                        CAMPUS AMBASSADOR FORM
                    </a>
                    <a
                        href="#committees"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-yellow-400 transition"
                    >
                        COMMITTEES
                    </a>

                    <a
                        href="https://docs.google.com/spreadsheets/d/1O5zSYXjM8STrolygy494KglO3gMRzX7eleHlsKQO6k0/edit?gid=1136695232#gid=1136695232"
                        target="_blank"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-yellow-400 transition"
                    >
                        PORTFOLIO MATRIX
                    </a>

                    <a
                        href="/brochure.pdf"
                        target="_blank"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-yellow-400 transition"
                    >
                        BROCHURE
                    </a>

                    <a
                        href="#about"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-yellow-400 transition"
                    >
                        ITINERARY
                    </a>

                </div>
            )}
        </nav>
    );


}
