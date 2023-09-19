import PropTypes from 'prop-types';

import { datoCmsRequest } from '@/utils/datoCmsRequest';
import { getCurrentFundraising } from '@/utils/queries/getCurrentFundraising';

export const FundraisingDesc = async ({ lang }) => {
  const fundraisingData = await datoCmsRequest(getCurrentFundraising, {
    locale: lang,
  });

  const { fundraising } = fundraisingData;

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
