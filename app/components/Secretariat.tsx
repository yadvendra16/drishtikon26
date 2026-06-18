"use client";

const members = [
   
   {
        name: "mukul",
        role: "member",
        image: "/secretariat/image1.jpg",
    },
     {
        name: "mukul",
        role: "member",
        image: "/secretariat/image1.jpg",
    },
     {
        name: "mukul",
        role: "member",
        image: "/secretariat/image1.jpg",
    },
    // {
    //     name: "mukul",
    //     role: "member",
    //     image: "/secretariat/image1.jpg",
    // },
    // {
    //     name: "AARAV GUPTA",
    //     role: "member",
    //     image: "/secretariat/image2.jpg",
    // },
    // {
    //     name: "PRIYA MEHTA",
    //     role: "USG Operations",
    //     image: "/secretariat/usg1.jpg",
    // },

];

export default function Secretariat() {
    const duplicatedMembers = [...members, ...members];

    return (
        <section className="py-32 overflow-hidden bg-[#07111F]">

            <div className="text-center mb-16">
                <p className="text-yellow-400 tracking-[0.3em] uppercase mb-4">
                    Secretariat
                </p>

                <h2 className="text-5xl font-bold">
                    Meet The Secretariat
                </h2>

                <p className="text-gray-400 mt-4">
                    The minds behind Drishtikon'26
                </p>
            </div>

            <div className="marquee-container">
                <div className="marquee-track flex flex-row">
                    {duplicatedMembers.map((member, index) => (
                        <div
                            key={index}
                            className="w-72 flex-shrink-0 rounded-3xl bg-white/5 border border-yellow-500/20 p-4 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-80 object-cover rounded-2xl"
                            />

                            <h3 className="text-xl font-semibold text-yellow-400 mt-4">
                                {member.name}
                            </h3>

                            <p className="text-gray-400">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}