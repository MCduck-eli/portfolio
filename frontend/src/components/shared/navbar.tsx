import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full bg-white border-b border-gray-100 px-4 py-2 fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-center items-center h-4">
                <Link
                    href="/"
                    className="text-gray-900 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
                >
                    Halikov.Dev
                </Link>
            </div>
        </nav>
    );
}
