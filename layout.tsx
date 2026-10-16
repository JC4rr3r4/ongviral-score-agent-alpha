export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>ONGVIRAL Motor</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
