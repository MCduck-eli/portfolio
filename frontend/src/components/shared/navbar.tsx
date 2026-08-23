"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { LogOut } from "lucide-react";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [user, setUser] = useState<{ name?: string } | null>(null);

    useEffect(() => {
        const checkUser = () => {
            const userStr = localStorage.getItem("user");
            if (userStr) {
                try {
                    setUser(JSON.parse(userStr));
                } catch (e) {
                    setUser(null);
                }
            } else {
                setUser(null);
            }
        };

        checkUser();
        window.addEventListener("storage", checkUser);
        window.addEventListener("auth-change", checkUser);
        return () => {
            window.removeEventListener("storage", checkUser);
            window.removeEventListener("auth-change", checkUser);
        };
    }, [pathname]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        sessionStorage.removeItem("welcome_shown");
        document.cookie = "token=; path=/; max-age=0";
        setUser(null);
        window.dispatchEvent(new Event("auth-change"));
        router.push("/auth");
        router.refresh();
    };

    return (
        <nav className="w-full bg-white border-b border-gray-100 px-4 py-2 fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center h-4">
                <div className="w-16" />

                <Link
                    href="/"
                    className="text-gray-900 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
                >
                    Halikov.Dev
                </Link>

                <div className="w-16 flex justify-end">
                    {user && (
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-1 rounded border border-red-500 bg-transparent px-2 py-0.5 text-xs font-medium text-red-600 transition hover:bg-red-50 hover:border-red-600"
                        >
                            <LogOut className="h-3 w-3 text-red-500" />
                            <span>Logout</span>
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}
