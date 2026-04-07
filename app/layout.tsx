import type { Metadata, Viewport } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Apoorv | Portfolio",
  description: "AI Engineer. cs @ gl bajaj · i build complete products end-to-end.",
  metadataBase: new URL("https://apoorv.is-a.dev"),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Apoorv | Portfolio",
    description: "AI Engineer. · i obsess over details most people skip.",
    url: "https://apoorv.is-a.dev",
    images: [{ url: "/avatar.png", width: 1200, height: 630, alt: "Apoorv — AI Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apoorv | Portfolio",
    description: "AI Engineer. · i obsess over details most people skip.",
    images: ["/avatar.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090F" },
    { media: "(prefers-color-scheme: light)", color: "#CCCAD8" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}