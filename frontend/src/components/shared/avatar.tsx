"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface AvatarProps {
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
}

export default function Avatar({ mouseX, mouseY }: AvatarProps) {
    const rotateX = useTransform(mouseY, [-400, 400], [20, -20]);
    const rotateY = useTransform(mouseX, [-600, 600], [-20, 20]);

    return (
        <div
            className="relative flex justify-center items-center select-none"
            style={{ perspective: 1000 }}
        >
            <div className="absolute w-[30rem] h-[30rem] rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

            <motion.img
                src="/avatar.png"
                alt="Halikov Avatar"
                className="w-96 h-96 md:w-md md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-contain filter drop-shadow-[0_10px_25px_rgba(255,255,255,0.08)]"
                style={{ rotateX, rotateY, z: 100 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
            />
        </div>
    );
}
