import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { NavBar } from '@/components/NavBar';

export const Header = ({ navArray }) => {
  return (
    <header>
      <Container>
        <NavBar navArray={navArray} section="header" />
      </Container>
    </header>
  );
};

Header.propTypes = {
  navArray: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
