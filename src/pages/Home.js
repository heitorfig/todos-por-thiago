import moment from 'moment';
import { useState, useEffect, useRef } from 'react';
import { Col, Container, ProgressBar, Row, Button, Modal, Image, Form, Table } from 'react-bootstrap';
import Moment from 'react-moment';

function Home() {
  const [show, setShow] = useState(false);
  const [showImportant, setShowImportant] = useState(true);
  const [data, setData] = useState([]);
  const [prizes, setPrizes] = useState([]);
  const [ticketsValue, setTicketsValue] = useState(0);
  const ticketsRef = useRef(null);

  const handleImportantClose = () => {
    setShowImportant(false);
  };

  const handleClose = () => {
    setShow(false);
    // eslint-disable-next-line no-undef
    gtag('event', 'modal_closed_no', {
      'event_category': 'engagement',
      'event_label': 'Closed Modal',
      'value': 'not_so_good_person',
    });
  };
  const handleConfirm = () => {
    setShow(false);
    setTimeout(() => {
      scrollToTickets();
    }, 500);
    // eslint-disable-next-line no-undef
    gtag('event', 'modal_closed_yes', {
      'event_category': 'engagement',
      'event_label': 'Closed Modal',
      'value': 'good_person',
    });
  };
  const handleShow = () => {
    setShow(true);
    // eslint-disable-next-line no-undef
    gtag('event', 'modal_open', {
      'event_category': 'engagement',
      'event_label': 'Opened Modal'
    });
  };
  const scrollToTickets = () => ticketsRef.current.scrollIntoView();

  const loadData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => {
      return response.json();
    }).then(json => {
      setData(json);
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

  const handleTicketAmoutChange = (e) => {
    const value = +e.target.value;
    // eslint-disable-next-line no-undef
    gtag('event', 'tickets_selected', {
      'event_category': 'engagement',
      'event_label': 'Selected Tickets',
      'value': value,
    });
    setTicketsValue(value);
  };

  useEffect(() => {
    loadData();
    loadPrizes();
  }, []);

  return (
    <>
      <section className="funding-stats">
        <Container>
          <Row>
            <Col>
              <header className="funding-stats-header mt-5 mb-5">
                <h2>Rifa Solidaria</h2>
                <p>Todos por Thiago es una iniciativa para ayudar al niño Thiaguito y su familia. El tiene Fibrosis Quística; una enfermedad genética que afecta fuertemente los pulmones, el páncreas, el hígado y los intestinos.</p>
                <Button variant="outline-primary" size="sm" onClick={handleShow}>Leer más</Button>
              </header>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 0 }} md={{ span: 6 }}>
              <iframe width="100%" height="330" src="https://www.youtube.com/embed/zc0Y1iNKgY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
            <Col xs={{ order: 0 }} sm={{ order: 1 }}>
              <div className="funding-stats-details mb-5">
                <ProgressBar now={data.funded/4675*100} className="mb-4" />
                <div className="stat stat-primary">
                  <div className="stat-value"><small>S./</small> {data.funded},00</div>
                  <div className="stat-label">recaudados del objetivo de <small>S./</small> 5.000,00</div>
                </div>
                <div className="stat">
                  <div className="stat-value">{data.tickets_sold}</div>
                  <div className="stat-label">tickets reservados</div>
                </div>
                <div className="stat">
                  <div className="stat-value">{data.supporters}</div>
                  <div className="stat-label">
                    <a href="https://docs.google.com/spreadsheets/d/1fKNWKHsDxb1zIAg13pdKzBFjfuy2W0Yi1aHju3fo9mM/edit?usp=sharing" target="_blank" rel="noreferrer" className="stat-link">personas apoyando</a>
                  </div>
                </div>
                {/* <div className="stat">
                  <div className="stat-label">El sorteo será</div>
                  <div className="stat-value">
                    <Moment locale="es-mx" to="2021-05-07T19:00-05:00">{moment.now()}</Moment>
                  </div>
                  <div className="stat-label"><small>07 de mayo de 2021 - 19:00 (Horário de Peru)</small></div>
                </div> */}
                <div className="stat">
                  <div className="stat-value">Sorteo en vivo</div>
                  <div className="stat-label">
                    ahora en <a href="https://instagram.com/anapaulach22" target="_blank" rel="noreferrer" className="stat-link">@anapaulach22</a> o <a href="https://instagram.com/hola_mellamothiago" target="_blank" rel="noreferrer" className="stat-link">@hola_mellamothiago</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="block prizes-block">
        <Container>
          <h2>Premios</h2>
          <ul className="prizes-list">
            {prizes && prizes.map(prize => {
              return (
                <li key={prize.id}>{prize.name}</li>
              );
            })}
          </ul>
          <p><small>* Se realizarán sorteos individuales para cada premio.</small></p>
        </Container>
      </section>

      <section className="block buy-tickets-block" ref={ticketsRef}>
        <Container>
          <h2>Adquirir tickets</h2>

          <Form inline className="buy-tickets-form">
            <Form.Label className="my-1 mr-2">
              ¿Cuantos tickets deseas adquirir?
            </Form.Label>
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              custom
              onChange={handleTicketAmoutChange}
            >
              <option value="">Cant. de tickets</option>
              <option value="5">1</option>
              <option value="10">3</option>
              <option value="20">6</option>
              <option value="30">9</option>
              <option value="40">12</option>
              <option value="50">15</option>
              <option value="60">18</option>
              <option value="70">21</option>
              <option value="80">24</option>
              <option value="90">27</option>
              <option value="100">30</option>
              <option value="200">60</option>
              <option value="300">90</option>
              <option value="400">120</option>
              <option value="500">150</option>
            </Form.Control>
            {ticketsValue > 0 && (
              <Form.Label className="my-1 mr-2">
                Entonces, el valor que necesitas transferir es de <strong className="ml-2 text-white">S./ {ticketsValue},00</strong>
              </Form.Label>
            )}
          </Form>
        </Container>
      </section>

      <section className="block accounts-block">
        <Container>
          <p>Para participar de la rifa, haga una transferencia a una de las cuentas abajo y envie el voucher de pago y su nombre para <a href="mailto:todos.por.thiago@gmail.com">todos.por.thiago@gmail.com</a>.</p>

          <Table striped bordered hover responsive="sm" size="sm">
            <thead>
              <tr>
                <th>Yape</th>
                <th>BCP</th>
                <th>Interbank</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>933401577</td>
                <td>Sandy Cotito Asalde<br />
                  N 191 37734388041
                </td>
                <td>
                  6433103470402<br />
                  CCI 003 643 01310347040246
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </section>

      <Modal show={showImportant} onHide={handleImportantClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Aviso Importante</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Comunicamos a las personas que están participando en el sorteo y ayudando a Thiaguito, que lamentablemente por razones personales de la familia de Thiago, el sorteo que ocurriría el 30 de abril tendrá que ser pospuesto hasta el 7 de mayo.</p>
          <p>Agradecemos y contamos con la comprensión de todos y por favor estén orando por la familia de la Sra. Sandy y Thiaguito.</p>
        </Modal.Body>
      </Modal>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Todos por Thiago</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Rifa Solidaria - Todos por Thiago es una iniciativa para ayudar al niño Thiaguito y su familia.<br />El tiene Fibrosis Quística; una enfermedad genética que afecta fuertemente los pulmones, el páncreas, el hígado y los intestinos.</p>
          <p>Esta enfermedad no tiene cura, solo tratamientos avanzados y costosos que permiten que el paciente que la padece tenga una mejor calidad de vida.</p>
          <p>Lamentablemente, los papás de Thiaguito no cuentan con los medios económicos para solventar estos tratamientos y la falta de ello ha hecho con que Thiago termine en el hospital, con fuertes infecciones y sensaciones de ahogo.</p>
          <p>Para ayudar a la familia con los costos de estos tratamientos se ha organizado una rifa solidaria con lindos premios, los cuales fueron donados con mucho amor, para esta noble causa. Te invito a que participes. Cualquier ayuda es bienvenida.</p>
          <p><Image src="https://scontent.fbau3-1.fna.fbcdn.net/v/t1.0-9/160242355_10160841175151258_7816022352069995779_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=FRSNL9CWTHgAX8NI5ei&_nc_ht=scontent.fbau3-1.fna&oh=32f5a69500401ae76d58ef1ffdcfa1da&oe=606FAEBB" fluid /></p>
          <p>El dinero debe ser depositado directamente a la cuenta de la señora Sandy (mami de Thiago) y los vouchers de pago enviados al e-mail: <a href="mailto:todos.por.thiago@gmail.com">todos.por.thiago@gmail.com</a></p>
          <p>Si vives en el extranjero también puedes hacer tu donación a través de este link: <a href="https://www.gofundme.com/f/2zjt7-ayudenme-a-seguir-viviendo" target="_blank" rel="noreferrer">GoFundMe - Ayudenme a Seguir Viviendo</a></p>
          <p>Pueden seguir la historia de Thiago por Facebook: "Ayúdenme a seguir viviendo" o por Instagram: <a href="https://instagram.com/hola_mellamothiago" target="_blank" rel="noreferrer">@hola_mellamothiago</a></p>
          <p>DIVULGUE, DONE, COMPARTA ❤️</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            No quiero apoyar ahora!
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Apoyar ahora!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;
