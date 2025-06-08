import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useAuthStore } from "@/stores/authStatus";

export default function App({ Component, pageProps }: AppProps) {
  const authStore = useAuthStore();
  useEffect(() => {
    authStore.fetchSession();
  }, []);

  return <Component {...pageProps} />;
}
