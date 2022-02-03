import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Comments } from './Comments/Comments';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Comments />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
