import PropTypes from 'prop-types';

import { SectionTitle } from '@/components/SectionTitle';
import { ProjectsWrapper } from '@/components/ProjectsWrapper';

import { fetchProjects } from '@/utils/api/fetchProjects';

export const Projects = async ({ lang, projects }) => {
  const { projectList } = await fetchProjects({
    locale: lang,
  });

  return (
    <section className="section mx-auto">
      <SectionTitle title={projects.title} />
      <ProjectsWrapper projectList={projectList} staticData={projects} />
    </section>
  );
};

Projects.propTypes = {
  lang: PropTypes.string.isRequired,
};
