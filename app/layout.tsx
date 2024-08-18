import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./components/ui";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false


export const metadata: Metadata = {
  title: "Michael Vargas Fullstack",
  description: "Desarrollador Autodidacta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto ">
      <NavBar />
        {children}
        </body>
    </html>
  );
}
