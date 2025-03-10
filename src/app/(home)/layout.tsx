"use client";

import Header from "@/ui/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-100">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
