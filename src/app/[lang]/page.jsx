import { CurrentFundraising } from '@/sections/CurrentFundraising';
import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { lang } }) {
  const staticPageData = await getDictionary(lang);

  return (
    <>
      {staticPageData && (
        <CurrentFundraising
          lang={lang}
          fundraising={staticPageData?.fundraising}
          btnData={staticPageData?.makeDonate}
        />
      )}
    </>
  );
}
