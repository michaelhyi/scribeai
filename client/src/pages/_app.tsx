import type { AppProps } from "next/app";
import "../styles/globals.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Nunito_Sans } from "next/font/google";

const Nunito = Nunito_Sans({
  weight: "500",
  subsets: ["latin"],
  style: ['normal']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={Nunito.className}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}
