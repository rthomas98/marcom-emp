import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "./components/headers/main";
import MainFooter from "./components/footers/main";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Empuls3",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
