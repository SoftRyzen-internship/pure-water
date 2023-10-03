import { Comfortaa } from 'next/font/google';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';
import { getMetaByLang } from '@/utils/getMetaData';
import { getDictionary } from '@/utils/getDictionary';
import { i18n } from 'i18n';
import './globals.css';

const comfortaa = Comfortaa({ subsets: ['cyrillic-ext'] });

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
  const { nav, aria, contacts, createdBy, socials, menuLabel } = await getDictionary(lang);

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
      </body>
    </html>
  );
}
