import PropTypes from 'prop-types';

import { PaymentDetail } from '@/components/PaymentDetail';

export const Swift = ({ info }) => {
  const { accountTitle, paymentDetails, bankDetails } = info;

  return (
    <div className="flex flex-col gap-10 xl:flex-row xl:gap-12">
      <div className="flex flex-col gap-3 xl:gap-8 xl:w-[457px]">
        <h3 className="text-2xl xl:text-xl font-semibold xl:text-center">
          {accountTitle}
        </h3>
        <ul className="flex flex-col gap-2 xl:gap-8">
          {paymentDetails.map(({ title, description }) => {
            return (
              <li key={title} className="md:w-[486px] xl:w-full">
                <PaymentDetail
                  title={title}
                  description={description}
                  isSwift
                />
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="flex flex-col gap-10 xl:gap-12">
        {bankDetails.map(
          ({
            bankTitle,
            bankDescription,
            accountTitle,
            accountDescription,
            correspondentTitle,
            correspondentDescription,
          }) => {
            return (
              <li
                key={bankTitle}
                className="flex flex-col gap-3 md:gap-4 xl:gap-3"
              >
                <PaymentDetail
                  title={bankTitle}
                  description={bankDescription}
                  isSwift
                />
                <PaymentDetail
                  title={accountTitle}
                  description={accountDescription}
                  isSwift
                />
                <PaymentDetail
                  title={correspondentTitle}
                  description={correspondentDescription}
                  isSwift
                />
              </li>
            );
          },
        )}
      </ul>
    </div>
  );
};

Swift.propTypes = {
  info: PropTypes.shape({
    accountTitle: PropTypes.string.isRequired,
    paymentDetails: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ),
    bankDetails: PropTypes.arrayOf(
      PropTypes.shape({
        bankTitle: PropTypes.string.isRequired,
        bankDescription: PropTypes.string.isRequired,
        accountTitle: PropTypes.string.isRequired,
        accountDescription: PropTypes.string.isRequired,
        correspondentTitle: PropTypes.string.isRequired,
        correspondentDescription: PropTypes.string.isRequired,
      }),
    ),
  }),
};
