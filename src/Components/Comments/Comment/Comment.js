import React from 'react';
import './comment.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Amy from '../../../Data/images/avatars/image-amyrobson.png';
import { Vote } from '../Vote/Vote';

export const Comment = () => {
  return (
    <Card className="p-4 mt-3 shadow-lg rounded-3">
      <Row>
        <Col xs={2} md={2}>
          <Vote />
        </Col>
        <Col>
          <Row className="align-items-center p">
            <Col xs={2} md={2} className="p-2">
              <Card.Img
                className="img-responsive test"
                variant="top"
                src={Amy}
              />
            </Col>
            <Col xs={5} md={3}>
              <Card.Text className="text-nowrap text-center">
                amyrobson
              </Card.Text>
            </Col>
            <Col xs={5} md={3}>
              <Card.Text className="text-nowrap fw-light text-left">
                1 month ago
              </Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Body>
                <Card.Text>
                  Impressive! Though it seems the drag feature could be
                  improved. But overall it looks incredible. You've nailed the
                  design and the responsiveness at various breakpoints works
                  really well.
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
          <Row>
            <Card.Text className="text-end">Reply</Card.Text>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};
