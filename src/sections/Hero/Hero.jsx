import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { MakeDonateBtn } from '@/components/MakeDonateBtn';
import { SocialLinks } from '@/components/SocialLinks';

export const Hero = ({ heroData, titleBtn, socials }) => {
  const { titleFoundation, titleMain, tagline } = heroData;

  return (
    <section className="hero section pt-[133px] pb-[121px] md:pt-[104px] md:pb-[78px] xl:pt-[126px] xl:pb-[140px] text-white">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center gap-1 md:flex-row-reverse md:gap-6 xl:h-[38px] mb-1 md:mb-[10px] xl:mb-2">
            <SocialLinks socials={socials} section="hero" />
            <p className="text-base md:text-xl max-md:my-1 xl:text-2xl font-normal text-center">
              {titleFoundation}
            </p>
          </div>

          <h1 className="items-center text-center text-[40px] md:text-[100px] xl:text-[140px] font-medium leading-none tracking-[-0.8px] md:tracking-[-2px] xl:tracking-[-2.8px] w-[256px] md:w-[696px] xl:w-[1209px] mb-4 md:mb-1">
            {titleMain}
          </h1>

          <p className="max-md:w-[200px] text-center text-base md:text-xl font-normal mb-[25px] md:mb-4 xl:mb-6">
            {tagline}
          </p>
          <MakeDonateBtn section="hero" title={titleBtn} />
        </div>
      </Container>
    </section>
  );
};

Hero.propTypes = {
  heroData: PropTypes.shape({
    titleFoundation: PropTypes.string.isRequired,
    titleMain: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
  }),
  titleBtn: PropTypes.string.isRequired,
};
