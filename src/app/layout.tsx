import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Chatbot from "@/components/Chatbot/Chatbot";

export const metadata: Metadata = {
  metadataBase: new URL("https://forge-fitness-gym-seven.vercel.app"),
  title: "Forge Fitness | Premium Gym & Training",
  description:
    "Forge Fitness is a premium gym offering elite weight training, cardio, and personal training programs. Transform your body and mind with industry-leading coaches.",
  keywords: ["gym", "fitness", "personal training", "weight training", "premium gym"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
