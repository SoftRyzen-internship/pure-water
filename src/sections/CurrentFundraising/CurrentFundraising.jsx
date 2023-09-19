import PropTypes from 'prop-types';

import { FundraisingDesc } from '@/components/FundraisingDesc';

export const CurrentFundraising = ({ lang }) => {
  return (
    <section>
      {/* <Image /> */}
      <FundraisingDesc lang={lang} />
    </section>
  );
};

CurrentFundraising.propTypes = {
  lang: PropTypes.string.isRequired,
};
