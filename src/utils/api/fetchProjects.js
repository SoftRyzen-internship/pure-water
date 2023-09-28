import { datoCmsRequest } from '../datoCmsRequest';
import { getProjects } from '../queries/getProjects';

export const fetchProjects = async variables => {
  try {
    const data = await datoCmsRequest(getProjects, variables);

    return data.project;
  } catch (error) {
    return {};
  }
};
