import { poppins } from "@/config/font";
import { metadata as MetaData } from "@/config/meta";
import "@/styles/globals.css";

export const metadata = MetaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
