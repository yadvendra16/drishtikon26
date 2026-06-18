export default function SecretaryGeneral() {
    return (<section
        id="secretary-general"
        className="relative overflow-hidden py-32"
    >
        {/* Background */}
        <div
            className="absolute inset-0 bg-cover"
            style={{
                backgroundImage: "url('/founderbg.png')",
                backgroundPosition: "center 30%",
            }}
        />

        ```
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#07111F]/55" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">

            <div className="grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <div className="w-72 h-72 rounded-3xl bg-white/5 border border-yellow-500/20 flex items-center justify-center">
                        <p className="text-gray-500">
                            Founder's Photo
                        </p>
                    </div>
                </div>

                <div>

                    <h2 className="text-5xl font-bold mb-6">
                        Message from the
                        <br />
                        Founder
                    </h2>

                    <p className="text-gray-300 leading-8 mb-6">
                        Drishtikon MUN was created with a simple vision to provide a platform where young voices are heard, ideas are exchanged, and future leaders take their first steps toward meaningful change.

                        Today’s youth are not only the leaders of tomorrow but active contributors to the present. Through discussion, collaboration, and critical thinking, they have the power to shape a better future.

                        At Drishtikon MUN, we aim to foster an environment where participants can learn, share perspectives, and engage in thoughtful dialogue. More than a conference, it is an opportunity to build confidence, broaden understanding, and form lasting connections.

                        We hope this experience inspires every delegate to think beyond boundaries, speak with purpose, and carry forward the spirit of positive change.
                    </p>

                    <p className="text-yellow-400 font-semibold">
                        MANOJ DAWRANI
                    </p>

                    <p className="text-gray-400">
                        Founder
                        <br />
                        Drishtikon
                    </p>

                </div>

            </div>

        </div>
    </section>
    );


}
