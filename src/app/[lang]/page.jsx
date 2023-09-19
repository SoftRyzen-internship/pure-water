import { CurrentFundraising } from '@/sections/CurrentFundraising';
import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { lang } }) {
  const staticPageData = await getDictionary(lang);

  return (
    <>
      {staticPageData && (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <CurrentFundraising lang={lang} />
        </main>
      )}
    </>
  );
}
