import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { ToastProvider } from './components/toast/toast'
import CookieBanner from './components/cookie-banner/cookie-banner'

const tildaSans = localFont({
    src: [
        { path: './fonts/TildaSans.07Web/TildaSans-Light/TildaSans-Light.woff2', weight: '300', style: 'normal' },
        { path: './fonts/TildaSans.07Web/TildaSans-Regular/TildaSans-Regular.woff2', weight: '400', style: 'normal' },
        { path: './fonts/TildaSans.07Web/TildaSans-Medium/TildaSans-Medium.woff2', weight: '500', style: 'normal' },
        { path: './fonts/TildaSans.07Web/TildaSans-Semibold/TildaSans-Semibold.woff2', weight: '600', style: 'normal' },
        { path: './fonts/TildaSans.07Web/TildaSans-Bold/TildaSans-Bold.woff2', weight: '700', style: 'normal' },
        { path: './fonts/TildaSans.07Web/TildaSans-ExtraBold/TildaSans-ExtraBold.woff2', weight: '800', style: 'normal' },
        { path: './fonts/TildaSans.07Web/TildaSans-Black/TildaSans-Black.woff2', weight: '900', style: 'normal' },
    ],
    variable: '--font-tilda',
});

export const metadata: Metadata = {
    title: "Персонта",
    description: "Разработка документации по ФЗ-152 «О персональных данных»",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body className={tildaSans.variable}>
                <ToastProvider>
                    {children}
                    <CookieBanner />
                </ToastProvider>
            </body>
        </html>
    );
}
