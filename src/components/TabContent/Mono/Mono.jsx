import PropTypes from 'prop-types';

import QrCode from '/public/icons/qr-code.svg';
import { PaymentLink } from '@/components/PaymentLink';

export const Mono = ({ info }) => {
  const { link } = info;

  return (
    <div className="flex flex-col gap-10 justify-center items-center md:flex-row-reverse xl:gap-0 md:justify-between">
      <div className="w-[161px] h-[161px] xl:w-[230px] xl:h-[230px] fill-current" title={link.title} aria-label={link.title}>
        <QrCode />
      </div>
      <div className="flex justify-center items-center">
        <PaymentLink title={link.title} url={link.url} />
      </div>
    </div>
  );
};

Mono.propTypes = {
  info: PropTypes.shape({
    link: PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
