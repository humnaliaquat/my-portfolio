import "./globals.css";
import Sidebar from "./Sidebar";

export const metadata = {
  title: "Hamna Liaquat",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`  antialiased`}>
        <Sidebar /> {children}
      </body>
    </html>
  );
}
