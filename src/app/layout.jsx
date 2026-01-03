import GoToTop from "../components/GoToTop";
import "./globals.css";
import MusicBackground from "../components/MusicBackground";
import Sidebar from "../components/Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});
// Metadata
export const metadata = {
  title: "Hamna Liaquat",
  description: "Full-Stack Developer | Creative Coder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-black antialiased relative`}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Background Music + Aurora */}
        <MusicBackground />
        {/* Go to top btn */}
        <GoToTop />

        {/* Scrollable Main Content */}
        <main className="relative z-10 flex-1 overflow-y-auto">
          <div className="mx-auto max-w-5xl px-6 ">{children}</div>
        </main>

        {/* Bottom Gradient */}
        <div
          className="fixed bottom-0 left-0 w-full h-40 pointer-events-none z-20
                        bg-gradient-to-t from-black/70 via-black/40 to-transparent"
        />
      </body>
    </html>
  );
}
