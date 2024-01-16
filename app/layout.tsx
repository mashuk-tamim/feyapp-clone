import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Feyapp-clone.com",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="box-border">
            <body className={inter.className}>
                <Navbar></Navbar>
                {children}
                <Footer></Footer>
            </body>
		</html>
	);
}
