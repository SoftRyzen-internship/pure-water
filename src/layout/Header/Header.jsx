import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';

export const Header = ({ switcherAria }) => {
  return (
    <header>
      <Container>
        <LocaleSwitcher switcherAria={switcherAria} />
      </Container>
    </header>
  );
};

Header.propTypes = {
  switcherAria: PropTypes.string.isRequired,
};
