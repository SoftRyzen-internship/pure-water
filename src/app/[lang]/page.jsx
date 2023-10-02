import { Hero } from '@/sections/Hero';
import { CurrentFundraising } from '@/sections/CurrentFundraising';
import { Donate } from '@/sections/Donate';
import { Projects } from '@/sections/Projects';
import { WriteUsSection } from '@/sections/WriteUsSection';

import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { lang } }) {
  const staticPageData = await getDictionary(lang);

  const { hero, makeDonate, socials, write, projects, fundraising, donate } =
    staticPageData;

  return (
    <>
      <Hero
        heroData={hero}
        titleBtn={makeDonate.title}
        socials={socials.links}
      />
      <CurrentFundraising
        lang={lang}
        fundraising={fundraising}
        btnTitle={makeDonate?.title}
      />
      <Donate donate={donate} />
      <Projects lang={lang} projects={projects} />
      <WriteUsSection data={write} />
    </>
  );
}
