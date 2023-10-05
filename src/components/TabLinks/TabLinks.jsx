import PropTypes from 'prop-types';

export const TabLinks = ({ tabs, activeIndex, setIndex }) => {
  return (
    <ul className="flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap gap-2 md:gap-6">
      {tabs.map(({ label }, index) => {
        return (
          <li key={label} className="tabItem">
            <button
              type="button"
              className={
                index === activeIndex ? 'activeTabLink' : 'defaultTabLink'
              }
              onClick={() => setIndex(index)}
            >
              <span
                className={
                  index === activeIndex
                    ? 'activeTabLinkText'
                    : 'defaultTabLinkText'
                }
              >
                {label}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

TabLinks.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      info: PropTypes.object.isRequired,
    }).isRequired,
  ).isRequired,
  activeIndex: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
};
