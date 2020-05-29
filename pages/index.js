

import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';

import { getAllBlogs } from 'lib/api';

export default function Home({blogs}) {
  debugger
  return (
    <PageLayout>
      <AuthorIntro />
      <hr/>
      <Row className="mb-5">
        {/* <Col md="10">
          <CardListItem />
        </Col> */}
        { blogs.map(blog =>
          <Col key={blog.slug} md="4">
            <CardItem
              title={blog.title}
              subtitle={blog.subtitle}
              date={blog.date}
              image={blog.coverImage}
            />
          </Col>
          )
        }
      </Row>
    </PageLayout>
  )
}

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
