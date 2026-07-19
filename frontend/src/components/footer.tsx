"use client";

export default function Footer() {
    return (
        <footer
            className="w-full bg-black text-white px-6 md:px-16 pt-16 pb-8 relative z-40 select-none "
            style={{ borderRadius: "100px 100px 0 0" }}
        >
            <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 border-b border-zinc-800 pb-10">
                <div>
                    <h2
                        style={{
                            WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.8)",
                            color: "transparent",
                        }}
                        className="text-5xl md:text-7xl font-sans font-[1000] tracking-tighter uppercase leading-none"
                    >
                        HALIKOV
                    </h2>
                    <h2
                        style={{
                            WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.8)",
                            color: "transparent",
                        }}
                        className="text-5xl md:text-7xl font-sans font-[1000] tracking-tighter uppercase leading-none mt-2"
                    >
                        DESIGN
                    </h2>
                </div>

                <div className="flex gap-16 md:gap-32 flex-wrap">
                    <div className="flex flex-col gap-4">
                        <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                            SOCIAL
                        </span>
                        <div className="flex flex-col gap-2 text-sm text-zinc-300 font-medium">
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-200"
                            >
                                Instagram
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-200"
                            >
                                Facebook
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-200"
                            >
                                Artstation
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-200"
                            >
                                Deviantart
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                            CONTACT
                        </span>
                        <div className="flex flex-col gap-2 text-sm text-zinc-300 font-medium max-w-xs">
                            <a
                                href="mailto:halikov.dev@gmail.com"
                                className="hover:text-white transition-colors duration-200"
                            >
                                halikov.dev@gmail.com
                            </a>
                            <a
                                href="tel:+15551234567"
                                className="hover:text-white transition-colors duration-200"
                            >
                                +1 (555) 123-4567
                            </a>
                            <p className="text-zinc-400 leading-relaxed mt-1">
                                123 Creative Lane, Suite 45 <br /> Design City,
                                CA 90210
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl w-full mx-auto mt-8 grid grid-cols-4 md:grid-cols-8 gap-4 items-center justify-items-center opacity-90">
                <svg
                    viewBox="0 0 100 100"
                    className="w-full max-w-[75px] h-auto fill-[#8B5CF6]"
                >
                    <path d="M50 0 C75 25, 75 25, 100 50 C75 75, 75 75, 50 100 C25 75, 25 75, 0 50 C25 25, 25 25, 50 0 Z" />
                    <circle cx="50" cy="50" r="12" className="fill-black" />
                </svg>

                <svg
                    viewBox="0 0 100 100"
                    className="w-full max-w-[75px] h-auto fill-[#A3E635]"
                >
                    <circle cx="25" cy="25" r="20" />
                    <circle cx="75" cy="25" r="20" />
                    <circle cx="25" cy="75" r="20" />
                    <circle cx="75" cy="75" r="20" />
                </svg>

                <svg
                    viewBox="0 0 100 100"
                    className="w-full max-w-[75px] h-auto fill-[#E2E8F0]"
                >
                    <path d="M50 0 A 50 50 0 0 1 100 50 L 100 100 A 50 50 0 0 1 50 50 Z" />
                </svg>

                <svg
                    viewBox="0 0 100 100"
                    className="w-full max-w-[75px] h-auto fill-[#8B5CF6]"
                >
                    <circle cx="50" cy="50" r="45" />
                </svg>

                <svg
                    viewBox="0 0 100 100"
                    className="w-full max-w-[75px] h-auto fill-[#E2E8F0]"
                >
                    <path d="M0 0 L60 0 L100 40 L40 100 L0 100 Z" />
                </svg>

                <svg
                    viewBox="0 0 100 100"
                    className="w-full max-w-[75px] h-auto fill-[#F59E0B]"
                >
                    <path d="M0 0 A 50 50 0 0 1 50 100 A 50 50 0 0 1 100 0 Z" />
                </svg>

                <svg
                    viewBox="0 0 100 100"
                    className="w-full max-w-[75px] h-auto fill-[#E2E8F0]"
                >
                    <path d="M50 0 L100 45 L70 45 L70 100 L30 100 L30 45 L0 45 Z" />
                </svg>

                <svg
                    viewBox="0 0 100 100"
                    className="w-full max-w-[75px] h-auto stroke-[#EC4899] stroke-[14] fill-none"
                >
                    <circle cx="50" cy="50" r="40" />
                </svg>
            </div>

            <div className="max-w-7xl w-full mx-auto text-center mt-8 text-xs text-zinc-600 font-medium tracking-wider">
                &copy; {new Date().getFullYear()} HALIKOV. ALL RIGHTS RESERVED.
            </div>
        </footer>
    );
}
