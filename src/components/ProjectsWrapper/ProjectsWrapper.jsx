'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

import { GalleryModal } from '../GalleryModal';
import { ProjectSwiper } from '../ProjectSwiper';

export const ProjectsWrapper = ({ projectList, staticData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageList, setImageList] = useState([]);

  return (
    <>
      <ProjectSwiper
        projectList={projectList}
        staticData={staticData}
        setIsModalOpen={setIsModalOpen}
        setImageList={setImageList}
      />

      {isModalOpen && (
        <GalleryModal
          imageList={imageList}
          setIsModalOpen={setIsModalOpen}
          staticData={{
            prevBtn: staticData?.prevBtn,
            nextBtn: staticData?.nextBtn,
          }}
        />
      )}
    </>
  );
};

ProjectsWrapper.propTypes = {
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
    prevBtn: PropTypes.string.isRequired,
    nextBtn: PropTypes.string.isRequired,
  }).isRequired,
};
