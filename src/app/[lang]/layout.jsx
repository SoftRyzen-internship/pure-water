import { Header } from '@/layout/Header';
import { axiforma } from '../fonts';

import { getMetaByLang } from '@/utils/getMetaData';
import { getDictionary } from '@/utils/getDictionary';
import { i18n } from 'i18n';
import './globals.css';

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
  const { nav, switcherAria, logoAria } = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={axiforma.variable}>
        <Header
          logoAria={logoAria}
          navArray={nav}
          switcherAria={switcherAria}
          lang={lang}
        />
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
