import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IoBulbSharp } from 'react-icons/io5';

import Upload from '../components/Upload'
import ViewSolution from '../components/ViewSolution';
import '../App.css';

function Home() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  return (
    <div >
      <h1 className="text-warning mb-5">Light-up
        <IoBulbSharp className="text-warning" size="40" />
      </h1>
      <Container>
        <Row>
          <Col><Upload /></Col>
          <ViewSolution />
        </Row>
      </Container>
    </div>
  );
}
export default Home;