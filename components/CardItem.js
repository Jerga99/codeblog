
import { Card } from 'react-bootstrap';

const CardItem = () => {
  return (
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
  )
}

export default CardItem;
