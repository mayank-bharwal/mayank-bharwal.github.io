import "@styles/globals.css";
import { IBM_Plex_Mono, Poppins } from "next/font/google";
import GoogleAnalytics from '@/components/GoogleAnalytics';
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
  title: "Mayank Bharwal - Portfolio",
  description: "Computer Science student at University of Toronto specializing in AI and Systems",
  icons: {
    icon: '/favicon.ico', // Fixed path - remove 'app/'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibm_plex_mono.className}>
        <GoogleAnalytics /> {/* Moved inside body */}
        <div id="root">
          <AIAgentProvider>
            {children as any}
          </AIAgentProvider>
        </div>
      </body>
    </html>
  );
}