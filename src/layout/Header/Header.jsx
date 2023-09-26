import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { NavBar } from '@/components/NavBar';
import { Logo } from '@/components/Logo';

export const Header = ({ navArray, logoAria }) => {
  return (
    <header>
      <Container>
        <NavBar navArray={navArray} section="header" />
        <Logo logoAria={logoAria} />
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
  logoAria: PropTypes.string.isRequired,
};
