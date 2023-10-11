import { Comfortaa } from 'next/font/google';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';
import { getMetaByLang } from '@/utils/getMetaData';
import { getDictionary } from '@/utils/getDictionary';
import { i18n } from 'i18n';
import './globals.css';

export const BASE_URL = 'https://clear-water.vercel.app/';

const comfortaa = Comfortaa({ subsets: ['cyrillic-ext'] });

export async function generateMetadata({ params }) {
  const metaDictionary = await getMetaByLang(params.lang);

  return {
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}${params.lang}`,
    },
    title: metaDictionary.title,
    description: metaDictionary.description,
    icons: {
      icon: [
        {
          url: '/favicon.ico',
          sizes: 'any',
        },
        {
          url: '/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: '/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
      ],
      apple: {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    },
    openGraph: {
      title: metaDictionary.title,
      description: metaDictionary.description,
      type: 'website',
      images: [
        {
          url: '/images/ogp/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: metaDictionary.title,
        },
        {
          url: '/images/ogp/twitter-image.png',
          width: 1200,
          height: 630,
          alt: metaDictionary.title,
        },
      ],
      locale: params.lang,
      twitter: {
        card: 'summary_large_image',
        title: metaDictionary.title,
        description: metaDictionary.description,
        images: [
          {
            url: '/public/images/ogp/twitter-image.png',
            width: 1200,
            height: 630,
            alt: metaDictionary.title,
          },
        ],
      },
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ locale: locale }));
}

export default async function RootLayout({ children, params: { lang } }) {
  const { nav, aria, contacts, createdBy, socials, menuLabel } =
    await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={comfortaa.className}>
        <Header aria={aria} navArray={nav} lang={lang} />
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
        <Footer
          contacts={contacts}
          createdBy={createdBy}
          aria={aria}
          lang={lang}
          socials={socials}
          menuLabel={menuLabel}
          navArray={nav}
        />
        <div id="portal"></div>
      </body>
    </html>
  );
}
