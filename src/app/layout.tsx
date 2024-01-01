import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Chat With Docs",
    description: "Chat with your documents using ai",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="">
            <body className={cn("min-h-screen font-sans antialiased", inter.className)}>
                {children}
            </body>
        </html>
    );
}
