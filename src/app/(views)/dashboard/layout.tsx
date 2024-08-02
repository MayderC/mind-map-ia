import "@/app/(views)/globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { fontSans } from "@/presentation-ui/config/fonts";
import clsx from "clsx";
import { Layout } from "@/presentation-ui/components/layout/layout";

export const metadata: Metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main className={clsx("font-sans antialiased", fontSans.className)}>
        <Providers>
          <Layout>
            {children}
          </Layout>
        </Providers>
      </main>
  )
}