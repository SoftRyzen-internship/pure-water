import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { CurrentFundraising } from '@/sections/CurrentFundraising';
import { Donate } from '@/sections/Donate';
import { Projects } from '@/sections/Projects';
import { WriteUsSection } from '@/sections/WriteUsSection';

import { getDictionary } from '@/utils/getDictionary';

export default async function Home({ params: { lang } }) {
  const staticPageData = await getDictionary(lang);

  const {
    hero,
    makeDonate,
    socials,
    about,
    fundraising,
    donate,
    projects,
    write,
  } = staticPageData;

  return (
    <>
      <Hero
        heroData={hero}
        titleBtn={makeDonate.title}
        socials={socials.links}
      />
      <About data={about} />
      <CurrentFundraising
        lang={lang}
        fundraising={fundraising}
        btnTitle={makeDonate?.title}
      />
      <div className="main">
        <Donate donate={donate} />
        <Projects lang={lang} projects={projects} />
        <WriteUsSection data={write} />
      </div>
    </>
  );
}
