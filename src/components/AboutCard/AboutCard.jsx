import Image from 'next/image';
import PropTypes from 'prop-types';

import aim from 'public/images/about/aim.png';
import priorities from 'public/images/about/priorities.png';
import team from 'public/images/about/team.png';
import achievements from 'public/images/about/achievements.png';

export const AboutCard = ({ data, index }) => {
  const { title, paragraph } = data;
  const images = [aim, priorities, team, achievements];

  return (
    <li
      className={`${
        index === 3 ? 'xl:h-[393px]' : 'xl:h-[629px]'
      } w-full h-full xl:w-[287px] px-5 md:px-6 py-6 xl:border-2 xl:border-tertiary rounded-10`}
    >
      <Image
        className="w-[64px] h-[64px] md:w-[88px] md:h-[88px] xl:w-[123px] xl:h-[123px] mx-auto"
        src={images[index]}
        alt={title}
        width={123}
        height={123}
        quality={100}
      />
      <h3 className="textGradient text-transparent bg-clip-text text-[24px] font-medium leading-normal mt-4 mb-2">
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
