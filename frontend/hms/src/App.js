import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Sample from './components/sample';
import Container from 'react-bootstrap/Container'
import Fooditems from './components/fooditems';
import Offer from './components/offer';
import Emptyspace from './components/emptyspace';
import Row from 'react-bootstrap/esm/Row';

function App() {
  return (
    <>
      <Header></Header>
      <Offer></Offer>
      <Emptyspace></Emptyspace>

      <Container>
        <div className="App">Starter</div>
        <Fooditems></Fooditems>
      </Container>

      <Emptyspace></Emptyspace>

      <Container>
        <Row >Main Course</Row>
        <Fooditems></Fooditems>
      </Container>

      <Emptyspace></Emptyspace>

      <Container>
        <div className="App">Drinks</div>
        <Fooditems></Fooditems>
      </Container>
    </>
  );
}

export default App;
