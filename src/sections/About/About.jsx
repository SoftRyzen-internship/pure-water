import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { AboutCard } from '@/components/AboutCard';
import Aim from 'public/icons/aim.svg';
import Priorities from 'public/icons/priorities.svg';
import Team from 'public/icons/team.svg';
import Achievements from 'public/icons/achievements.svg';

export const About = ({ data }) => {
  const { title, benefits } = data;
  const icons = [Aim, Priorities, Team, Achievements];

  return (
    <section className="section" id="about">
      <Container>
        <SectionTitle title={title} />
        <ul className="flex gap-6">
          {benefits.map((benefit, index) => (
            <AboutCard
              key={index}
              data={benefit}
              Icon={icons[index]}
              index={index}
            />
          ))}
        </ul>
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
