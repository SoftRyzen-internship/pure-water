import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Tabs } from '@/components/Tabs';

export const Donate = ({ donate }) => {
  const { title, tabs, paymentIcons } = donate;

  return (
    <section id="donate" className="section bg-white">
      <Container>
        <SectionTitle title={title} />
        <Tabs tabs={tabs} paymentIcons={paymentIcons} />
      </Container>
    </section>
  );
};

Donate.propTypes = {
  donate: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        info: PropTypes.object.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  paymentIcons: PropTypes.shape({
    copyIcon: PropTypes.string.isRequired,
    checkIcon: PropTypes.string.isRequired,
  }).isRequired,
};
