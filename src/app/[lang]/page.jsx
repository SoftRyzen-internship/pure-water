import { Hero } from '@/sections/Hero';
import { CurrentFundraising } from '@/sections/CurrentFundraising';
import { Donate } from '@/sections/Donate';
import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { lang } }) {
  const staticPageData = await getDictionary(lang);
  const {hero, makeDonate, socials, donate} = staticPageData;

  return (
    <>
      <Hero
        heroData={hero}
        titleBtn={makeDonate.title}
        socials={socials.links}
      />
      <>{staticPageData && <CurrentFundraising lang={lang} />}</>
      <Donate data={donate}/>
    </>
  );
}
