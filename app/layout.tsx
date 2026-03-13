import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import { ToastProvider } from './components/toast/toast'
import CookieBanner from './components/cookie-banner/cookie-banner'

const roboto = Roboto({
    subsets: ['latin', 'cyrillic'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-roboto',
});

const cygre = localFont({
    src: [
        { path: './fonts/cyrge-test/Cygre-Thin.ttf', weight: '100', style: 'normal' },
        { path: './fonts/cyrge-test/Cygre-Light.ttf', weight: '300', style: 'normal' },
        { path: './fonts/cyrge-test/Cygre-Regular.ttf', weight: '400', style: 'normal' },
        { path: './fonts/cyrge-test/Cygre-Medium.ttf', weight: '500', style: 'normal' },
        { path: './fonts/cyrge-test/Cygre-SemiBold.ttf', weight: '600', style: 'normal' },
        { path: './fonts/cyrge-test/Cygre-Bold.ttf', weight: '700', style: 'normal' },
        { path: './fonts/cyrge-test/Cygre-ExtraBold.ttf', weight: '800', style: 'normal' },
        { path: './fonts/cyrge-test/Cygre-Black.ttf', weight: '900', style: 'normal' },
    ],
    variable: '--font-cygre',
});

export const metadata: Metadata = {
    title: "Персонта",
    description: "Разработка документации по ФЗ-152 «О персональных данных»",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body className={`${roboto.variable} ${cygre.variable}`}>
                <ToastProvider>
                    {children}
                    <CookieBanner />
                </ToastProvider>
            </body>
        </html>
    );
}
