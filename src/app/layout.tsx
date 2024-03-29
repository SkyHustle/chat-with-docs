import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Clerk } from "@clerk/nextjs/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Chat With Docs",
    description: "Chat with your documents using ai",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en" className="">
                <body className={cn("min-h-screen font-sans antialiased grainy", inter.className)}>
                    <Navbar />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
