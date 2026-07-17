import type { Metadata } from "next";
import { Geist, Geist_Mono, Black_Ops_One } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
const blackOps = Black_Ops_One({
    weight: "400",
    variable: "--font-portfolio",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Halikov.Dev | Portfolio",
    description: "Full-Stack Web Developer Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} ${blackOps.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col bg-black text-white">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
