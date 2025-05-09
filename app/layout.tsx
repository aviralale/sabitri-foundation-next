import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar";
import { ThemeProvider } from "@/contexts/theme-provider";
import FooterSection from "@/components/shared/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabitri Foundation",
  description:
    "Sabitri Foundation is a global alliance of changemakers committed to empowering NGOs and underserved communities. Founded on the belief that grassroots efforts can reshape society, we provide the tools, training, and partnerships NGOs need to thrive. Our initiatives bridge the gap between local actions and global impact, ensuring no voice goes unheard.",
  icons: [
    { rel: "icon", type: "image/png", url: "/favicon.png" },

    {
      rel: "icon",

      type: "image/png",

      sizes: "32x32",

      url: "/favicon.png",
    },

    {
      rel: "icon",

      type: "image/png",

      sizes: "16x16",

      url: "/favicon.png",
    },

    {
      rel: "apple-touch-icon",

      sizes: "180x180",

      url: "/favicon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
