import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <div className="w-[75px] h-[75px] rounded-full fixed bottom-5 right-5 animate-ping bg-green-300 z-50"></div>
      <a href="https://wa.me/5561998746331?text=Olá, Pedro%21" target="_blank">
        <img
          src="/whatsapp.png"
          alt="Whatsapp logo"
          width={75}
          height={75}
          className="fixed bottom-5 right-5 cursor-pointer hover:scale-110 transition-all z-50"
        />
      </a>
    </>
  )
}

