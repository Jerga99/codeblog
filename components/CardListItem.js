
import { Card } from 'react-bootstrap';

const CardListItem = () => {
  return (
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
  )
}

export default CardListItem;
