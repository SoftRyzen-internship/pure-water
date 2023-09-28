import { Hero } from '@/sections/Hero';
import { CurrentFundraising } from '@/sections/CurrentFundraising';
import { WriteUsSection } from '@/sections/WriteUsSection';
import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { lang } }) {
  const staticPageData = await getDictionary(lang);

  const { hero, makeDonate, socials, write, fundraising } = staticPageData;

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
      <WriteUsSection data={write} />
    </>
  );
}
