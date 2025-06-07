"use client";
import { signIn } from "next-auth/react";

export default function GoogleSignInButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="bg-white border border-gray-300 text-black px-4 py-2 rounded-md hover:shadow">
      Sign in with Google
    </button>
  );
}
