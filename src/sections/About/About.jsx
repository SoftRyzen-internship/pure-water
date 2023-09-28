import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { AboutCard } from '@/components/AboutCard';
import { AboutSwiper } from '@/components/AboutSwiper';

export const About = ({ data }) => {
  const { title, benefits } = data;

  return (
    <section className="section xl:aboutBg pt-0 xl:pb-[156px]" id="about">
      <SectionTitle title={title} />
      <Container className="hidden xl:block">
        <ul className="flex gap-6">
          {benefits.map((benefit, index) => (
            <AboutCard key={index} data={benefit} index={index} />
          ))}
        </ul>
      </Container>

      <div className="xl:hidden">
        <AboutSwiper benefits={benefits} />
      </div>
    </section>
  );
};

About.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    benefits: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};
