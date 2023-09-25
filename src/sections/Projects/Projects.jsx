import PropTypes from 'prop-types';

import { ProjectsWrapper } from '@/components/ProjectsWrapper';
import { fetchProjects } from '@/utils/api/fetchProjects';
import { getDictionary } from '@/utils/getDictionary';
import { SectionTitle } from '@/components/SectionTitle';

export const Projects = async ({ lang }) => {
  const { projectList } = await fetchProjects({
    locale: lang,
  });

  const { projects } = await getDictionary(lang);

  return (
    <section className="flex flex-col gap-y-6 xl:gap-y-8 max-w-[320px] md:max-w-3xl xl:max-w-7xl mx-auto px-5 md:px-9 xl:px-6 py-[30px] md:py-10 xl:py-20">
      <SectionTitle title={projects.title} />
      <ProjectsWrapper projectList={projectList} staticData={projects} />
    </section>
  );
};

Projects.propTypes = {
  lang: PropTypes.string.isRequired,
};
