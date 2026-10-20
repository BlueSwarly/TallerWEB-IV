import { useEffect, useState } from "react";
import {
  Container, Card, CardBody, CardTitle,
  ListGroup, ListGroupItem, Badge, Alert, Spinner,
} from "reactstrap";
import "./App.css";

const API = "http://localhost:3000/api";

function App() {
  const [health, setHealth] = useState(null);
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API}/health`)
      .then((r) => r.json())
      .then(setHealth)
      .catch(() => setError("No se pudo conectar con el API"));

    fetch(`${API}/info`)
      .then((r) => r.json())
      .then(setInfo)
      .catch(() => setError("No se pudo conectar con el API"));
  }, []);

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Taller IV</h1>

      {error && <Alert color="danger">{error}</Alert>}

      <section className="health-section">
        <div className="health-box">
          <h4>Estado del API</h4>
          <p>{health ? health.message : "Consultando..."}</p>
        </div>
      </section>

      {!info ? (
        <Spinner color="primary" className="mt-4" />
      ) : (
        <Card className="mt-4 shadow">
          <CardBody>
            <CardTitle tag="h5">{info.message}</CardTitle>
            <ListGroup>
              {info.integrantes.map((i) => (
                <ListGroupItem key={i.carnet}>
                  <Badge color="primary" className="me-2">{i.carnet}</Badge>
                  <strong>{i.nombre}</strong>
                  <div>Ciudad de origen: {i.ciudadOrigen}</div>
                  <div>Carrera: {i.carrera}</div>
                  <div>
                    Proyectos realizados:{" "}
                    <Badge color="success">{i.proyectosRealizados}</Badge>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </CardBody>
        </Card>
      )}
    </Container>
  );
}

export default App;