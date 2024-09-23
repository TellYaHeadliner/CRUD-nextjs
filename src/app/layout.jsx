import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel="stylesheet" href="globals.css" />
        {children}
      </body>
    </html>
  );
}
