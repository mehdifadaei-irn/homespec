// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

// Extend User type to include additional fields
declare module "next-auth" {
    interface Session {
        accessToken?: string;
        authenticationType?: string;
        tokenType?: string;
        expiresIn?: string;
    }

    interface User {
        accessToken: string;
        authenticationType: string;
        tokenType: string;
        expiresIn: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string;
        authenticationType?: string;
        tokenType?: string;
        expiresIn?: string;
    }
}
