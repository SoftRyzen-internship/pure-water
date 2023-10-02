'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Listbox } from '@headlessui/react';
import { i18n } from 'i18n';
import ArrowIcon from 'public/icons/arrow-down.svg';

export const LocaleSwitcher = ({ switcherAria, lang }) => {
  const locales = i18n.locales.map((locale, index) => {
    return { id: index + 1, locale: locale };
  });
  const router = useRouter();

  const currentLocale = locales.find(locale => locale.locale === lang);
  const [selectedLocale, setSelectedLocale] = useState(currentLocale);

  const titleLocale = locale => {
    return locale === 'uk' ? 'UA' : 'EN';
  };

  const handleChange = locale => {
    setSelectedLocale(locale);
    router.push(`/${locale.locale}`);
  };

  const filteredLocaleArr = locales.filter(
    locale => locale.locale !== selectedLocale.locale,
  );

  return (
    <Listbox
      as="div"
      aria-label={switcherAria}
      onChange={handleChange}
      className="absolute w-[65px] text-white rounded-20 switcherGradient hover:switcherGradientActive focus:switcherGradientActive transition duration-300 backdrop-blur-[1px] cursor-pointer"
    >
      <Listbox.Button className="block w-full h-full py-2 px-4 flex gap-1 items-start">
        <span className="text-[12px] leading-[12px] uppercase font-medium">
          {titleLocale(selectedLocale.locale)}
        </span>
        <ArrowIcon width={12} height={8} className="shrink-0" />
      </Listbox.Button>

      <Listbox.Options as="div">
        {filteredLocaleArr.map(locale => (
          <Listbox.Option
            as="div"
            key={locale.id}
            value={locale}
            className="w-full h-full pt-[2px] mt-[-2px] pb-2 px-4 text-xs/[9px] uppercase !font-light"
          >
            {titleLocale(locale.locale)}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

LocaleSwitcher.propTypes = {
  switcherAria: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};
