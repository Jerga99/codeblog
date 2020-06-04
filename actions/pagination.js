
import { useEffect } from 'react';

import { useSWRPages } from 'swr';
import { useGetBlogs } from 'actions';
import { Col } from 'react-bootstrap';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';

export const useGetBlogsPages = ({blogs, filter}) => {

  useEffect(() => {
    window.__pagination__init = true;
  }, [])

  return useSWRPages(
    'index-page',
    ({offset, withSWR}) => {
      let initialData = !offset && blogs;

      if (typeof window !== 'undefined' && window.__pagination__init) {
        initialData = null;
      }

      const { data: paginatedBlogs } =  withSWR(useGetBlogs({offset, filter}, initialData));
      if (!paginatedBlogs) { return 'Loading...'}

      return paginatedBlogs
        .map(blog =>
        filter.view.list ?
          <Col key={`${blog.slug}-list`} md="9">
            <CardListItem
              author={blog.author}
              title={blog.title}
              subtitle={blog.subtitle}
              date={blog.date}
              link={{
                href: '/blogs/[slug]',
                as: `/blogs/${blog.slug}`
              }}
            />
          </Col>
          :
          <Col key={blog.slug} md="4">
            <CardItem
              author={blog.author}
              title={blog.title}
              subtitle={blog.subtitle}
              date={blog.date}
              image={blog.coverImage}
              link={{
                href: '/blogs/[slug]',
                as: `/blogs/${blog.slug}`
              }}
            />
          </Col>
        )
    },
    // here you will compute offset that will get passed into previous callback function with 'withSWR'
    // SWR: data you will get from 'withSWR' function
    // index: number of current page
    (SWR, index) => {
      if (SWR.data && SWR.data.length === 0) { return null; }
      return (index + 1) * 3;
    },
    [filter]
  )
}
