import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { AboutCard } from '@/components/AboutCard';
import { AboutSwiper } from '@/components/AboutSwiper';

export const About = ({ data }) => {
  const { title, benefits } = data;

  return (
    <section className="section xl:aboutBg xl:pb-[189px]" id="about">
      <SectionTitle title={title} />
      <Container className="hidden xl:block">
        <ul className="flex gap-6 xl:h-[624px]">
          {benefits.map((benefit, index) => (
            <AboutCard key={index} data={benefit} index={index} Tag="li" />
          ))}
        </ul>
      </Container>

      <AboutSwiper benefits={benefits} />
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
