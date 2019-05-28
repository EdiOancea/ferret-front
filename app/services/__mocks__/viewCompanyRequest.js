import { company } from '../../../tools/mockData';

const viewCompanyRequest = jest.fn(
  id => (id === '1' ? company : { message: 'message' }),
);

export default viewCompanyRequest;
