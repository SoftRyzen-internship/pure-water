import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { NavBar } from '@/components/NavBar';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';

export const Header = ({ navArray, switcherAria, lang }) => {
  return (
    <header>
      <Container>
        <NavBar navArray={navArray} section="header" />
        <LocaleSwitcher switcherAria={switcherAria} lang={lang} />
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
  switcherAria: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};
