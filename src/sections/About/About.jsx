import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';

export const About = ({ data }) => {
  const { title, benefits } = data;
  console.log(benefits);

  return (
    <section className="section" id="about">
      <Container>
        <SectionTitle title={title} />
      </Container>
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
