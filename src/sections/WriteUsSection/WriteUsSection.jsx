import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Form } from '@/components/Form';

export const WriteUsSection = ({ data }) => {
  const { title } = data;

  return (
    <section className="section" id="write">
      <Container>
        <SectionTitle title={title} className="mb" />
        <Form data={data} />
      </Container>
    </section>
  );
};

WriteUsSection.propTypes = {
  data: PropTypes.object.isRequired,
};
