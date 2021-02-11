import React from "react";
import "./Projects.scss";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';

class Projects extends React.Component {
  render() {
    const { blurb1, blurb2, blurb3, title1, title2, title3, image1, image2, image3, alt1, alt2, alt3 } = this.props;
    return (
      <Container>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={image1} alt={alt1} />
          <Card.Body>
            <Card.Title>{title1}</Card.Title>
            <Card.Text>
              {blurb1}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">icons here</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={image2} alt={alt2} />
          <Card.Body>
            <Card.Title>{title2}</Card.Title>
            <Card.Text>
              {blurb2}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">icons here</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={image3} alt={alt3} />
          <Card.Body>
            <Card.Title>{title3}</Card.Title>
            <Card.Text>
              {blurb3}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">icons here</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      </Container>
    );
  }
}

export default Projects;
