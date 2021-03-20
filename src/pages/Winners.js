import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function Winners() {
  const [winners, setWinners] = useState([]);

  const loadSupporters = () => {
    fetch('winners.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => {
      return response.json();
    }).then(json => {
      setWinners(json);
    });
  };

  useEffect(() => {
    loadSupporters();
  }, []);

  return (
    <section className="block winners-block">
      <Container>
        <h2>Ganadores</h2>

        <Row>
          {winners && winners.map(winner => {
            return (
              <Col key={winner.name+winner.prize}>
                {winner.name} {winner.prize}
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Winners;
