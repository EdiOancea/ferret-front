import { createSelector } from 'reselect';

const selectRouter = state => state.get('router');
const selectApp = state => state.get('app');

export const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

export const selectToken = createSelector(selectApp, appState =>
  appState.get('token'),
);

export const selectLoading = createSelector(selectApp, appState =>
  appState.get('loading'),
);
