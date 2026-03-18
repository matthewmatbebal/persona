import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Script from 'next/script'
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
            <head>
                <Script id="yandex-metrika" strategy="afterInteractive">
                    {`
                        (function(m,e,t,r,i,k,a){
                            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                            m[i].l=1*new Date();
                            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=107953792', 'ym');

                        ym(107953792, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
                    `}
                </Script>
                <noscript>
                    <div><img src="https://mc.yandex.ru/watch/107953792" style={{position:'absolute', left:'-9999px'}} alt="" /></div>
                </noscript>
            </head>
            <body className={tildaSans.variable}>
                <ToastProvider>
                    {children}
                    <CookieBanner />
                </ToastProvider>
            </body>
        </html>
    );
}
