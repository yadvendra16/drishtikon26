import Countdown from "./Countdown";

export default function Hero() {
    return (<section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 md:pt-0">

        ```
        {/* Background */}
        <div
            className="absolute inset-0 bg-cover bg-[center_40%]"
            style={{
                backgroundImage: "url('/herobgnew.jpg')",
            }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#07111F]/50" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-10 md:mt-12">

            <p className="text-yellow-400 tracking-[0.3em] mt-8 md:mt-0 mb-8">
                सोच • संवाद • समाधान
            </p>
            <h1 className="text-4xl md:text-[4rem] font-bold text-yellow-400 mb-4">
                DRISHTIKON'26
            </h1>

            {/* <h2 className="text-lg md:text-3xl font-medium text-gray-200 mb-6">
                सोच से संवाद
                <br />
                युवा से बदलाव।
            </h2> */}

            <p className="text-gray-300 text-lg md:text-xl mb-2">
                Model United Nations Conference
            </p>

            <p className="text-gray-300 text-lg md:text-xl mb-8">
                25–26 July • GD Goenka Public School, Gwalior
            </p>

            <div className="flex flex-col items-center gap-4 mb-10">

                <a
                    href="https://docs.google.com/forms/d/1qhPThU1QJb6vgRzKbZ3paOuMLVqO-V9X4U6Q5huuJJo/edit"
                    target="_blank"
                    className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold transition"
                >
                    Register Now
                </a>

                <a
                    href="https://www.instagram.com/drishtikon.mun?igsh=MWlucTlsMTNxaDBzdw=="
                    target="_blank"
                    className="border border-yellow-500 px-8 py-4 rounded-xl hover:bg-yellow-500/10 transition"
                >
                    Instagram
                </a>

            </div>

            <p
                className="text-yellow-400 tracking-[0.2em] uppercase text-lg md:text-xl font-semibold mb-0">
                COUNTDOWN TO DRISHTIKON'26
            </p>



            <Countdown />


        </div>
    </section>
    );


}
