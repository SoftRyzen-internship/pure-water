'use client';

import { useState } from 'react';
import { GalleryModal } from '../GalleryModal';
import { ProjectSwiper } from '../ProjectSwiper';
import { SectionTitle } from '../SectionTitle';

export const ProjectsWrapper = ({ projectList, staticData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageList, setImageList] = useState([]);

  return (
    <>
      <SectionTitle title={staticData.projects.title} />
      <ProjectSwiper
        projectList={projectList}
        staticData={staticData}
        setIsModalOpen={setIsModalOpen}
        setImageList={setImageList}
      />

      {isModalOpen && (
        <GalleryModal imageList={imageList} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};
