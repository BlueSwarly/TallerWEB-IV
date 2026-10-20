// src/App.jsx
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [healthMsg, setHealthMsg] = useState('');
  const [infoData, setInfoData] = useState(null);

  // Requirement 6: Endpoints consumidos desde el Frontend
  useEffect(() => {
    fetch('http://localhost:3000/api/health')
      .then(res => res.json())
      .then(data => setHealthMsg(data.message))
      .catch(err => console.error(err));

    fetch('http://localhost:3000/api/info')
      .then(res => res.json())
      .then(data => setInfoData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container className="py-5">
      {/* Requirement 3: Título */}
      <h1>Taller IV</h1>

      {/* Requirement 4: Etiquetas section, div, h4, p y CSS */}
      <section className="health-section mt-4">
        <div className="health-container">
          <h4>Estado del Sistema (Sin bizarearse)</h4>
          <p>{healthMsg || 'La API esta cargando su estado'}</p>
        </div>
      </section>

      {/* Requirement 5: Componentes de Reactstrap para la info */}
      {infoData && (
        <div className="mt-5">
          <h3 className="mb-4 text-primary">{infoData.status}</h3>
          <Row>
            {infoData.integrantes.map((miembro, index) => (
              <Col md="6" lg="4" key={index}>
                <Card className="mb-4 shadow-sm border-0">
                  <CardBody>
                    <CardTitle tag="h5" className="fw-bold">{miembro.nombre}</CardTitle>
                    <CardSubtitle className="mb-3 text-muted" tag="h6">
                      Edad: {miembro.edad} años
                    </CardSubtitle>
                    <CardText>
                      <strong>Carrera:</strong> {miembro.carrera} <br />
                      <strong>Materias Aprobadas:</strong> {miembro.materiasAprobadas}
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
}

export default App;