import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { NavBar } from '@/components/NavBar';

export const Header = ({ data, navArray }) => {
  return (
    <header>
      <Container>
        <p>{data}</p>
        <NavBar navArray={navArray} section="header" />
      </Container>
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.string.isRequired,
  navArray: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
