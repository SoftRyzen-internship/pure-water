import Image from 'next/image';
import PropTypes from 'prop-types';

import { FundraisingDesc } from '@/components/FundraisingDesc';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { MakeDonateBtn } from '@/components/MakeDonateBtn';

import FundraisingImg from 'public/images/fundraising/yellow-blue-heart.jpg';

export const CurrentFundraising = ({ lang, fundraising, btnData }) => {
  return (
    <Container>
      <section className="section flex flex-col justify-center items-center">
        <SectionTitle title={fundraising?.title} />
        <div className="my-6 xl:mt-8 xl:mb-0 xl:flex xl:gap-x-6 md:px-[79.5px] xl:px-0">
          <div className="xl:flex xl:flex-col xl:gap-6 xl:items-center">
            <Image
              src={FundraisingImg}
              alt="Yellow and blue heart"
              width={280}
              height={221}
              quality={100}
              className="mx-auto md:mb-6 xl:mb-0 md:w-[317px] xl:w-[659px] md:h-[290px] xl:h-[603px] object-cover"
            />
            <div className="hidden xl:block">
              <MakeDonateBtn title={btnData?.title} />
            </div>
          </div>
          <FundraisingDesc lang={lang} />
        </div>
        <div className="block xl:hidden">
          <MakeDonateBtn title={btnData?.title} />
        </div>
      </section>
    </Container>
  );
};

CurrentFundraising.propTypes = {
  btnData: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  fundraising: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  lang: PropTypes.string.isRequired,
};
