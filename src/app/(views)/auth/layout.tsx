import { AuthLayoutWrapper } from "@/presentation-ui/components/auth/authLayout";
import "@/app/(views)/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
}
