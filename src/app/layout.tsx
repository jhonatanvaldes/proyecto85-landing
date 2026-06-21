import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proyecto 85 | Evaluación de Longevidad",
  description:
    "Evaluación médica preventiva de longevidad del Dr. Jhonatan Valdés con interpretación integral, 7 pilares y reporte personalizado.",
  openGraph: {
    title: "Proyecto 85 | Evaluación de Longevidad",
    description: "Llegar bien es el verdadero objetivo.",
    type: "website",
    locale: "es_MX"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
