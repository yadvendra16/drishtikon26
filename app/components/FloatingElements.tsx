"use client";

import { motion } from "framer-motion";

export default function FloatingElements() {
    return (
        <> <motion.div
            animate={{
                y: [0, -20, 0],
                rotate: [-10, -12, -10],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="fixed top-24 left-8 opacity-20 pointer-events-none"

        >

            <div className="w-56 h-32 rounded-2xl border border-yellow-500/20 bg-[#08172B]/80 backdrop-blur-md p-4">
                <p className="text-yellow-400 text-xs">
                    DRISHTIKON'26
                </p>

                ```
                <p className="text-white text-sm mt-2">
                    AIPPM DOSSIER
                </p>
                ```

            </div>
        </motion.div>


            <motion.div
                animate={{
                    y: [0, 25, 0],
                    rotate: [8, 10, 8],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="fixed top-[45%] right-8 opacity-20 pointer-events-none"

            >

                <div className="w-56 h-32 rounded-2xl border border-yellow-500/20 bg-[#08172B]/80 backdrop-blur-md p-4">
                    <p className="text-yellow-400 text-xs">
                        UNITED NATIONS
                    </p>

                    ```
                    <p className="text-white text-sm mt-2">
                        CONFIDENTIAL BRIEFING
                    </p>
                    ```

                </div>
            </motion.div>

        </>

    );
}
