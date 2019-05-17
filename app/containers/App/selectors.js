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
