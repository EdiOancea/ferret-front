import { createSelector } from 'reselect';

const selectRouter = state => state.get('router');
const selectApp = state => state.get('app');

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

const selectToken = () =>
  createSelector(selectApp, appState => appState.get('token'));

export { makeSelectLocation, selectToken };
