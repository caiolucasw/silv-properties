import connectDB from "@/config/database";
import User from "@/models/User";
import { Profile, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ profile }: { profile?: Profile }) {
      if (!profile) return false;
      await connectDB();
      const userExists = await User.findOne({ email: profile.email });
      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name,
          image: profile.image,
        });
      }
      return true;
    },

    async session({ session }: { session: Session }) {
      await connectDB();
      const user = await User.findOne({ email: session?.user?.email });
      if (session?.user && user) {
        session.user.id = user?._id?.toString();
      }
      return session;
    },
  },
};
