import type { Metadata } from "next";

import {Inter, IBM_Plex_Serif} from "next/font/google";
import "./globals.css";

const inter= Inter({
  subsets:['latin'],
  variable:'--font-inter'
});

const ibmPlexSerif = Inter({
  subsets:["latin"],
  weight:['400', '700'],
  variable:'--font-inter'
})

export const metadata: Metadata = {
  title: "Bankify",
  description: "Bankify is modern banking platform",
  icons:{
    icon:'/icon/logo.svg'
  }
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
