import type { Metadata } from "next";
import { Geist, Geist_Mono, Black_Ops_One } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/navbar";
import ApolloAppProvider from "../components/shared/apollo-provider";

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
    title: "Portfolio Halikov — Full Stack Developer",
    description:
        "Halikov — Web dasturchi va dasturiy ta'minot muhandisi. Portfolioda loyihalar, tajriba va bog'lanish uchun kontaktlar keltirilgan.",
    keywords: [
        "portfolio-halikov",
        "portfolio halikov",
        "halikov portfolio",
        "halikov developer",
        "halikov",
    ],
    authors: [{ name: "Halikov" }],
    creator: "Halikov",
    openGraph: {
        title: "Portfolio Halikov — Full Stack Developer",
        description:
            "Halikov'ning shaxsiy portfoliosi va loyihalari bilan tanishing.",
        type: "website",
        locale: "uz_UZ",
    },
    verification: {
        google: "OuRjXr0lK6lZxY7k-Z7QzgPqJxuFh6J58h81AhO4MXs",
    },
    icons: {
        icon: "/logo.png",
    },
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
                <ApolloAppProvider>
                    <Navbar />
                    {children}
                </ApolloAppProvider>
            </body>
        </html>
    );
}
