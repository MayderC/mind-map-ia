import { AuthLayoutWrapper } from "@/presentation-ui/components/auth/authLayout";
import "@/app/(views)/globals.css";
import { UserProvider } from "@/presentation-ui/context/userContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UserProvider>
        <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
      </UserProvider>
    </>
  )
}
