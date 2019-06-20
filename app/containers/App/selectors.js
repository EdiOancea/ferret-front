import { createSelector } from 'reselect';

const selectAppDomain = state => state.get('app');

export const selectToken = createSelector(
  selectAppDomain,
  appState => appState.get('token')
);

export const selectLoading = createSelector(
  selectAppDomain,
  appState => appState.get('isLoading')
);

export const selectLoggedUser = createSelector(
  selectAppDomain,
  appState => appState.get('loggedUser')
);

export const selectLoggedUserMeta = createSelector(
  selectLoggedUser,
  loggedUser => loggedUser.get('meta')
);

export const selectLoggedUserId = createSelector(
  selectLoggedUser,
  loggedUser => loggedUser.get('id')
);
