"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
    const targetDate = new Date("2026-07-25T09:00:00");

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
            {Object.entries(timeLeft).map(([label, value]) => (
                <div
                    key={label}
                    className="bg-white/5 backdrop-blur-md border border-yellow-500/20 rounded-2xl px-6 py-4 min-w-[90px]"
                >
                    <div className="text-3xl font-bold">{value}</div>
                    <div className="text-xs uppercase text-gray-400">
                        {label}
                    </div>
                </div>
            ))}
        </div>
    );
}