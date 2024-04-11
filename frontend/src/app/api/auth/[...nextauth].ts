import CredentialsProvider from "next-auth/providers/credentials";

import NextAuth from "next-auth/next";
import { Autheticate } from "@/services/auth-service";
import { User } from "next-auth";


export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: 'app',
            id: 'app',
            type: 'credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const resp = await Autheticate({ username: credentials?.username ?? "", password: credentials?.password ?? "" });
                if (resp.sucess) {
                    return {
                        refreshToken: resp.data?.refresh_token,
                        accessToken: resp.data?.access_token,
                        accessTokenExpires: resp.data?.expires_in
                    } as User;
                } else { return null }
            },

        })
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            if (account?.type === 'credentials') {
                token.apiToken = user.accessToken;
                token.apiRefreshToken = user.refreshToken;
                token.expires = user.accessTokenExpires;
            }
            return token;
        },
        async session({ session, token, user }) {
            session.apiRefreshToken = token.apiRefreshToken
            session.apiToken = token.apiToken;
            session.expires = token.expires;

            return session
        }
    },
    pages: {
        signIn: "/",
    }
})