import "@/styles/globals.css";

import { HandPlatter } from "lucide-react";

import Links from "@/components/links";
import ToggleTheme from "@/components/toggle-theme";
import { Separator } from "@/components/ui/separator";
import { poppins } from "@/config/font";
import { ThemeProvider } from "@/providers/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <div className="bg-background border-b">
              <div className="flex h-14 items-center gap-4 p-4 md:px-8">
                <HandPlatter className="text-foreground size-6" />
                <Separator orientation="vertical" className="h-5" />
                <nav className="flex w-full items-center justify-between gap-4">
                  <div className="flex">
                    <Links />
                  </div>

                  <ToggleTheme />
                </nav>
              </div>
            </div>
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
