import PropTypes from 'prop-types';

import { PaymentDetail } from '@/components/PaymentDetail';

export const PayPal = ({ info }) => {
  const { box, email } = info;

  return (
    <div className="flex justify-center items-center">
      <PaymentDetail title={box} description={email} />
    </div>
  );
};

PayPal.propTypes = {
  info: PropTypes.shape({
    box: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
