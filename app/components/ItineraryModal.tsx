"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Sparkles, X } from "lucide-react";

interface ItineraryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ItineraryModal({
    isOpen,
    onClose,
}: ItineraryModalProps) {
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="itinerary-title"
                >
                    <motion.button
                        type="button"
                        aria-label="Close itinerary announcement"
                        className="absolute inset-0 cursor-default bg-[#020711]/80 backdrop-blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    <motion.div
                        className="relative max-h-[calc(100svh-2rem)] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-yellow-400/25 bg-[#08172B]/95 px-6 py-10 text-center shadow-[0_30px_100px_rgba(0,0,0,0.65),0_0_80px_rgba(212,175,55,0.12)] sm:px-12 sm:py-14"
                        initial={{ opacity: 0, y: 28, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.97 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
                        <div className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-white/5" />

                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close itinerary announcement"
                            className="absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-white/5 p-2 text-gray-300 transition hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-300"
                        >
                            <X size={20} />
                        </button>

                        <div className="relative">
                            <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 text-yellow-300 shadow-[0_0_35px_rgba(250,204,21,0.12)]">
                                <CalendarDays size={30} strokeWidth={1.5} />
                            </div>

                            <div className="mb-5 flex items-center justify-center gap-3 text-[0.65rem] font-semibold tracking-[0.38em] text-yellow-400">
                                <span className="h-px w-8 bg-gradient-to-r from-transparent to-yellow-400/70" />
                                DRISHTIKON&apos;26
                                <span className="h-px w-8 bg-gradient-to-l from-transparent to-yellow-400/70" />
                            </div>

                            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-gray-400">
                                The schedule is being curated
                            </p>

                            <h2
                                id="itinerary-title"
                                className="heading-font text-4xl font-semibold text-white sm:text-5xl"
                            >
                                Something remarkable
                                <span className="mt-1 block text-yellow-400">
                                    is taking shape.
                                </span>
                            </h2>

                            <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-gray-300 sm:text-base">
                                From opening ceremony to final resolution, every
                                detail is being thoughtfully planned. The complete
                                conference itinerary will be unveiled soon.
                            </p>

                            <div className="mx-auto my-8 h-px max-w-xs bg-gradient-to-r from-transparent via-yellow-400/35 to-transparent" />

                            <div className="flex items-center justify-center gap-2 text-sm font-medium tracking-[0.12em] text-yellow-200">
                                <Sparkles size={16} />
                                25–26 JULY 2026
                                <Sparkles size={16} />
                            </div>

                            <button
                                type="button"
                                onClick={onClose}
                                className="mt-8 rounded-xl border border-yellow-400/40 bg-yellow-400/10 px-7 py-3 text-sm font-semibold tracking-wider text-yellow-300 transition hover:border-yellow-300 hover:bg-yellow-400/15"
                            >
                                STAY TUNED
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
