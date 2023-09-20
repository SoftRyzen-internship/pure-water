'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function LocaleSwitcher() {
  const [isOpenEn, setIsOpenEn] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const pathName = usePathname();

  useEffect(() => {
    setSelectedOption(pathName.slice(1));
  }, [pathName]);

  const toggleLocale = () => {
    return pathName === '/uk' ? '/en' : '/uk';
  };

  return (
    <div className="rounded-[20px] py-2 px-4 flex flex-col gap-2 w-[65px] text-white">
      <div
        className="flex gap-1 items-center h-[9px]"
        onClick={() => {
          setIsOpenEn(state => !state);
        }}
      >
        <p className="text-xs uppercase font-medium ">
          {selectedOption === 'uk' ? 'UA' : 'EN'}
        </p>
        <div className="w-[12px] h-[8px] bg-blue-900"></div>
      </div>

      <div
        className={`${
          isOpenEn ? 'block' : 'hidden'
        } h-[9px] flex items-center `}
        onClick={() => {
          setIsOpenEn(state => !state);
        }}
      >
        <Link href={toggleLocale()} className="text-xs uppercase font-light">
          {selectedOption === 'uk' ? 'EN' : 'UA'}
        </Link>
      </div>
    </div>
  );
}

export default LocaleSwitcher;
