import PropTypes from 'prop-types';

import { fetchCurrentFundraising } from '@/utils/api/fetchCurrentFundraising';

export const FundraisingDesc = async ({ lang }) => {
  const fundraising = await fetchCurrentFundraising({
    locale: lang,
  });

  return (
    <>
      <h2>{fundraising?.title}</h2>
      <p>{fundraising?.description}</p>
    </>
  );
};

FundraisingDesc.propTypes = {
  lang: PropTypes.string.isRequired,
};
