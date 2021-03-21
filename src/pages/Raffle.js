import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

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
    }, 6000);
  };

  return (
    <>
      <section className="block raffle-block">
        <Container>
          <h2>Sorteos</h2>
          <Row>
            {prizes && prizes.map(prize => {
              return (
                <Col key={prize.id} xs="12">
                  <div className={'prize-item ' + (!loading[prize.id] && winners[prize.id] ? 'has-winner' : '')}>
                    <div className="item-image">
                      <img src={prize.image} alt={prize.name} />
                    </div>
                    <div className="item-name">{prize.name}</div>
                    {!loading[prize.id] ? (
                      <>
                        {winners[prize.id] && (
                          <div className="item-winner">
                            Ganador: <strong>{winners[prize.id]}</strong>
                          </div>
                        )}
                        {!winners[prize.id] && <Button size="lg" onClick={() => raffle(prize.id)}>Sortear</Button>}
                      </>
                    ) : (
                      <Button size="lg" disabled>
                        <FontAwesomeIcon icon={faSpinner} spin />
                        Sorteando...
                      </Button>
                    )}
                  </div>
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
