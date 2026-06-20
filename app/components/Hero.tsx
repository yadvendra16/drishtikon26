import {
    ArrowDown,
    ArrowUpRight,
    CalendarDays,
    Camera,
    MapPin,
    Sparkles,
} from "lucide-react";
import Countdown from "./Countdown";

export default function Hero() {
    return (
        <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#050d18] pt-28 pb-12 md:pt-32 lg:pb-16">
            <div
                className="absolute inset-0 scale-105 bg-cover bg-[center_38%] opacity-70 hero-ambient-image"
                style={{ backgroundImage: "url('/herobgnew.jpg')" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,13,24,0.98)_0%,rgba(5,13,24,0.88)_42%,rgba(5,13,24,0.48)_72%,rgba(5,13,24,0.76)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,13,24,0.2)_0%,rgba(5,13,24,0.05)_48%,#07111F_100%)]" />
            <div className="hero-grid absolute inset-0 opacity-30" />

            <div className="pointer-events-none absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-yellow-400/8 blur-[110px] hero-orb" />
            <div className="pointer-events-none absolute bottom-[8%] right-[12%] h-80 w-80 rounded-full bg-blue-500/8 blur-[120px] hero-orb hero-orb-delayed" />

            <div className="relative z-10 mx-auto grid w-full max-w-[1480px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(390px,0.78fr)] lg:gap-12 xl:grid-cols-[minmax(0,1.12fr)_minmax(430px,0.75fr)] xl:gap-16 xl:px-12">
                <div className="max-w-3xl text-center lg:text-left">
                    <div className="hero-reveal hero-reveal-1 mb-7 inline-flex items-center gap-3 rounded-full border border-yellow-400/25 bg-[#08172B]/65 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-yellow-300 shadow-[0_0_30px_rgba(212,175,55,0.08)] backdrop-blur-xl sm:text-xs">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-300 opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
                        </span>
                        Registrations now open
                    </div>

                    <p className="hero-reveal hero-reveal-2 mb-5 text-xs font-medium tracking-[0.36em] text-gray-300 sm:text-sm">
                        सोच <span className="text-yellow-400">•</span> संवाद{" "}
                        <span className="text-yellow-400">•</span> समाधान
                    </p>

                    <h1 className="hero-reveal hero-reveal-3 heading-font whitespace-nowrap text-[clamp(3.5rem,10vw,7.5rem)] font-semibold leading-[0.82] tracking-[-0.06em] text-white lg:text-[4rem] xl:text-[5.2rem] 2xl:text-[6.25rem]">
                        DRISHTIKON
                        <span className="ml-2 inline-block bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text pr-[0.1em] text-transparent sm:ml-3">
                            &apos;26
                        </span>
                    </h1>

                    <div className="hero-reveal hero-reveal-4 mx-auto mt-7 flex max-w-2xl items-start justify-center gap-4 lg:mx-0 lg:justify-start">
                        <span className="mt-3 hidden h-px w-10 flex-none bg-yellow-400/70 sm:block" />
                        <p className="text-base leading-7 text-gray-300 sm:text-lg">
                            Where young minds negotiate ideas, challenge
                            perspectives, and shape resolutions for a changing world.
                        </p>
                    </div>

                    <div className="hero-reveal hero-reveal-5 mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-base font-medium text-gray-200 lg:justify-start lg:text-lg">
                        <span className="flex items-center gap-2">
                            <CalendarDays
                                className="text-yellow-400"
                                size={20}
                            />
                            25–26 July 2026
                        </span>
                        <span className="flex items-center gap-2">
                            <MapPin className="text-yellow-400" size={20} />
                            GD Goenka Public School, Gwalior
                        </span>
                    </div>

                    <div className="hero-reveal hero-reveal-6 mt-12 flex flex-col justify-center gap-3 sm:flex-row lg:mt-14 lg:justify-start">
                        <a
                            href="https://docs.google.com/forms/d/1qhPThU1QJb6vgRzKbZ3paOuMLVqO-V9X4U6Q5huuJJo/edit"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-300 px-7 py-4 text-sm font-bold tracking-wide text-[#07111F] shadow-[0_12px_40px_rgba(234,179,8,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_rgba(234,179,8,0.32)]"
                        >
                            REGISTER NOW
                            <ArrowUpRight
                                size={18}
                                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </a>

                        <a
                            href="https://www.instagram.com/drishtikon.mun?igsh=MWlucTlsMTNxaDBzdw=="
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-yellow-400/50 hover:bg-yellow-400/10"
                        >
                            <Camera size={18} />
                            FOLLOW THE JOURNEY
                        </a>
                    </div>
                </div>

                <div className="hero-reveal hero-reveal-5 relative mx-auto w-full max-w-xl lg:ml-auto lg:-translate-x-5 xl:-translate-x-8">
                    <div className="absolute -inset-8 rounded-[3rem] bg-yellow-400/5 blur-3xl" />
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#08172B]/55 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:p-7">
                        <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300/80 to-transparent" />
                        <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-yellow-400/10 blur-3xl" />

                        <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
                            <div>
                                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-yellow-400">
                                    Conference transmission
                                </p>
                                <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                                    The diplomacy begins in
                                </h2>
                            </div>
                            <div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-300 sm:flex">
                                <Sparkles size={20} />
                            </div>
                        </div>

                        <Countdown />

                        <div className="relative mt-6 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-black/10 py-4 text-center">
                            <div>
                                <strong className="block text-lg text-white">7</strong>
                                <span className="text-[0.6rem] uppercase tracking-widest text-gray-400">
                                    Committees
                                </span>
                            </div>
                            <div>
                                <strong className="block text-lg text-white">2</strong>
                                <span className="text-[0.6rem] uppercase tracking-widest text-gray-400">
                                    Days
                                </span>
                            </div>
                            <div>
                                <strong className="block text-lg text-white">1</strong>
                                <span className="text-[0.6rem] uppercase tracking-widest text-gray-400">
                                    Vision
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a
                href="#committees"
                aria-label="Explore the conference"
                className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.6rem] font-medium uppercase tracking-[0.28em] text-gray-400 transition hover:text-yellow-300 xl:flex"
            >
                Explore
                <ArrowDown size={16} className="hero-scroll-arrow" />
            </a>
        </section>
    );
}
