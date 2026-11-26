import type { Post } from '../hooks/useFetch';
export const getOptionLabel = (option: Post) => {
  return option.title;
};

export const getOptionKey = (option: Post) => {
  return option.id;
};
