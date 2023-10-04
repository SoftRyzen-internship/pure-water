import Image from 'next/image';
import PropTypes from 'prop-types';

import { FundraisingDesc } from '@/components/FundraisingDesc';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { MakeDonateBtn } from '@/components/MakeDonateBtn';
import { convertImage, toBase64 } from '@/utils/getImageBlur';
import FundraisingImg from 'public/images/fundraising/yellow-blue-heart.jpg';

export const CurrentFundraising = ({ lang, fundraising, btnTitle }) => {
  return (
    <section className="section">
      <Container>
        <SectionTitle title={fundraising?.title} />
        <div className="mb-6 xl:mb-0 xl:flex xl:gap-x-6 md:px-[79.5px] xl:px-0">
          <div className="xl:flex xl:flex-col xl:gap-6 xl:items-center">
            <Image
              src={FundraisingImg}
              alt={fundraising?.imageAlt}
              width={280}
              height={221}
              quality={100}
              className="mx-auto md:mb-6 xl:mb-0 md:w-[317px] xl:w-[659px] md:h-[290px] xl:h-[603px] object-cover"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                convertImage(280, 221),
              )}`}
            />
            <MakeDonateBtn
              title={btnTitle}
              section="currentFundraising"
              currentFundClassName="hidden xl:block"
            />
          </div>
          <FundraisingDesc lang={lang} />
        </div>
        <MakeDonateBtn
          title={btnTitle}
          section="currentFundraising"
          currentFundClassName="mx-auto xl:hidden"
        />
      </Container>
    </section>
  );
};

CurrentFundraising.propTypes = {
  btnTitle: PropTypes.string.isRequired,
  fundraising: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  lang: PropTypes.string.isRequired,
};
