import { ProjectSwiper } from '@/components/ProjectSwiper';
import { SectionTitle } from '@/components/SectionTitle';
import { fetchProjects } from '@/utils/api/fetchProjects';
import { getDictionary } from '@/utils/getDictionary';

export const Projects = async ({ lang }) => {
  const { projectList } = await fetchProjects({
    locale: lang,
  });

  const staticData = await getDictionary(lang);

  return (
    <section className="flex flex-col gap-y-6 xl:gap-y-8 max-w-[320px] md:max-w-3xl xl:max-w-7xl mx-auto px-5 md:px-9 xl:px-6">
      <SectionTitle title={staticData.projects.title} />
      <ProjectSwiper projectList={projectList} staticData={staticData} />
    </section>
  );
};
