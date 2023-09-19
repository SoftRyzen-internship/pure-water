import { datoCmsRequest } from '../datoCmsRequest';
import { getCurrentFundraising } from '../queries/getCurrentFundraising';

export const fetchCurrentFundraising = async variables => {
  try {
    const data = await datoCmsRequest({ getCurrentFundraising, variables });
    console.log('data:', data);

    // const result = data.prices.data;
    return data;
  } catch (error) {
    return {};
  }
};
