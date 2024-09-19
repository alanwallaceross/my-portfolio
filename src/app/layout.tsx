import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DarkModeToggle from "./components/DarkModeToggle";
import { ThemeProvider } from "next-themes";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alan Wallace Ross Portfolio",
  description: "Software Engineer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.className} flex flex-col justify-between`}>
        <ThemeProvider attribute="class" enableSystem={false}>
          <header className="shadow-xl bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
              <a href="/">
                {" "}
                <h1 className="text-2xl font-bold">Alan Ross</h1>
              </a>
              <nav className="px-4">
                <a href="/contact">Contact</a>
              </nav>
              <div className="w-[116px] flex flex-row justify-end">
                <DarkModeToggle />
              </div>
            </div>
          </header>
          <div className="flex-1">{children}</div>
          <footer className="bg-gray-800 text-white py-4 mt-4">
            <div className="container mx-auto flex justify-center gap-2">
              <a href="https://www.linkedin.com/in/alan-ross-37b40060/">
                <Image
                  src="/icons8-linkedin.svg"
                  alt="Linkedin Profile"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://github.com/alanwallaceross">
                <Image
                  src="/icons8-github.svg"
                  alt="Github Profile"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

