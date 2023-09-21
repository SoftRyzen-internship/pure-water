'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ArrowIcon from 'public/icons/arrow-down.svg';

function LocaleSwitcher() {
  const [isOpenEn, setIsOpenEn] = useState(false);
  const pathName = usePathname();

  const redirectedPathName = locale => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const getCurrentLocale = () => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    return segments[1];
  };

  const isUkSet = () => getCurrentLocale() === 'uk';

  return (
    <div
      aria-label="language switcher"
      className="flex flex-col gap-2 py-2 px-4 w-[65px] text-white rounded-20 switcherGradient hover:switcherGradientActive focus:switcherGradientActive transition duration-300 backdrop-blur-[1px] cursor-pointer"
    >
      <div
        className="flex gap-1 items-center h-[9px]"
        onClick={() => {
          setIsOpenEn(state => !state);
        }}
      >
        <p className="text-xs uppercase font-medium ">
          {isUkSet() ? 'UA' : 'EN'}
        </p>
        <ArrowIcon width={12} height={8} />
      </div>

      <div
        className={`${
          isOpenEn ? 'block' : 'hidden'
        } h-[9px] flex items-center `}
        onClick={() => {
          setIsOpenEn(state => !state);
        }}
      >
        <Link
          href={redirectedPathName(isUkSet() ? 'en' : 'uk')}
          className="w-full text-xs uppercase font-light"
        >
          {isUkSet() ? 'EN' : 'UA'}
        </Link>
      </div>
    </div>
  );
}

export default LocaleSwitcher;
