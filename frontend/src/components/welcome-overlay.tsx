"use client";

import { motion, AnimatePresence } from "framer-motion";

interface WelcomeOverlayProps {
    name: string | null;
    onComplete: () => void;
}

export default function WelcomeOverlay({
    name,
    onComplete,
}: WelcomeOverlayProps) {
    if (!name) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => {
                    setTimeout(onComplete, 2400);
                }}
                className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl"
            >
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-white/5 blur-[160px] pointer-events-none" />

                <motion.div
                    initial={{ scale: 0.85, y: 30, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.95, y: -20, opacity: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex flex-col items-center text-center px-4"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-widest text-zinc-400 uppercase"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        ACCESS GRANTED
                    </motion.div>

                    <h1 className="font-portfolio text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 drop-shadow-[0_10px_35px_rgba(255,255,255,0.15)]">
                        WELCOME, {name}
                    </h1>

                    <p className="mt-4 max-w-md text-xs md:text-sm font-medium tracking-widest uppercase text-zinc-400">
                        Entering the personal ecosystem & workspace
                    </p>

                    <div className="mt-8 flex items-center gap-1.5">
                        <span className="h-1 w-8 rounded-full bg-white/80 animate-pulse" />
                        <span className="h-1 w-2 rounded-full bg-white/30" />
                        <span className="h-1 w-2 rounded-full bg-white/30" />
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
