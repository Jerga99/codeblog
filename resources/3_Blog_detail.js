
import { Row, Col } from 'react-bootstrap'

<PageLayout className="blog-detail-page">
  <Row>
    <Col md={{ span: 10, offset: 1 }}>
      <div className="blog-detail-header">
        <p className="lead mb-0">
          <img
            src={'https://via.placeholder.com/150'}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"/>
          Author Name
          {', '} Blog Date
        </p>
        <h1 className="font-weight-bold blog-detail-header-title mb-0">Blog Title</h1>
        <h2 className="blog-detail-header-subtitle mb-3">Blog Subtitle</h2>
          {/* Check if contains cover image */}
          <img
            className="img-fluid rounded"
            src='https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1689&q=60' alt=""/>

      </div>
      <hr/>
      {/* Blog Content Here */}
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </Col>
  </Row>
</PageLayout>
