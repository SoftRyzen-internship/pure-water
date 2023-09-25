import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo/Logo';

export const Header = ({ logoAria }) => {
  return (
    <header>
      <Container>
        <Logo logoAria={logoAria} />
      </Container>
    </header>
  );
};
