"use client";

import Image from "next/image";
import { useState } from "react";
import CommitteeModal from "./CommitteeModal";

const committees = [
    {
        name: "AIPPM",
        logo: "/aippm.png",
        fullName: "All India Political Party Meet",
        agenda:
            "Deliberation upon the challenges posed by cross-border immigration, while critically evaluating the effectiveness of existing safeguards in protecting national security.",
    },
    {
        name: "BMS",
        logo: "/bms.png",
        fullName: "Bhartiya Mahila Sansad",
        agenda:
            "Analyzing domestic violence, dowry in india and assessing whether existing women-centric development frameworks adequately address structural inequality, legal and societal safeguards, and its implementation.",
    },
    {
        name: "ICSC",
        logo: "/icsc.png",
        fullName: "International Crisis and Security Council",
        agenda:
            "Could world war II have been prevented? evaluating missed opportunities, failed diplomacy, and complicity in the rise of fascist regimes and their relevance to present-day international crises.",
    },
    {
        name: "HCC",
        logo: "/hccnew.png",
        fullName: "Historical Crisis Committee",
        agenda:
            "Deliberation on determining the fate of India in 1947.",
    },
    {
        name: "UNEP",
        logo: "/unep.png",
        fullName: "United Nations Environment Programme",
        agenda:
            "Deliberation on environmental security in the 21st century : Assessing the impact of military activities, nuclear weapons expansion on global climate goals.",
    },
    {
        name: "UNHRC",
        logo: "/unhrc.png",
        fullName: "United Nations Human Rights Council",
        agenda:
            "Deliberation on human rights violations and the protection of civilians amid escalating armed conflicts in the Middle East.",
    },
    {
        name: "IP",
        logo: "/ip.png",
        fullName: "International Press",
        agenda:
            "Photography • Caricature • Journalism",
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
                    and global problem solving through our carefully curated committees.
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
                    p-6
                    min-h-[180px]
                    flex
                    flex-col
                    items-center
                    justify-center
                    cursor-pointer
                    shadow-[0_0_30px_rgba(212,175,55,0.05)]
                    hover:shadow-[0_0_50px_rgba(212,175,55,0.25)]
                    hover:border-yellow-400
                    hover:-translate-y-2
                    transition-all
                    duration-500
                    "
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500" />

                        <Image
                            src={committee.logo}
                            alt={committee.name}
                            width={70}
                            height={70}
                            className="object-contain mb-4"
                        />

                        <h3 className="text-lg font-bold text-yellow-400 text-center">
                            {committee.name}
                        </h3>

                        <p className="text-gray-400 text-xs mt-2 text-center">
                            Tap to view agenda
                        </p>
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
