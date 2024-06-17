//----- Componenti react
import { React } from "react";
//----- Componenti react-bootstrap
import { Row, Col, Form } from "react-bootstrap";

//----- SearchForm.jsx
function SearchForm({ search, handleSearch }) {
  return (
    <Row>
      <Col>
        <Form.Group className="m-3">
          <Form.Control
            type="search"
            placeholder={`cerca in "${search}"...`}
            value={search}
            onChange={handleSearch}
          />
        </Form.Group>
      </Col>
    </Row>
  );
}

export default SearchForm;
