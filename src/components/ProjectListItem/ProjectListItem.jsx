import Image from 'next/image';
import TapIcon from 'public/icons/tap.svg';

export const ProjectListItem = ({ project, staticData }) => {
  const { title, description, location, imageList } = project;

  return (
    <div className="flex flex-col h-[437px]">
      <div className="relative rounded-[20px] overflow-hidden mb-3">
        <Image
          src={imageList[0].image.url}
          objectFit="cover"
          alt={title}
          layout="fill"
          className="!static !max-h-[183px]"
        />
        <span className="xl:hidden absolute bottom-[5px] right-[5px] flex items-center justify-center w-8 h-8 bg-gradient-to-b from-lighterBlue to-[#0F5598] opacity-75 rounded-full">
          <TapIcon className="w-[18px] h-6 fill-white" />
        </span>
      </div>
      <h3 className="mb-5 text-xl/[1.2] font-medium">{title}</h3>
      <p className="max-h-[100px] overflow-auto tracking-[-0.28px]">
        {description}
      </p>
      <p className="flex gap-3 items-center mt-auto text-base/[1.2]">
        <span className="font-light">{`${staticData.projects.city}:`}</span>
        <span>{location}</span>
      </p>
    </div>
  );
};
