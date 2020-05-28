
import { Container, Row, Col, Navbar, Nav, Media, Image, Card } from 'react-bootstrap';

<Container>
  {/* NAVBAR STARTS */}
  <Navbar
    className="fj-navbar fj-nav-base"
    bg="transparent"
    expand="lg" >
    <Navbar.Brand className="fj-navbar-brand">
      <a href="#">Filip-Jerga</a>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link
          className="fj-navbar-item fj-navbar-link"
          href='/'>Home
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  {/* NAVBAR ENDS */}
  <div className='blog-detail-page'>
    <Row>
      <Col md="8">
        {/* AUTHOR INTRO STARTS */}
        <Media className="mb-4 admin-intro">
          <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src="https://avatars1.githubusercontent.com/u/9482724?s=460&u=69a6acab13fd5547a4e316e496b573271077147f&v=4"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
            <p className="welcome-text">
            My name is Filip Jerga and I am an experienced software engineer and freelance developer.
            and this is my blog page.
            </p>
          </Media.Body>
        </Media>
        {/* AUTHOR INTRO ENDS */}
      </Col>
    </Row>
    <hr/>
    {/* className from props */}
    <div className={`page-wrapper`}>
      <Row className="mb-5">
        <Col md="10">
          {/* CardListItem STARTS */}
          <Card className={`fj-card fj-card-list`}>
            <div className="card-body-wrapper">
              <Card.Header
                className="d-flex flex-row">
                <img
                  src={'https://via.placeholder.com/150'}
                  className="rounded-circle mr-3"
                  height="50px"
                  width="50px"
                  alt="avatar"/>
                  <div>
                    <Card.Title className="font-weight-bold mb-1">Placeholder Author</Card.Title>
                    <Card.Text className="card-date">Placeholder Date</Card.Text>
                  </div>
              </Card.Header>
              <Card.Body>
                <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                <Card.Text>Placehodler Subtitle</Card.Text>
              </Card.Body>
            </div>
            <a href="#" className="card-button">
              Read More
            </a>
          </Card>
          {/* CardListItem ENDS */}
        </Col>

        <Col md="4">
          <Card className={`fj-card`}>
            <div className="card-body-wrapper">
              <Card.Header
                className="d-flex flex-row">
                <img
                  src={'https://via.placeholder.com/150'}
                  className="rounded-circle mr-3"
                  height="50px"
                  width="50px"
                  alt="avatar"/>
                <div>
                  <Card.Title className="font-weight-bold mb-1">Placeholder Author</Card.Title>
                  <Card.Text className="card-date">Placeholder Date</Card.Text>
                </div>
              </Card.Header>
              <div className="view overlay">
                <Card.Img
                  src='https://via.placeholder.com/250'
                  alt="Card image cap"
                />
              </div>
              <Card.Body>
                <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                <Card.Text>Placehodler Subtitle</Card.Text>
              </Card.Body>
            </div>
            <a className="card-button">
              Read More
            </a>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
  <footer className="page-footer">
    <div>
      <a href="#">courses</a>{' | '}
      <a href="#">github</a>{' | '}
      <a href="#">facebook</a>
    </div>
  </footer>
</Container>
