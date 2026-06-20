"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-07-25T09:00:00+05:30").getTime();

const getTimeLeft = () => {
    const difference = Math.max(0, TARGET_DATE - Date.now());

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
};

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <div
            className="relative mt-6 grid grid-cols-4 gap-2 sm:gap-3"
            aria-label="Countdown to Drishtikon 2026"
        >
            {Object.entries(timeLeft).map(([label, value]) => (
                <div
                    key={label}
                    className="group rounded-2xl border border-white/10 bg-white/[0.045] px-1 py-4 text-center transition duration-300 hover:border-yellow-400/25 hover:bg-yellow-400/[0.06] sm:px-3 sm:py-5"
                >
                    <div className="font-mono text-2xl font-semibold tabular-nums text-white sm:text-3xl">
                        {String(value).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-[0.52rem] font-medium uppercase tracking-[0.14em] text-gray-400 sm:text-[0.6rem] sm:tracking-[0.2em]">
                        {label}
                    </div>
                </div>
            ))}
        </div>
    );
}
