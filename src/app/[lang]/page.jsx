import { CurrentFundraising } from '@/sections/CurrentFundraising';
import { WriteUsSection } from '@/sections/WriteUsSection';
import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { lang } }) {
  const staticPageData = await getDictionary(lang);
  const { write } = staticPageData;

  return (
    <>
      {staticPageData && <CurrentFundraising lang={lang} />}
      <WriteUsSection data={write} />
    </>
  );
}
