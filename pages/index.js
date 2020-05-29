
import { useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';

import { getAllBlogs } from 'lib/api';

export default function Home({blogs, randomNumber}) {
  console.log('Hello World');

  useEffect(() => {
    console.log(blogs);
  })

  return (
    <PageLayout>
      <AuthorIntro />
      <hr/>
      <h1>{randomNumber}</h1>
      <Row className="mb-5">
        {/* <Col md="10">
          <CardListItem />
        </Col> */}
        { blogs.map(blog =>
          <Col key={blog.slug} md="4">
            <CardItem
              title={blog.title}
              subtitle={blog.subtitle}
            />
          </Col>
          )
        }
      </Row>
    </PageLayout>
  )
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps() {
  const randomNumber = Math.random();
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
      randomNumber
    }
  }
}

// export async function getServerSideProps() {
//   const randomNumber = Math.random();
//   const blogs = await getAllBlogs();
//   return {
//     props: {
//       blogs,
//       randomNumber
//     }
//   }
// }

// Static Page
// Faster, can be cached using CDN
// Created at build time
// When we making the request we are always receiving the same html document

// Dynamic Page
// Created at request time (we can fetch data on server)
// Little bit slower, the time depends on data you are fetching

