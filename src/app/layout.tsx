import "./globals.css";

export const metadata = {
  title: "Noticias Neutrales",
  description: "Noticias objetivas y verificadas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
