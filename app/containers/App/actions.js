import { SHOW_LOADER, HIDE_LOADER, SIGN_OUT } from './constants';

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
