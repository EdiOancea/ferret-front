import { GET_USER } from './constants';

export const getUser = id => ({
  type: GET_USER,
  id,
});
