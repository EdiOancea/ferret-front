import { company } from '../../../tools/mockData';

const getCompanyRequest = jest.fn(
  id => (id === '1' ? company : { message: 'message' }),
);

export default getCompanyRequest;
