"use client";

import { useState } from "react";
import CommitteeModal from "./CommitteeModal";

const committees = [
    {
        name: "AIPPM",
        fullName: "All India Political Party Meet",
        agenda:
            "Deliberation upon the challenges posed by cross-border immigration and migration while critically evaluating the effectiveness of existing safeguards and national security mechanisms.",
    },
    {
        name: "BMS",
        fullName: "Bhartiya Mahila Sansad",
        agenda:
            "Analyzing domestic violence and dowry practices in India and assessing whether existing women-centric development frameworks adequately address structural inequities, legal safeguards, societal protections, and their implementation.",
    },
    {
        name: "ICSC",
        fullName: "International Crisis And Programme",
        agenda:
            "Could World War II have been prevented? Evaluating missed opportunities, failed diplomacy, and international complicity in the rise of fascism, and their relevance to present-day global crises.",
    },
    {
        name: "HCC",
        fullName: "Historical crisis Committee",
        agenda:
            "Deliberation on determining the fate of India in 1947.",
    },
    {
        name: "UNEP",
        fullName: "United Nation Environment Programme",
        agenda:
            "Deliberation on environmental security in the 21st century: assessing the impact of military activities and nuclear weapons expansion on global climate goals.",
    },
    {
        name: "UNHRC",
        fullName: "United Nation Human Right Council",
        agenda:
            "Deliberation on human rights violations and the protection of civilians amid escalating armed conflicts in the Middle East.",
    },
    {
        name: "IP",
        fullName: "International Press",
        agenda:
            "- PHOTOGRAPHY. \n - CARICATURE.  \n - JOURNALISM ",
    },
];

export default function Committees() {
    const [selectedCommittee, setSelectedCommittee] = useState<any>(null);
    return (
        <section
            id="committees"
            className="max-w-7xl mx-auto px-6 py-24"
        >
            <div className="text-center mb-16">
                <p className="text-yellow-400 tracking-[0.3em] uppercase mb-4">
                    Committees
                </p>

                <h2 className="text-5xl font-bold mb-4">
                    Our Committees
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto">
                    Engage in diplomacy, policy making, crisis management,
                    and global problem solving through our carefully curated
                    committees.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                {committees.map((committee) => (

                    <div
                        key={committee.name}
                        onClick={() => setSelectedCommittee(committee)}
                        className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-yellow-500/20
      bg-white/5
      backdrop-blur-md
      p-8
      min-h-[320px]
      flex
      flex-col
      cursor-pointer
      shadow-[0_0_30px_rgba(212,175,55,0.05)]
      hover:shadow-[0_0_50px_rgba(212,175,55,0.25)]
      hover:border-yellow-400
      hover:-translate-y-4
      hover:scale-[1.02]
      transition-all
      duration-500
    "
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500" />

                        ```
                        <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                            {committee.name}
                        </h3>

                        <div className="w-16 h-[2px] bg-yellow-500 mb-6" />

                        <p className="text-gray-400 text-sm">
                            Tap to view agenda →
                        </p>
                        <div className="mt-6 text-yellow-400 text-sm font-semibold">
                            View Dossier →
                        </div>
                        ```

                    </div>
                ))}

            </div>
            <CommitteeModal
                isOpen={!!selectedCommittee}
                committee={selectedCommittee}
                onClose={() => setSelectedCommittee(null)}
            />
        </section>
    );
}