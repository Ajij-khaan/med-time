
import { Button, Col, Row } from 'react-bootstrap';
import './App.css';



function App() {
  return (
    <div className="App">
      <button class="bg-blue-800 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
      <Row className="mx-0">
        <Button as={Col} variant="primary">Button #1</Button>
        <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
        <Button as={Col} variant="success">Button #3</Button>
      </Row>
    </div>
  );
}

export default App;
