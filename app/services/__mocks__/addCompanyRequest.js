import { company } from '../../../tools/mockData';

const addCompanyRequest = jest.fn(
  data => (data === 1 ? company : { message: 'message' }),
);

export default addCompanyRequest;
