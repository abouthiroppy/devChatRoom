// @flow

export const fetchCategories = () => ({
  type: 'FETCH_CATEGORIES'
});

export const fetchPodCasts = (key) => ({
  type: 'FETCH_POD_CASTS',
  key
});

export const fetchPodCast = (key) => ({
  type: 'FETCH_POD_CAST',
  key
});

export const setCurrentCategory = (category) => ({
  type: 'SET_CURRENT_CATEGORY',
  category
});
