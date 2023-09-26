import PropTypes from 'prop-types';

import { fetchCurrentFundraising } from '@/utils/api/fetchCurrentFundraising';

export const FundraisingDesc = async ({ lang }) => {
  const fundraising = await fetchCurrentFundraising({
    locale: lang,
  });

  return (
    <div className="xl:max-w-[537px]">
      <h2 className="mb-2 md:mb-4 xl:mb-6 text-xl/[1.2] md:text-2xl/normal font-medium text-center xl:text-start">
        {fundraising?.title}
      </h2>
      <p className="md:text-base/tight tracking-[-0.28px] md:tracking-[-0.32px] whitespace-break-spaces">
        {fundraising?.description}
      </p>
    </div>
  );
};

FundraisingDesc.propTypes = {
  lang: PropTypes.string.isRequired,
};
