import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import { ToastProvider } from './components/toast/toast'

const roboto = Roboto({
    subsets: ['latin', 'cyrillic'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-roboto',
});

export const metadata: Metadata = {
    title: "Персонта",
    description: "Разработка документации по ФЗ-152 «О персональных данных»",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body className={roboto.variable}>
                <ToastProvider>
                    {children}
                </ToastProvider>
            </body>
        </html>
    );
}
