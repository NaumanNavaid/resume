import "./globals.css";

export const metadata = {
  title: "Anusha Shams - Resume",
  description: "Professional Resume of Anusha Shams",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-blue-100 flex justify-center items-center min-h-screen print:bg-white">
        {children}

        {/* Footer that will be hidden in the print/PDF */}
        <footer className="print:hidden">
          <p>This is the footer (it will NOT appear in the PDF).</p>
        </footer>
      </body>
    </html>
  );
}
