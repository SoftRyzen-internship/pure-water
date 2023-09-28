import PropTypes from 'prop-types';

import { PaymentDetail } from '@/components/PaymentDetail';

export const PayPal = ({ info, paymentIcons }) => {
  const { box, email } = info;

  return (
    <div className="flex justify-center items-center">
      <PaymentDetail
        title={box}
        description={email}
        paymentIcons={paymentIcons}
      />
    </div>
  );
};

PayPal.propTypes = {
  info: PropTypes.shape({
    box: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  paymentIcons: PropTypes.shape({
    copyIcon: PropTypes.string.isRequired,
    checkIcon: PropTypes.string.isRequired,
  }).isRequired,
};
