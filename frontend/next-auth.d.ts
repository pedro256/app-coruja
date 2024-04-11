import "next-auth";
import { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    apiToken?: string
    apiRefreshToken?: string
    expires: number;
  }
}
declare module "next-auth" {
  interface User {
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
  }

  interface Session extends DefaultSession {
    //user: User;
    apiToken?: string
    apiRefreshToken?: string
    expires: number;
    error: string;
  }
}
