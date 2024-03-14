import type { Metadata } from "next";
import "@/src/app/styles/globals.css";
import MainLayout from "@/src/app/MainLayout";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  title: "Vapapp",
  description: "Dani making da copy of vapiano",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <div className="content-wrapper">
          <MainLayout>{children}</MainLayout>
        </div>
      </body>
    </html>
  );
}
