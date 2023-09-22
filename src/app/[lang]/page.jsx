import { Hero } from '@/sections/Hero';
import { CurrentFundraising } from '@/sections/CurrentFundraising';
import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { lang } }) {
  const staticPageData = await getDictionary(lang);

  return (
    <>
      <Hero
        heroData={staticPageData.hero}
        titleBtn={staticPageData.makeDonate.title}
        socials={staticPageData.socials.links}
      />
      <>{staticPageData && <CurrentFundraising lang={lang} />}</>
    </>
  );
}
