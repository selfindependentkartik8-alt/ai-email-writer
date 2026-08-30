import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aiemailwriter.krishaiworks.com"),

  title: {
    default: "AI Email Writer | Write Professional Emails in Seconds",
    template: "%s | AI Email Writer",
  },

  description:
    "Write professional, clear and natural emails in seconds with AI. Generate emails for work, college, clients and everyday communication with multiple tones.",

  keywords: [
    "AI email writer",
    "AI email generator",
    "email writer AI",
    "professional email generator",
    "write emails with AI",
    "AI email writing tool",
    "email generator online",
    "professional email writer",
    "free AI email writer",
    "KrishAIWorks",
  ],

  authors: [
    {
      name: "KrishAIWorks",
      url: "https://krishaiworks.com",
    },
  ],

  creator: "KrishAIWorks",
  publisher: "KrishAIWorks",

  applicationName: "AI Email Writer",

  category: "technology",

  alternates: {
    canonical: "https://aiemailwriter.krishaiworks.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aiemailwriter.krishaiworks.com",
    siteName: "KrishAIWorks",
    title: "AI Email Writer | Write Professional Emails in Seconds",
    description:
      "Create professional, clear and natural emails in seconds with AI. Choose your tone and generate polished emails instantly.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "AI Email Writer - KrishAIWorks",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Email Writer | KrishAIWorks",
    description:
      "Generate professional emails in seconds with AI. Choose your tone and create polished emails instantly.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}