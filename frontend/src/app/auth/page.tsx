"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useMutation } from "@apollo/client/react";
import { LOGIN_MUTATION, REGISTER_MUTATION } from "@/src/graphql/auth";

interface AuthPayloadData {
    accessToken: string;
    user: {
        id: string;
        name: string;
        email: string;
    };
}

interface LoginResponse {
    login: AuthPayloadData;
}

interface RegisterResponse {
    register: AuthPayloadData;
}

export default function AuthPage() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [registerUser, { loading: regLoading }] =
        useMutation<RegisterResponse>(REGISTER_MUTATION);
    const [loginUser, { loading: loginLoading }] =
        useMutation<LoginResponse>(LOGIN_MUTATION);

    const handleGoogleLogin = () => {
        const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";
        const redirectUri = `${window.location.origin}/auth/callback`;
        const scope = "email profile openid";
        const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(
            redirectUri,
        )}&response_type=token&scope=${encodeURIComponent(scope)}&state=google`;
        window.location.href = url;
    };

    const handleGithubLogin = () => {
        const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || "";
        const redirectUri = `${window.location.origin}/auth/callback`;
        const scope = "user:email read:user";
        const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
            redirectUri,
        )}&scope=${encodeURIComponent(scope)}&state=github`;
        window.location.href = url;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            if (isLogin) {
                const response = await loginUser({
                    variables: { input: { email, password } },
                });
                if (response.data?.login) {
                    const token = response.data.login.accessToken;
                    const user = response.data.login.user;

                    localStorage.setItem("token", token);
                    localStorage.setItem("user", JSON.stringify(user));
                    document.cookie = `token=${token}; path=/; max-age=604800; SameSite=Lax`;
                    sessionStorage.removeItem("welcome_shown");
                    window.dispatchEvent(new Event("auth-change"));

                    router.push("/");
                    router.refresh();
                }
            } else {
                const response = await registerUser({
                    variables: { input: { name, email, password } },
                });
                if (response.data?.register) {
                    const token = response.data.register.accessToken;
                    const user = response.data.register.user;

                    localStorage.setItem("token", token);
                    localStorage.setItem("user", JSON.stringify(user));
                    document.cookie = `token=${token}; path=/; max-age=604800; SameSite=Lax`;
                    sessionStorage.removeItem("welcome_shown");
                    window.dispatchEvent(new Event("auth-change"));

                    router.push("/");
                    router.refresh();
                }
            }
        } catch (err: any) {
            setError(err.message || "Xatolik yuz berdi");
        }
    };

    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#070510] p-4 text-white">
            <div className="absolute -left-20 -top-20 h-[450px] w-[450px] rounded-full bg-[#4f39f6]/20 blur-[130px] pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 h-[450px] w-[450px] rounded-full bg-[#7c3aed]/20 blur-[130px] pointer-events-none" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#2e1065]/30 blur-[140px] pointer-events-none" />

            <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-10 top-16 hidden lg:block w-40 h-28 rounded-xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md shadow-xl shadow-indigo-500/10"
            >
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <Image
                        src="/love.png"
                        alt="Project snapshot 1"
                        fill
                        className="object-cover opacity-75"
                    />
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                }}
                className="pointer-events-none absolute right-10 top-20 hidden lg:block w-44 h-32 rounded-xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md shadow-xl shadow-indigo-500/10"
            >
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <Image
                        src="/blueCub.png"
                        alt="Project snapshot 2"
                        fill
                        className="object-cover opacity-75"
                    />
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, 2, 0] }}
                transition={{
                    duration: 6.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="pointer-events-none absolute bottom-16 left-12 hidden lg:block w-44 h-30 rounded-xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md shadow-xl shadow-indigo-500/10"
            >
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <Image
                        src="/flower.png"
                        alt="Project snapshot 3"
                        fill
                        className="object-cover opacity-75"
                    />
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, -2, 0] }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                }}
                className="pointer-events-none absolute bottom-14 right-12 hidden lg:block w-40 h-28 rounded-xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md shadow-xl shadow-indigo-500/10"
            >
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                    <Image
                        src="/abstract-flower.png"
                        alt="Project snapshot 4"
                        fill
                        className="object-cover opacity-75"
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 w-full max-w-[360px] rounded-2xl border border-white/10 bg-[#120f24]/80 p-6 shadow-[0_0_40px_rgba(79,57,246,0.15)] backdrop-blur-2xl"
            >
                <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500 text-sm font-bold text-white shadow-md shadow-indigo-500/30">
                        H
                    </div>
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-white">
                    {isLogin ? "Sign in to Halikov" : "Create Account"}
                </h1>
                <p className="mt-1 text-xs text-zinc-400">
                    {isLogin
                        ? "Enter your credentials to access your workspace."
                        : "Join and explore the fullstack ecosystem."}
                </p>

                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 rounded-lg border border-red-500/20 bg-red-500/10 p-2.5 text-xs font-medium text-red-400"
                    >
                        {error}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                    {!isLogin && (
                        <div>
                            <label className="mb-1 block text-[11px] font-medium text-zinc-300">
                                Name
                            </label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Eldorjon"
                                className="w-full rounded-lg border border-white/10 bg-[#1a1633]/60 px-3 py-2 text-xs text-white placeholder-zinc-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                            />
                        </div>
                    )}

                    <div>
                        <label className="mb-1 block text-[11px] font-medium text-zinc-300">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@work-email.com"
                            className="w-full rounded-lg border border-white/10 bg-[#1a1633]/60 px-3 py-2 text-xs text-white placeholder-zinc-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-[11px] font-medium text-zinc-300">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full rounded-lg border border-white/10 bg-[#1a1633]/60 px-3 py-2 text-xs text-white placeholder-zinc-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={regLoading || loginLoading}
                        className="group relative mt-2 flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-amber-100 via-white to-zinc-200 py-2.5 text-xs font-bold text-zinc-900 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(255,255,255,0.45)] disabled:opacity-50"
                    >
                        <span className="relative z-10 tracking-wider">
                            {isLogin
                                ? loginLoading
                                    ? "SIGNING IN..."
                                    : "LOG IN"
                                : regLoading
                                  ? "REGISTERING..."
                                  : "REGISTER"}
                        </span>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber-300/40 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
                    </button>
                </form>

                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10" />
                    </div>
                    <div className="relative flex justify-center text-[10px] uppercase tracking-wider text-zinc-500">
                        <span className="bg-[#120f24] px-2 font-semibold">
                            OR
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-[#1a1633]/50 py-2 text-[11px] font-medium text-zinc-300 transition hover:bg-[#231d45] hover:text-white"
                    >
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24">
                            <path
                                fill="#EA4335"
                                d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                            />
                            <path
                                fill="#4285F4"
                                d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.6 14.8c-.3-.8-.4-1.8-.4-2.8s.2-2 .4-2.8L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.9z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z"
                            />
                        </svg>
                        Google
                    </button>

                    <button
                        type="button"
                        onClick={handleGithubLogin}
                        className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-[#1a1633]/50 py-2 text-[11px] font-medium text-zinc-300 transition hover:bg-[#231d45] hover:text-white"
                    >
                        <svg
                            className="h-3.5 w-3.5 fill-current"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            />
                        </svg>
                        GitHub
                    </button>
                </div>

                <div className="mt-4 text-center text-[11px] text-zinc-400">
                    {isLogin
                        ? "Don't have an account? "
                        : "Already have an account? "}
                    <button
                        type="button"
                        onClick={() => {
                            setIsLogin(!isLogin);
                            setError("");
                        }}
                        className="font-medium text-indigo-400 hover:text-indigo-300 hover:underline"
                    >
                        {isLogin ? "Sign up" : "Sign in"}
                    </button>
                </div>

                <div className="mt-5 flex justify-center gap-3 text-[10px] text-zinc-500">
                    <span className="hover:underline cursor-pointer">
                        Terms of Use
                    </span>
                    <span>|</span>
                    <span className="hover:underline cursor-pointer">
                        Privacy Policy
                    </span>
                </div>
            </motion.div>
        </div>
    );
}
