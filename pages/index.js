
import { useState } from 'react';

import { Row, Button } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';
import PreviewAlert from 'components/PreviewAlert';

import { useGetBlogsPages, renderBlogs } from 'actions/pagination';
import { getPaginatedBlogs } from 'lib/api';

const Pagination = ({filter, initialData}) => {
  const {
    pages,
    isLoadingMore,
    isReachingEnd,
    loadMore
  } = useGetBlogsPages({filter, initialData});

  return (
    <>
      <Row className="mb-5">
        {pages}
      </Row>
      <div style={{textAlign: 'center'}}>
        <Button
          onClick={loadMore}
          disabled={isReachingEnd || isLoadingMore}
          size="lg"
          variant="outline-secondary">
          {isLoadingMore ? '...' : isReachingEnd ? 'No more blogs' : 'More Blogs'}
        </Button>
      </div>
    </>
  )
}

export default function Home({blogs, preview}) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 }
  });

  return (
    <PageLayout>
      { preview && <PreviewAlert /> }
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) =>
          setFilter({...filter, [option]: value})
        }
      />
      <hr/>
      { typeof window === 'undefined' ?
        <>
          <Row className="mb-5">
            {renderBlogs(blogs, filter)}
          </Row>
          <div style={{textAlign: 'center'}}>
            <Button
              disabled={true}
              onClick={() => {}}
              size="lg"
              variant="outline-secondary">...</Button>
          </div>
        </>
        :
        <Pagination filter={filter} initialData={blogs}/>
      }
    </PageLayout>
  )
}

export async function getStaticProps({preview = false}) {
  const blogs = await getPaginatedBlogs({offset: 0, date: 'desc'});
  return {
    props: {
      blogs, preview
    },
    unstable_revalidate: 1
  }
}
