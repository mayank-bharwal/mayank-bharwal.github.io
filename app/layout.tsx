import "@styles/globals.css";
import { IBM_Plex_Mono, Poppins } from "next/font/google";
import Script from 'next/script';
import { AIAgentProvider } from 'next-ai-optimizer/react';

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["100", "200", "400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Mayank's Portfolio",
  description: "Computer Science student at University of Toronto specializing in AI and Systems",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-3TFTY2JYGJ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3TFTY2JYGJ');
            `,
          }}
        />
      </head>
      <body className={ibm_plex_mono.className}>
        <div id="root">
          <AIAgentProvider>
            {children as any}
          </AIAgentProvider>
        </div>
      </body>
    </html>
  );
}