import PropTypes from 'prop-types';

import { Container } from '../Container';
import { ProjectListItem } from '../ProjectListItem';

export const ProjectStaticList = ({
  projectList,
  staticData,
  setIsModalOpen,
  setImageList,
}) => {
  const isStaticOnly = projectList?.length === 1;

  return (
    <Container>
      <ul
        className={`${
          isStaticOnly ? 'flex' : 'hidden'
        } xl:flex gap-6 justify-center items-center`}
      >
        {projectList.map(project => (
          <li
            key={project.id}
            className="project-slide flex flex-col w-[280px] md:w-[390px] h-[606px] md:h-[658px] rounded-10"
          >
            <ProjectListItem
              project={project}
              staticData={staticData}
              setIsModalOpen={setIsModalOpen}
              setImageList={setImageList}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

ProjectStaticList.propTypes = {
  projectList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      imageList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          image: PropTypes.shape({
            url: PropTypes.string.isRequired,
          }),
          alt: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
  staticData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    overlay: PropTypes.string.isRequired,
  }).isRequired,
  setImageList: PropTypes.func.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};
