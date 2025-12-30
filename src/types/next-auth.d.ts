import { UserResponse } from "@/interfaces";

declare module "next-auth" {
  interface Session {
    user: UserResponse;
    token: string; // ✅ أضفنا token هنا
  }

  interface User {
    user: UserResponse;
    token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: UserResponse;
    token: string;
  }
}
