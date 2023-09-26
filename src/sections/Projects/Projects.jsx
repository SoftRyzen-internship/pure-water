import PropTypes from 'prop-types';

import { ProjectsWrapper } from '@/components/ProjectsWrapper';
import { fetchProjects } from '@/utils/api/fetchProjects';
import { getDictionary } from '@/utils/getDictionary';
import { SectionTitle } from '@/components/SectionTitle';
import { Container } from '@/components/Container';

export const Projects = async ({ lang }) => {
  const { projectList } = await fetchProjects({
    locale: lang,
  });

  const { projects } = await getDictionary(lang);

  return (
    <Container>
      <section className="section mx-auto">
        <SectionTitle title={projects.title} />
        <ProjectsWrapper projectList={projectList} staticData={projects} />
      </section>
    </Container>
  );
};

Projects.propTypes = {
  lang: PropTypes.string.isRequired,
};
