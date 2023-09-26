import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { NavBar } from '@/components/NavBar';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { Logo } from '@/components/Logo';

export const Header = ({ logoAria, navArray, switcherAria, lang }) => {
  return (
    <header>
      <Container>
        <Logo logoAria={logoAria} />
        <NavBar navArray={navArray} section="header" />
        <LocaleSwitcher switcherAria={switcherAria} lang={lang} />
      </Container>
    </header>
  );
};

Header.propTypes = {
  logoAria: PropTypes.string.isRequired,
  navArray: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  switcherAria: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};
