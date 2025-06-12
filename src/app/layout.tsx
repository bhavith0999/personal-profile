import {Inter} from "next/font/google";
import type { Metadata } from "next";
import Header from "../components/Header";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata ={
  title:"my profile",
  description:"my personal profile which i built",
}
export default function RootLayout({
  children,
}:{
  children:React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <Header />
        {children}
      </body>
  </html>
  );
}