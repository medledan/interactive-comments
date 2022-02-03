import React from 'react';
import './comment.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Amy from '../../../Data/images/avatars/image-amyrobson.png';
import { Vote } from '../Vote/Vote';

export const Comment = () => {
  return (
    <Container className="comment-container d-flex">
      <Card className="p-2">
        <Row xs={2} md={4} lg={6}>
          <Col className="d-flex p-2">
            <Card.Img
              className="comment-avatar--img ms-3"
              variant="top"
              src={Amy}
            />
            <Card.Title className="ms-3">amyrobson</Card.Title>
            <Card.Text className="ms-3">1 month ago</Card.Text>
          </Col>
          <Col>
            <Card.Text className="p-2">Reply</Card.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Body>
              <Card.Text>
                Impressive! Though it seems the drag feature could be improved.
                But overall it looks incredible. You've nailed the design and
                the responsiveness at various breakpoints works really well.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};
