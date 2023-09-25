import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo/Logo';

export const Header = ({ logoAria }) => {
  return (
    <header className="bg-green-700">
      <Container>
        <Logo logoAria={logoAria} />
      </Container>
    </header>
  );
};
