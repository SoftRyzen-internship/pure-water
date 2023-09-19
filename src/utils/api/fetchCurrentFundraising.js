import { datoCmsRequest } from '../datoCmsRequest';
import { getCurrentFundraising } from '../queries/getCurrentFundraising';

export const fetchCurrentFundraising = async variables => {
  try {
    const data = await datoCmsRequest(getCurrentFundraising, variables);

    return data.fundraising;
  } catch (error) {
    return {};
  }
};
