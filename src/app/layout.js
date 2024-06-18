import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Voyage de la Lune Hacks 2024",
  description: "Voyage de la Lune Hacks. Houston, Texas. 2024. Coming soon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
