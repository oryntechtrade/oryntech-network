import "./globals.css";

export const metadata = {
  title: "Oryntech",
  description:
    "Visual trading platform for algorithmic strategies"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
