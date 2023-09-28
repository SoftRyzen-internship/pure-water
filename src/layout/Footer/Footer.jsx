import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { Contacts } from '@/components/Contacts';
import { CreatedBy } from '@/components/CreatedBy';
import { Logo } from '@/components/Logo';
import { SocialLinks } from '@/components/SocialLinks';
import { NavBar } from '@/components/NavBar';

export const Footer = ({
  contacts,
  createdBy,
  socials,
  socialsTitle,
  logoAria,
  lang,
  menuLabel,
  navArray,
}) => {
  return (
    <section className="w-full h-[426px] md:h-[670px] xl:h-[1200px] pt-[170px] md:pt-[246px] xl:pt-[533px] pb-[30px] md:pb-10 xl:pb-20 footer text-white flex items-center">
      <Container>
        <div className="flex justify-between">
          <div className="hidden xl:block w-[130px]">
            <Logo logoAria={logoAria} lang={lang} />
          </div>
          <div className="relative">
            <Contacts contacts={contacts} />
            <CreatedBy createdBy={createdBy} />
          </div>
          <div className="hidden xl:block">
            <h3 className="h-8 text-xl font-medium mb-2">{socialsTitle}</h3>
            <SocialLinks section="footer" socials={socials} />
          </div>
          <div className="w-12 h-12 xl:hidden"></div>
          <div className="hidden xl:block">
            <h3 className="h-8 mb-2 text-xl font-medium text-end">
              {menuLabel}
            </h3>
            <NavBar section="footer" navArray={navArray} />
          </div>
        </div>
      </Container>
    </section>
  );
};

Footer.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      contact: PropTypes.string.isRequired,
    }),
  ).isRequired,
  createdBy: PropTypes.shape({
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  logoAria: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  menuLabel: PropTypes.string.isRequired,
  socialsTitle: PropTypes.string.isRequired,
};