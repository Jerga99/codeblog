
import PageLayout from 'components/PageLayout';
import { getBlogBySlug, getAllBlogs } from 'lib/api';

const BlogDetail = ({blog}) => {
  return (
    <PageLayout>
      <h1>Hello Detail Page - {blog?.slug}</h1>
    </PageLayout>
  )
}

export async function getStaticProps({params}) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {blog}
  }
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  return {
    paths: blogs?.map(b => ({params: {slug: b.slug}})),
    fallback: false
  }
}

export default BlogDetail;
