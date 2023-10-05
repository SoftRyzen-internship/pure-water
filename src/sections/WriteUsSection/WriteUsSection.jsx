import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Form } from '@/components/Form';

export const WriteUsSection = ({ data }) => {
  return (
    <section className="section writeUsSection" id="write">
      <Container>
        <SectionTitle title={data.title} />
        <Form data={data} />
      </Container>
    </section>
  );
};

WriteUsSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    form: PropTypes.shape({
      name: PropTypes.shape({
        label: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
      }).isRequired,
      phone: PropTypes.shape({
        label: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
      }).isRequired,
      message: PropTypes.shape({
        label: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
      }).isRequired,
    }),
    formBtn: PropTypes.shape({
      regular: PropTypes.string.isRequired,
      success: PropTypes.string.isRequired,
      error: PropTypes.string.isRequired,
    }).isRequired,
    errorMsg: PropTypes.shape({
      required: PropTypes.string.isRequired,
      nameShort: PropTypes.string.isRequired,
      nameLong: PropTypes.string.isRequired,
      wrongName: PropTypes.string.isRequired,
      wrongPhone: PropTypes.string.isRequired,
      wrongMessage: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
