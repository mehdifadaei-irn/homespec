import { sessionOptions } from "@/lib/sessionOptions";
import NextAuth from "next-auth";

const handler = NextAuth(sessionOptions);

export { handler as GET, handler as POST };
