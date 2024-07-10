import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog programista Wojciech",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" data-theme="cupcake">
      <body className={inter.className}>
        <Header />
        <div
          className="flex flex-col border-opacity-50 justify-center items-center flex-wrap"

        >
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
