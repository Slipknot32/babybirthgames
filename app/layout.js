import "./globals.css";

export const metadata = {
  title: "guess my name",
  description: "Send games for your baby shower",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/biberon.png',
        href: '/images/biberon.png',
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body >{children}</body>
    </html>
  );
}
