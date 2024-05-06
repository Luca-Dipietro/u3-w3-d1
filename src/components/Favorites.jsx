import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.content);

  return (
    <Container>
      <Row>
        <h1 className="display-4">Favorite Companies</h1>
        {favorites.map((company, index) => (
          <Row className="mx-0 mt-3 p-3 align-items-center" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
            <Col xs={3} key={index}>
              <Link to={`/${company.company_name}`}>{company.company_name}</Link>
            </Col>
            <Col xs={9}>
              <a href={company.url} target="_blank" rel="noreferrer">
                {company.title}
              </a>
            </Col>
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default Favorites;
