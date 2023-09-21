import { ProjectSwiper } from '@/components/ProjectSwiper';
import { fetchProjects } from '@/utils/api/fetchProjects';
import { getDictionary } from '@/utils/getDictionary';

export const Projects = async ({ lang }) => {
  const { projectList } = await fetchProjects({
    locale: lang,
  });

  const staticData = await getDictionary(lang);

  return (
    <section className="max-w-[320px] mx-auto">
      <ProjectSwiper projectList={projectList} staticData={staticData} />
    </section>
  );
};
