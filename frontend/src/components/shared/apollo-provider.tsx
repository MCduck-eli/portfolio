"use client";

import { client } from "@/src/lib/apollo-client";
import { ApolloProvider } from "@apollo/client/react";
import { ReactNode } from "react";

export default function ApolloAppProvider({
    children,
}: {
    children: ReactNode;
}) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
