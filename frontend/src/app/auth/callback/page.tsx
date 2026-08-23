"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@apollo/client/react";
import { SOCIAL_LOGIN_MUTATION } from "@/src/graphql/auth";

interface SocialLoginResponse {
    socialLogin: {
        accessToken: string;
        user: {
            id: string;
            name: string;
            email: string;
            avatar?: string;
        };
    };
}

function CallbackContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [socialLogin] = useMutation<SocialLoginResponse>(
        SOCIAL_LOGIN_MUTATION,
    );
    const [status, setStatus] = useState("Verifying authorization...");

    useEffect(() => {
        const processOAuth = async () => {
            const hash = window.location.hash;
            let token = "";
            let hashParams: URLSearchParams | null = null;

            if (hash) {
                hashParams = new URLSearchParams(hash.substring(1));
                token = hashParams.get("access_token") || "";
            }

            const state =
                hashParams?.get("state") ||
                searchParams.get("state") ||
                searchParams.get("provider") ||
                "google";
            const provider = state;

            if (!token) {
                token = searchParams.get("code") || "";
            }

            if (!token) {
                setStatus("Error: Token not found.");
                setTimeout(() => router.push("/auth"), 2000);
                return;
            }

            try {
                let email = "";
                let name = "";
                let avatar = "";
                let providerId = "";

                if (provider === "google") {
                    const res = await fetch(
                        "https://www.googleapis.com/oauth2/v3/userinfo",
                        {
                            headers: { Authorization: `Bearer ${token}` },
                        },
                    );
                    const data = await res.json();
                    email = data.email;
                    name = data.name;
                    avatar = data.picture;
                    providerId = data.sub;
                } else if (provider === "github") {
                    const res = await fetch("/api/auth/github", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ code: token }),
                    });
                    const data = await res.json();
                    if (!res.ok) {
                        throw new Error(
                            data.error || "GitHub authentication failed",
                        );
                    }
                    email = data.email;
                    name = data.name;
                    avatar = data.avatar;
                    providerId = data.providerId;
                }

                if (email) {
                    const { data } = await socialLogin({
                        variables: {
                            input: {
                                email,
                                name,
                                avatar,
                                provider,
                                providerId,
                            },
                        },
                    });

                    if (data?.socialLogin) {
                        const jwtToken = data.socialLogin.accessToken;
                        localStorage.setItem("token", jwtToken);
                        localStorage.setItem(
                            "user",
                            JSON.stringify(data.socialLogin.user),
                        );
                        document.cookie = `token=${jwtToken}; path=/; max-age=604800; SameSite=Lax`;
                        sessionStorage.removeItem("welcome_shown");
                        window.dispatchEvent(new Event("auth-change"));
                        router.push("/");
                        router.refresh();
                    }
                }
            } catch (err: any) {
                setStatus(err.message || "Authentication error occurred");
                setTimeout(() => router.push("/auth"), 2500);
            }
        };

        processOAuth();
    }, [router, searchParams, socialLogin]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#070510] text-white">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent mb-4" />
            <p className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                {status}
            </p>
        </div>
    );
}

export default function AuthCallbackPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#070510]" />}>
            <CallbackContent />
        </Suspense>
    );
}
