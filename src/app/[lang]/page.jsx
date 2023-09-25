import { CurrentFundraising } from '@/sections/CurrentFundraising';
import { About } from '@/sections/About';
import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { lang } }) {
  const staticPageData = await getDictionary(lang);
  const { about } = staticPageData;

  return (
    <>
      <About data={about} />
      {staticPageData && <CurrentFundraising lang={lang} />}
    </>
  );
}
