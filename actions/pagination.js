

import { useSWRInfinite } from 'swr';
import { getBlogs } from 'actions';

export const useGetBlogsPages = ({filter}) => {
  const result = useSWRInfinite(
    (index, previousPageData) => {
      if (index === 0 ) {
        return `/api/blogs?date=${filter.date.asc ? 'asc' : 'desc'}`
      }

      if (!previousPageData.length) {
        return null
      }

      return `/api/blogs?offset=${index * 6}&date=${filter.date.asc ? 'asc' : 'desc'}`
    },
    getBlogs,
  )

  let hitEnd = false;
  const { data } = result;

  if (data) {
    hitEnd = data[data.length - 1].length === 0
  }

  return {...result, hitEnd}
}

