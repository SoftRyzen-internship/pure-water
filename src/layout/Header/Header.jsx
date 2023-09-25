import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo/Logo';

export const Header = ({ logoText, logoAria, fontVariable }) => {
  return (
    <header>
      <Container>
        <Logo
          logoText={logoText}
          logoAria={logoAria}
          fontVariable={fontVariable}
        />
      </Container>
    </header>
  );
};

Header.propTypes = {
  logoText: PropTypes.string.isRequired,
  logoAria: PropTypes.string.isRequired,
  fontVariable: PropTypes.string.isRequired,
};
