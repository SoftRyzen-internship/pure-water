import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';

export const Header = ({ switcherAria, lang }) => {
  return (
    <header>
      <Container>
        <LocaleSwitcher switcherAria={switcherAria} lang={lang} />
      </Container>
    </header>
  );
};

Header.propTypes = {
  switcherAria: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};
