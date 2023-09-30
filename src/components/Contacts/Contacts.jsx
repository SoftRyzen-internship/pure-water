import PropTypes from 'prop-types';

export const Contacts = ({ contacts }) => {
  return (
    <ul className="w-[165px] md:w-[220px] flex flex-col gap-2 md:gap-6 mb-2 md:mb-6 xl:mb-0">
      {contacts.map(({ label, contact }, index) => {
        const href =
          index === 0
            ? `mailto:${contact}`
            : `tel:${contact.replace(/[^+0-9]/g, '')}`;
        return (
          <li key={label}>
            <h3 className="h-[26px] md:h-8 text-base md:text-xl font-medium md:mb-2">
              {label}
            </h3>
            <a
              href={href}
              className="w-full h-[19px] md:h-[25px] text-xs md:text-base font-light text-white/75 hover:text-white focus:text-white transition duration-300"
            >
              {contact}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      contact: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
