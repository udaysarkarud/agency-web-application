import { Inter } from "next/font/google";
import "./globals.css";

export async function generateMetadata() {
  const res = await fetch("https://agency.teamrabbil.com/api/SiteMeta/home");
  const data = await res.json();
  return {
    title: data[0]["title"],
    description: data[0]["description"],
    keywords: data[0]["keywords"],
    openGraph: {
      images: data[0]["image"],
    },
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
