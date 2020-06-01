
import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from 'components/HighlightCode';

const serializers = {
  types: {
    code: ({node: {language, code, filename}}) => {
      return (
        <HighlightCode language={language}>
          {code}
          <div className="code-filename">{filename}</div>
        </HighlightCode>
      )
    }
  }
}

const BlogContent = ({content}) =>
  <BlockContent
    imageOptions={{w: 320, h: 240, fit: 'max'}}
    serializers={serializers}
    blocks={content}
  />

export default BlogContent;
