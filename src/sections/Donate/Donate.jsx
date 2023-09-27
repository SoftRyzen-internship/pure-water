import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { TabLinks } from '@/components/TabLinks';
import { Tabs } from '@/components/Tabs';

export const Donate = ({ donate }) => {
  const { title, tabs } = donate;

  return (
    <section id="donate" className="section bg-white">
      <Container>
        <div className="flex flex-col gap-6 xl:gap-8 justify-center items-center">
          <SectionTitle title={title} />
          <div className="flex flex-col gap-6">
            <TabLinks tabs={tabs} />
            <Tabs tabs={tabs} />
          </div>
        </div>
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
      }),
    ),
  }),
};
