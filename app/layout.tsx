import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";


const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KABS Digital",
  description: "Grow your business with KABS, a design & development studio.",
  openGraph: {
    images: [
      {
        url: '/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'KABS Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        {children}

      </body>
    </html>
  );
}
