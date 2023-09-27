import { Hero } from '@/sections/Hero';
import { CurrentFundraising } from '@/sections/CurrentFundraising';
import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { lang } }) {
  const staticPageData = await getDictionary(lang);
  const { hero, makeDonate, socials, fundraising } = staticPageData;

  return (
    <>
      <Hero
        heroData={hero}
        titleBtn={makeDonate.title}
        socials={socials.links}
      />
      {staticPageData && (
        <CurrentFundraising
          lang={lang}
          fundraising={fundraising}
          btnTitle={makeDonate?.title}
        />
      )}
    </>
  );
}
