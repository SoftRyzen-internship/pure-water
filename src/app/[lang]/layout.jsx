import localFont from 'next/font/local';

import { Header } from '@/layout/Header';

import { getMetaByLang } from '@/utils/getMetaData';
import { getDictionary } from '@/utils/getDictionary';
import { i18n } from 'i18n';

import './globals.css';

const axiforma = localFont({
  src: [
    {
      path: '../fonts/axiforma/Axiforma-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/axiforma/Axiforma-Book.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/axiforma/Axiforma-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/axiforma/Axiforma-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/axiforma/Axiforma-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/axiforma/Axiforma-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-axiforma',
});

export async function generateMetadata({ params }) {
  const metaDictionary = await getMetaByLang(params.lang);

  return {
    title: metaDictionary.title,
    description: metaDictionary.description,
  };
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ locale: locale }));
}

export default async function RootLayout({ children, params: { lang } }) {
  const staticPageData = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={axiforma.variable}>
        <Header data={staticPageData.title} />

        <main className="flex flex-col items-center">{children}</main>
      </body>
    </html>
  );
}
