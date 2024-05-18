import { Lato } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

// const inter = Inter({ subsets: ["latin"] });

const lato = Lato({ subsets: ["latin"], weight: "400" });
export const metadata = {
  title: "Google search app clone",
  description: "Building google search app clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
