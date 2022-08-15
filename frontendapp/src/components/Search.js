import { Container, Row, Col,Button,Form } from "react-bootstrap";
import React from "react";

const Search = ({handleSubmit,word,setword}) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col xs={9}>
                <Form.Control 
                type="text" 
                value={word} 
                onChange={(e)=>setword(e.target.value)}
                placeholder="search new image" />
              </Col>
              <Col>
                <Button variant="primary" type="submit">Search</Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
