import { createElement } from 'react';
import PropTypes from 'prop-types';

import Aim from 'public/icons/aim.svg';
import Priorities from 'public/icons/priorities.svg';
import Team from 'public/icons/team.svg';
import Achievements from 'public/icons/achievements.svg';

export const AboutCard = ({ data, index }) => {
  const { title, paragraph } = data;
  const icons = [Aim, Priorities, Team, Achievements];

  return (
    <li
      className={`${
        index === 3 ? 'xl:h-[393px]' : 'xl:h-[629px]'
      } w-[279px] h-[486px] md:w-[287px] md:h-[590px] px-5 py-6 border-2 border-tertiary rounded-10`}
    >
      <div className="w-[64px] h-[64px] md:w-[88px] md:h-[88px] xl:w-[123px] xl:h-[123px] mx-auto">
        {createElement(icons[index])}
      </div>
      <h3 className="textGradient text-transparent bg-clip-text text-[24px] font-medium leading-normal pt-4 pb-2">
        {title}
      </h3>
      {paragraph.map((text, index) => (
        <p key={index} className="tracking-[-0.32px] mb-3 last:mb-0">
          {text}
        </p>
      ))}
    </li>
  );
};

AboutCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
