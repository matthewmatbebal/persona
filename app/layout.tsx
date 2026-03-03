import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { ToastProvider } from './components/toast/toast'

const cygreSemibold = localFont({
    src: './fonts/Cygre/Cygre-SemiBold.ttf',
    variable: '--font-cygre-semibold'
});

const cygreMedium = localFont({
    src: './fonts/Cygre/Cygre-Medium.ttf',
    variable: '--font-cygre-medium'
});

export const metadata: Metadata = {
    title: "Персонта",
    description: "Разработка документации по ФЗ-152 «О персональных данных»",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body className={`${cygreSemibold.variable} ${cygreMedium.variable}`}>
                <ToastProvider>
                    {children}
                </ToastProvider>
            </body>
        </html>
    );
}
