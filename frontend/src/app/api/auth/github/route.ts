import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { code } = await req.json();
        if (!code) {
            return NextResponse.json({ error: "Code not provided" }, { status: 400 });
        }

        const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || "";
        const clientSecret = process.env.GITHUB_CLIENT_SECRET || process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET || "";

        if (!clientId || !clientSecret) {
            return NextResponse.json(
                { error: "GITHUB_CLIENT_SECRET frontend/.env faylida ko'rsatilmagan" },
                { status: 400 },
            );
        }

        const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                client_id: clientId,
                client_secret: clientSecret,
                code,
            }),
        });

        const tokenData = await tokenRes.json();
        const accessToken = tokenData.access_token;

        if (!accessToken) {
            return NextResponse.json(
                { error: tokenData.error_description || "GitHub token exchange failed" },
                { status: 400 },
            );
        }

        const userRes = await fetch("https://api.github.com/user", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "User-Agent": "Portfolio-App",
            },
        });
        const userData = await userRes.json();

        let email = userData.email;
        if (!email) {
            try {
                const emailsRes = await fetch("https://api.github.com/user/emails", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "User-Agent": "Portfolio-App",
                    },
                });
                const emailsData = await emailsRes.json();
                if (Array.isArray(emailsData)) {
                    const primaryEmail = emailsData.find((e: any) => e.primary) || emailsData[0];
                    email = primaryEmail?.email;
                }
            } catch {}
        }

        return NextResponse.json({
            email: email || `${userData.login}@github.com`,
            name: userData.name || userData.login,
            avatar: userData.avatar_url,
            providerId: String(userData.id),
        });
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message },
            { status: 500 },
        );
    }
}
