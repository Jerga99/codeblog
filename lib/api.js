
import client from './sanity';

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  'coverImage': coverImage.asset->url
`

export async function getAllBlogs() {
  const results = await client
    .fetch(`*[_type == "blog"]{${blogFields}}`);
  return results;
}


export async function getBlogBySlug(slug) {
  const result = await client
    .fetch(`*[_type == "blog" && slug.current == $slug] {
      ${blogFields}
    }`, {slug})
    .then(res => res?.[0])

  return result;

}
