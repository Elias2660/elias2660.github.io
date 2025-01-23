import Footer from "@/components/footer";
import "./globals.css";
import Nav from "@/components/nav";
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Elias Xu",
    description: "Elias' Personal Website! Welcome :3",
};


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
                <link
                    rel="icon"
                    href="/icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
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
