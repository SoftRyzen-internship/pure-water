'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Listbox } from '@headlessui/react';
import { i18n } from 'i18n';
import ArrowIcon from 'public/icons/arrow-down.svg';

export const LocaleSwitcher = ({ switcherAria }) => {
  const locales = i18n.locales;
  const pathName = usePathname();
  const router = useRouter();

  const currentLocale = pathName.split('/')[1];
  const [selectedLocale, setSelectedLocale] = useState(currentLocale);

  const titleLocale = locale => {
    return locale === 'uk' ? 'UA' : 'EN';
  };

  const handlechange = locale => {
    setSelectedLocale(locale);
    router.push(`/${locale}`);
  };

  const filteredLocaleArr = locales.filter(locale => locale !== selectedLocale);

  return (
    <Listbox
      as="div"
      aria-label={switcherAria}
      onChange={handlechange}
      className=" flex flex-col gap-2 py-2 px-4 w-[65px] text-white rounded-20 switcherGradient hover:switcherGradientActive focus:switcherGradientActive transition duration-300 backdrop-blur-[1px] cursor-pointer"
    >
      <Listbox.Button className="flex gap-1 items-center">
        <span className="block text-xs/[9px] uppercase font-medium ">
          {titleLocale(selectedLocale)}
        </span>
        <ArrowIcon width={12} height={8} />
      </Listbox.Button>

      <Listbox.Options>
        {filteredLocaleArr.map(locale => (
          <Listbox.Option
            key={locale}
            value={locale}
            className="w-full text-xs/[9px] uppercase font-light "
          >
            {titleLocale(locale)}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

LocaleSwitcher.propTypes = {
  switcherAria: PropTypes.string.isRequired,
};
