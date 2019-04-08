import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSignIn = state => state.get('signIn');

const makeSelectToken = () => createSelector(selectSignIn, signIn => signIn.get('token'));
const makeSelectMessage = () => createSelector(selectSignIn, signIn => signIn.get('message'));

export {
  makeSelectToken,
  makeSelectMessage,
};
