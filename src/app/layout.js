import { Geist, Geist_Mono, Kanit, Nunito } from "next/font/google";
import "./globals.css";
import "./media.css"
import { LanguageProvider } from "./context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ['1000', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: "Gryphon school",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="logo2.jpg"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit} ${nunito} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
