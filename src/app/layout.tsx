import Footer from "@/components/footer";
import "./globals.css";
import Nav from "@/components/nav";
import { Inter } from 'next/font/google';
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});


export default function RootLayout({
    children,
    themeClass,
}: Readonly<{
    children: React.ReactNode;
    themeClass: string;
}>) {

    return (
        <html id="top" lang="en" className={themeClass}>
            <head>
            </head>
            <body
                className={`dark:bg-black dark:text-white light:bg-white light:text-black  ${inter.className}`}
            >
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
