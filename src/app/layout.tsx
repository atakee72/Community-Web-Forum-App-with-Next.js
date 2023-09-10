import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kiez-Gesichterbuch",
  description: "A Community Web Forum for the neighbourhood",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="max-w-7xl mx-auto p-4">
            <Navbar />
            <div className="mt-8">{children}</div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
