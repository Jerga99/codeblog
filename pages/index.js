
import { useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import FilteringMenu from 'components/FilteringMenu';

import { getAllBlogs } from 'lib/api';
import { useGetBlogs } from 'actions';

export default function Home({blogs: initialData}) {
  const [filter, setFilter] = useState({
    view: { list: 0 }
  });

  const { data: blogs, error } = useGetBlogs(initialData);

  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          debugger
          setFilter({...filter, [option]: value});
        }}
      />
      <hr/>
      <Row className="mb-5">
        { blogs.map(blog =>
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
        }
      </Row>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const blogs = await getAllBlogs({offset: 6});
  return {
    props: {
      blogs
    }
  }
}
