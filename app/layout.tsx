import Header from "@/components/header";
import "./globals.css";
import { Bitter, Inter, Khula, Nunito_Sans, Poppins } from "next/font/google";
import ActiveSectionContextProvier from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-bitter",
});

export const metadata = {
  title: "Attila | Portfolio",
  description: "Attila is a full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${bitter.className} bg-white dark:bg-gray-900 dark:text-white text-primary relative pt-28 `}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvier>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvier>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
