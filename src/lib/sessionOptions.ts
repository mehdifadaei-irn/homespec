import { NextAuthOptions } from "next-auth";
import { authenticate } from "@/features/auth/services/auth.service";
import CredentialsProvider from "next-auth/providers/credentials";

export const sessionOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        phone_number: { label: "Phone Number", type: "text" },
        first_name: { label: "First Name", type: "text" },
        last_name: { label: "Last Name", type: "text" },
      },
      async authorize(credentials: any) {
        try {
          const data = await authenticate({
            ...(credentials.phone_number
              ? { phone_number: credentials.phone_number }
              : { email: credentials.email }),
            last_name: credentials.last_name,
            first_name: credentials.first_name,
          });

          if (data?.parameters?.data.access_token) {
            return {
              id: credentials.email || credentials.phone_number,
              accessToken: data.parameters.data.access_token,
              authenticationType: data.parameters.data.authentication_type,
              tokenType: data.parameters.data.token_type,
              expiresIn: data.parameters.data.expires_in,
            };
          }

          throw new Error(
            "Authentication failed, please check your credentials."
          );
        } catch (error) {
          console.error("Authorization error:", error);
          throw new Error(
            error.message || "An error occurred during authentication."
          );
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.authenticationType = user.authenticationType;
        token.tokenType = user.tokenType;
        token.expiresIn = user.expiresIn;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.authenticationType = token.authenticationType;
      session.tokenType = token.tokenType;
      session.expiresIn = token.expiresIn;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
};
