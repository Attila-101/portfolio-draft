import { Bitter } from "next/font/google";

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
  return <section>{children}</section>;
}
