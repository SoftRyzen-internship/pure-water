import { CurrentFundraising } from '@/sections/CurrentFundraising';
import { Projects } from '@/sections/Projects';
import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { lang } }) {
  const staticPageData = await getDictionary(lang);

  return (
    <>
      {staticPageData && <CurrentFundraising lang={lang} />}
      {staticPageData && <Projects lang={lang} />}
    </>
  );
}
