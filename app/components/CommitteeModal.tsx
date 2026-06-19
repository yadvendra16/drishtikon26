"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface CommitteeModalProps {
    isOpen: boolean;
    onClose: () => void;
    committee: {
        name: string;
        fullName: string;
        logo: string;
        agenda: string;
    } | null;
}

export default function CommitteeModal({
    isOpen,
    onClose,
    committee,
}: CommitteeModalProps) {
    return (<AnimatePresence>
        {isOpen && committee && (
            <>
                <motion.div
                    className="fixed inset-0 bg-black/70 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                />


                <motion.div
                    className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[700px] z-50 rounded-3xl border border-yellow-500/30 bg-[#08172B] p-8"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 80 }}
                >
                    <p className="text-yellow-400 tracking-[0.3em] text-xs mb-3">
                        CONFIDENTIAL BRIEFING
                    </p>

                    <div className="flex justify-between items-start mb-6">

                        <div>
                            <p className="text-yellow-400 text-sm tracking-widest">
                                {committee.name}
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-2">
                                {committee.fullName}
                            </h2>
                        </div>

                        <Image
                            src={committee.logo}
                            alt={committee.name}
                            width={90}
                            height={90}
                            className="object-contain"
                        />

                    </div>

                    <div className="w-full h-[1px] bg-yellow-500/20 mb-6" />

                    <p className="text-gray-300 leading-8">
                        {committee.agenda}
                    </p>

                    <button
                        onClick={onClose}
                        className="mt-8 border border-yellow-500 px-6 py-3 rounded-xl hover:bg-yellow-500/10 transition"
                    >
                        Close
                    </button>
                </motion.div>
            </>
        )}
    </AnimatePresence>
    );


}
