import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import SquareTransition from "@/components/SquareTransition";

 const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  Weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-jetbrains-mono",
 })

export const metadata = {
  title: "Abdul Azis Web Portfolio",
  description: "Full stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetBrains_Mono.variable}
      >
        <Header />
        <SquareTransition/>
        <PageTransition>
          
        </PageTransition>
        {children}
      </body>
    </html>
  );
}
