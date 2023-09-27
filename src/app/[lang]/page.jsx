import { Hero } from '@/sections/Hero';
import { CurrentFundraising } from '@/sections/CurrentFundraising';
import { About } from '@/sections/About';
import { WriteUsSection } from '@/sections/WriteUsSection';
import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { lang } }) {
  const staticPageData = await getDictionary(lang);
  const { hero, makeDonate, socials, about, write } = staticPageData;

  return (
    <>
      <Hero
        heroData={hero}
        titleBtn={makeDonate.title}
        socials={socials.links}
      />
      <About data={about} />
      <CurrentFundraising lang={lang} />
      <WriteUsSection data={write} />
    </>
  );
}
