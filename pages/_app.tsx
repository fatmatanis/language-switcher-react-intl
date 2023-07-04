import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { AppProvider } from "@/context/AppContext";
import "@/styles/globals.css";

const Header = dynamic(() => import("@/Layout/Header"));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </AppProvider>
  );
}
