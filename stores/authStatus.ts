import { createStore } from "zustand/vanilla";
import { useStore } from "zustand";

export type User = {
  name: string;
  email: string;
  image: string;
};

export type AuthState = {
  session: User | null;
  expires: string | null;
};

export type AuthActions = {
  fetchSession: () => Promise<void>;
};

export type AuthStore = AuthState & AuthActions;

export const authStore = createStore<AuthStore>((set) => ({
  session: null,
  expires: null,

  fetchSession: async () => {
    try {
      const sessionRes = await fetch("/api/auth/get-status", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("sessionRes", sessionRes);
      const sessionData = await sessionRes.json();
      console.log("sessionData", sessionData);
      set((state: AuthState) => ({
        session: sessionData.session === null ? null : sessionData.session.user,
        expires:
          sessionData.session === null ? null : sessionData.session.expires,
      }));
    } catch (error) {
      console.error("Failed to fetch session:", error);
      set((state) => ({ session: null, expires: null }));
    }
  },
}));

export const useAuthStore = () => useStore(authStore);
