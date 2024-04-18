import CredentialsProvider from "next-auth/providers/credentials";

import NextAuth from "next-auth/next";
import { Autheticate } from "@/services/auth-service";
import { AuthOptions, User } from "next-auth";


export const authOptions: AuthOptions = {
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
                    const r = {
                        refreshToken: resp.data?.refresh_token,
                        accessToken: resp.data?.access_token,
                        accessTokenExpires: resp.data?.expires_in
                    } as User;
                    return r;
                } else { return null }
            },

        })
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            
            if (user) {

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
        },
        async signIn({ user, account, profile, email, credentials }) {
            return true
        },
    },
    pages: {
        signIn: "/auth",
        error: "/erro"
    },
    secret:'KKKK'
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }