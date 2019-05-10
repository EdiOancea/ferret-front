import { createSelector } from 'reselect';

export const selectUser = state => state.get('user');

export const selectUserName = createSelector(selectUser, user =>
  user.get('name'),
);

export const selectUserLoading = createSelector(selectUser, user =>
  user.get('loading'),
);
