import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function Raffle() {
  const [supporters, setSupporters] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [prizes, setPrizes] = useState([]);
  const [winners, setWinners] = useState({});
  const [loading, setLoading] = useState({});

  const loadSupporters = () => {
    fetch('supporters.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => {
      return response.json();
    }).then(json => {
      setSupporters(json);
    });
  };

  const loadPrizes = () => {
    fetch('prizes.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => {
      return response.json();
    }).then(json => {
      setPrizes(json);
    });
  };

  useEffect(() => {
    loadSupporters();
    loadPrizes();
  }, []);

  useEffect(() => {
    generateTickets();
  }, [supporters]);

  const generateTickets = () => {
    const _tickets = [];
    supporters.forEach(supporter => {
      for (let i = 0; i < supporter.tickets; i++) {
        _tickets.push(supporter.name);
      }
    });
    setTickets(_tickets);
  };

  const returnAndRemoveTicket = (index) => {
    const _tickets = [...tickets];
    const ticket = _tickets[index];
    _tickets.splice(index, 1);
    setTickets(_tickets);
    return ticket;
  };

  const randomTicket = () => {
    const min = 0;
    const max = tickets.length - 1;
    const randomIndex = Math.ceil(min + Math.random() * (max - min));
    return returnAndRemoveTicket(randomIndex);
  };

  const startLoading = (prize) => {
    const _loading = {...loading};
    _loading[prize] = true;
    setLoading(_loading);
  };

  const stopLoading = (prize) => {
    const _loading = {...loading};
    _loading[prize] = false;
    setLoading(_loading);
  };

  const raffle = (prize) => {
    startLoading(prize);
    setTimeout(() => {
      const _winners = {...winners};
      const ticket = randomTicket();
      _winners[prize] = ticket
      setWinners(_winners);
      stopLoading(prize);
    }, 10000);
  };

  return (
    <>
      <section className="block raffle-block">
        <Container>
          <h2>Sorteos</h2>

          <Row>
            {prizes && prizes.map(prize => {
              return (
                <Col key={prize}>
                  {prize}
                  {!loading[prize] ? (
                    <>
                      {winners[prize] && (
                        <div>
                          Ganador: {winners[prize]}
                        </div>
                      )}
                      {!winners[prize] && <button onClick={() => raffle(prize)}>Sortear</button>}
                    </>
                  ) : (
                    <div>Sorteando...</div>
                  )}
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Raffle;
