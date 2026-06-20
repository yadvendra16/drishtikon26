"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Globe2, Sparkles } from "lucide-react";

interface AboutModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AboutModal({
    isOpen,
    onClose,
}: AboutModalProps) {
    useEffect(() => {
        if (!isOpen) return;


        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4 }}
                        className="
                    relative
                    w-full
                    max-w-4xl
                    max-h-[90vh]
                    overflow-y-auto
                    rounded-[2rem]
                    border
                    border-yellow-500/30
                    bg-[#08172B]/95
                    backdrop-blur-xl
                    p-8
                    md:p-12
                    shadow-[0_0_80px_rgba(212,175,55,0.15)]
                    "
                    >

                        {/* Decorative Glow */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />

                        {/* Close */}
                        <button
                            onClick={onClose}
                            className="
                        absolute
                        top-5
                        right-5
                        p-2
                        rounded-full
                        border
                        border-yellow-500/20
                        hover:bg-yellow-500/10
                        transition
                        "
                        >
                            <X size={20} />
                        </button>

                        {/* Header */}
                        <div className="text-center mb-10">

                            <div className="flex justify-center mb-4">
                                <div className="
                            w-16 h-16
                            rounded-2xl
                            bg-yellow-500/10
                            border border-yellow-500/20
                            flex items-center justify-center
                            text-yellow-400
                            ">
                                    <Globe2 size={32} />
                                </div>
                            </div>

                            <p className="text-yellow-400 tracking-[0.35em] text-xs uppercase">
                                Diplomatic Briefing
                            </p>

                            <h2 className="text-4xl md:text-5xl font-bold mt-4">
                                About
                                <span className="text-yellow-400">
                                    {" "}Drishtikon'26
                                </span>
                            </h2>

                            <div className="mt-6 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="space-y-6 text-gray-300 leading-8 text-[15px] md:text-base">

                            <p>
                                Drishtikon'26 is more than a Model United Nations conference;
                                it is a platform built on the belief that meaningful dialogue
                                can inspire meaningful change.
                            </p>

                            <p>
                                Guided by the spirit of
                                <span className="text-yellow-400 font-medium">
                                    {" "}“सोच • संवाद • समाधान”
                                </span>,
                                Drishtikon brings together young minds from diverse
                                backgrounds to discuss pressing issues, exchange
                                perspectives, and develop solutions through diplomacy
                                and debate.
                            </p>

                            <p>
                                At its core, Drishtikon seeks to foster critical thinking,
                                leadership, public speaking, and informed decision-making.
                                Through carefully curated committees and engaging
                                simulations, delegates are encouraged to move beyond
                                rhetoric and embrace constructive discourse,
                                collaboration, and problem-solving.
                            </p>

                            <div className="
                        border-l-4
                        border-yellow-500
                        pl-6
                        italic
                        text-yellow-100
                        bg-yellow-500/5
                        py-4
                        rounded-r-xl
                        ">
                                “Meaningful dialogue can inspire meaningful change.”
                            </div>

                            <p>
                                Supporting this vision is our collaboration with
                                Career Launcher, one of India's most respected
                                educational institutions, with a legacy spanning
                                nearly three decades.
                            </p>

                            <p>
                                This partnership represents a shared commitment
                                to nurturing the next generation of leaders,
                                thinkers, and changemakers.
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="mt-10 text-center">

                            <div className="flex justify-center items-center gap-2 text-yellow-400">
                                <Sparkles size={16} />
                                <span className="tracking-[0.2em] text-sm uppercase">
                                    Think • Discuss • Resolve
                                </span>
                                <Sparkles size={16} />
                            </div>

                        </div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );


}
