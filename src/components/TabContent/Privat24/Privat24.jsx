import PropTypes from 'prop-types';

import { PaymentDetail } from '@/components/PaymentDetail';
import { PaymentLink } from '@/components/PaymentLink';

export const Private24 = ({ info, paymentIcons }) => {
  const { accountTitle, paymentDetails, card, link } = info;

  return (
    <div className="flex flex-col gap-10 xl:flex-row-reverse xl:justify-between">
      <div>
        <h3 className="text-2xl font-semibold xl:text-xl xl:text-center mb-2 xl:mb-6">
          {accountTitle}
        </h3>
        <ul className="flex flex-col gap-2 xl:gap-6">
          {paymentDetails.map(({ label, description }) => {
            return (
              <li key={label}>
                <PaymentDetail
                  title={label}
                  description={description}
                  paymentIcons={paymentIcons}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col gap-2 md:gap-3 xl:gap-6 xl:justify-center">
        <PaymentDetail
          title={card.label}
          description={card.description}
          paymentIcons={paymentIcons}
        />
        <PaymentLink title={link.title} url={link.url} />
      </div>
    </div>
  );
};

Private24.propTypes = {
  info: PropTypes.shape({
    card: PropTypes.shape({
      label: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    link: PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    accountTitle: PropTypes.string.isRequired,
    paymentDetails: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  paymentIcons: PropTypes.shape({
    copyIcon: PropTypes.string.isRequired,
    checkIcon: PropTypes.string.isRequired,
  }).isRequired,
};
