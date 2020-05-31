
import PageLayout from 'components/PageLayout';
import { getBlogBySlug } from 'lib/api';

const BlogDetail = ({blog}) => {
  return (
    <PageLayout>
      <h1>Hello Detail Page - {blog?.slug}</h1>
    </PageLayout>
  )
}

export async function getServerSideProps({params}) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {blog}
  }
}

export default BlogDetail;
