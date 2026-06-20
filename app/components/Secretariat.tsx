"use client";

import Image from "next/image";
import type { CSSProperties, MouseEvent, PointerEvent } from "react";
import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, Zap } from "lucide-react";

const members = [
    {
        name: "Coming Soon",
        role: "Member reveal coming soon",
        image: "/secretariat/image1.png",
    },
    {
        name: "Coming Soon",
        role: "Member reveal coming soon",
        image: "/secretariat/image1.png",
    },
    {
        name: "Coming Soon",
        role: "Member reveal coming soon",
        image: "/secretariat/image1.png",
    },
];

function handleCardMove(event: MouseEvent<HTMLElement>) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
}

function resetCard(event: MouseEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--rotate-x", "0deg");
    event.currentTarget.style.setProperty("--rotate-y", "0deg");
}

function MemberCard({
    member,
    index,
}: {
    member: (typeof members)[number];
    index: number;
}) {
    return (
        <article
            className="secretariat-card group relative w-[42vw] min-w-[142px] max-w-[176px] flex-none sm:w-[320px] sm:max-w-none"
            onMouseMove={handleCardMove}
            onMouseLeave={resetCard}
            style={{ "--card-index": index } as CSSProperties}
        >
            <div className="secretariat-card-glow pointer-events-none absolute inset-0 rounded-2xl sm:rounded-[2rem]" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a192c]/85 p-2 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-[2rem] sm:p-3">
                <div className="secretariat-card-sheen pointer-events-none absolute inset-0 z-20" />

                <div className="relative h-[210px] overflow-hidden rounded-xl bg-[radial-gradient(circle_at_50%_22%,rgba(250,204,21,0.18),transparent_38%),linear-gradient(145deg,#102640,#07111f)] sm:h-[400px] sm:rounded-[1.45rem]">
                    <div className="absolute inset-0 opacity-20 secretariat-card-grid" />

                    <Image
                        src={member.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 42vw, 320px"
                        className="secretariat-portrait object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07111F] via-[#07111F]/60 to-transparent" />
                </div>

                <div className="relative px-1 pb-1 pt-3 sm:px-2 sm:pb-2 sm:pt-5">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p className="mb-1 text-[0.42rem] font-semibold uppercase tracking-[0.16em] text-yellow-400 sm:text-[0.58rem] sm:tracking-[0.25em]">
                                Secretariat &apos;26
                            </p>
                            <h3 className="heading-font text-base font-semibold text-white sm:text-2xl">
                                {member.name}
                            </h3>
                            <p className="mt-1 text-[0.65rem] leading-4 text-gray-400 sm:text-sm">
                                {member.role}
                            </p>
                        </div>
                        <span className="mt-1 hidden h-10 w-10 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-400/10 text-yellow-300 transition duration-300 group-hover:rotate-45 group-hover:border-yellow-300/50 group-hover:bg-yellow-400/15 sm:flex">
                            <ArrowUpRight size={18} />
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function Secretariat() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const dragState = useRef({ active: false, startX: 0, scrollLeft: 0 });
    const isRepositioning = useRef(false);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const positionAtMiddleSet = () => {
            const middleSetStart = slider.children[members.length] as
                | HTMLElement
                | undefined;

            if (middleSetStart) {
                slider.scrollLeft = middleSetStart.offsetLeft;
            }
        };

        const frame = window.requestAnimationFrame(positionAtMiddleSet);
        window.addEventListener("resize", positionAtMiddleSet);

        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener("resize", positionAtMiddleSet);
        };
    }, []);

    const scrollCards = (direction: "left" | "right") => {
        const slider = sliderRef.current;
        const firstCard = slider?.firstElementChild as HTMLElement | null;
        const gap = slider ? parseFloat(getComputedStyle(slider).columnGap) : 0;
        const distance = (firstCard?.offsetWidth ?? 320) + gap;

        slider?.scrollBy({
            left: direction === "left" ? -distance : distance,
            behavior: "smooth",
        });
    };

    const startDrag = (event: PointerEvent<HTMLDivElement>) => {
        if (event.pointerType !== "mouse" || !sliderRef.current) return;

        dragState.current = {
            active: true,
            startX: event.clientX,
            scrollLeft: sliderRef.current.scrollLeft,
        };
        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const dragCards = (event: PointerEvent<HTMLDivElement>) => {
        if (!dragState.current.active || !sliderRef.current) return;

        sliderRef.current.scrollLeft =
            dragState.current.scrollLeft -
            (event.clientX - dragState.current.startX);
    };

    const stopDrag = (event: PointerEvent<HTMLDivElement>) => {
        if (!dragState.current.active) return;
        dragState.current.active = false;
        event.currentTarget.releasePointerCapture(event.pointerId);
    };

    const keepCarouselInfinite = () => {
        const slider = sliderRef.current;
        if (!slider || isRepositioning.current) return;

        const firstSetStart = slider.children[0] as HTMLElement | undefined;
        const middleSetStart = slider.children[members.length] as
            | HTMLElement
            | undefined;
        const finalSetStart = slider.children[members.length * 2] as
            | HTMLElement
            | undefined;

        if (!firstSetStart || !middleSetStart || !finalSetStart) return;

        const setWidth = middleSetStart.offsetLeft - firstSetStart.offsetLeft;
        const lowerBoundary = middleSetStart.offsetLeft - setWidth / 2;
        const upperBoundary = finalSetStart.offsetLeft - setWidth / 2;

        if (slider.scrollLeft < lowerBoundary) {
            isRepositioning.current = true;
            slider.scrollLeft += setWidth;
        } else if (slider.scrollLeft > upperBoundary) {
            isRepositioning.current = true;
            slider.scrollLeft -= setWidth;
        } else {
            return;
        }

        window.requestAnimationFrame(() => {
            isRepositioning.current = false;
        });
    };

    return (
        <section className="secretariat-section relative overflow-hidden bg-[#07111F] pb-24 pt-12 md:pb-32 md:pt-16">
            <div className="secretariat-noise pointer-events-none absolute inset-0 opacity-30" />
            <div className="pointer-events-none absolute left-[-10%] top-[15%] h-80 w-80 rounded-full bg-yellow-400/8 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-[5%] right-[-8%] h-96 w-96 rounded-full bg-blue-500/8 blur-[140px]" />

            <div className="pointer-events-none absolute inset-x-0 top-16 overflow-hidden opacity-[0.035]">
                <p className="secretariat-ghost-text whitespace-nowrap text-[clamp(7rem,18vw,17rem)] font-black uppercase leading-none tracking-[-0.08em] text-white">
                    DRISHTIKON MUN DRISHTIKON MUN
                </p>
            </div>

            <div className="relative z-10 mx-auto mb-14 max-w-7xl px-6 text-center md:mb-20">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.06] px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-yellow-300 backdrop-blur-xl">
                    <Zap size={13} />
                    Powered by the next generation
                </div>

                <h2 className="heading-font text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
                    Meet the minds
                    <span className="secretariat-gradient-text block">
                        behind the movement.
                    </span>
                </h2>

                <div className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-3 text-sm leading-7 text-gray-400 sm:text-base">
                    <Sparkles
                        size={18}
                        className="hidden flex-none text-yellow-400 sm:block"
                    />
                    Young voices. Bold instincts. Zero interest in doing things
                    the ordinary way.
                    <Sparkles
                        size={18}
                        className="hidden flex-none text-yellow-400 sm:block"
                    />
                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-[1200px]">
                <div
                    ref={sliderRef}
                    className="secretariat-slider flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 py-6 sm:gap-8 sm:px-12 sm:py-8"
                    onPointerDown={startDrag}
                    onPointerMove={dragCards}
                    onPointerUp={stopDrag}
                    onPointerCancel={stopDrag}
                    onScroll={keepCarouselInfinite}
                >
                    {[0, 1, 2].flatMap((group) =>
                        members.map((member, index) => (
                            <div
                                key={`${group}-${index}`}
                                className="snap-center"
                                aria-hidden={group !== 1}
                            >
                                <MemberCard member={member} index={index} />
                            </div>
                        )),
                    )}
                </div>

                <div className="mt-5 flex items-center justify-center gap-4">
                    <button
                        type="button"
                        onClick={() => scrollCards("left")}
                        aria-label="View previous Secretariat member"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-xl transition hover:-translate-x-1 hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:text-yellow-300"
                    >
                        <ArrowLeft size={20} />
                    </button>

                    <p className="text-[0.6rem] font-medium uppercase tracking-[0.24em] text-gray-500">
                        Swipe or use arrows
                    </p>

                    <button
                        type="button"
                        onClick={() => scrollCards("right")}
                        aria-label="View next Secretariat member"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-xl transition hover:translate-x-1 hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:text-yellow-300"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
