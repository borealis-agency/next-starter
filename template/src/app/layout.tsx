import "@/styles/global.css";

import { Inter } from "next/font/google";

const fontDefinition = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Borealis Next.js Starter Template",
  description: "Next.js starter template made by Borealis",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontDefinition.className + " min-h-full"}>
      <body>{children}</body>
    </html>
  );
}
