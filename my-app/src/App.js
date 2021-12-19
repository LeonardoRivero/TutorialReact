import logo from './logo.svg';
import './App.css';
import Avatar from './components/avatar';
import { Clock, ClockES7 } from './components/clock';
import { useReducer } from 'react';
import { Formulario, EssayForm } from './components/formularios';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Welcome(props) {
  return (
    <h1>Hello, {props.name}</h1>
  )
}

const data = { name: "some name", avatarUrl: "someurl" }

function App() {
  return (
    <div>
      <Welcome name="Matias" />
      <Avatar user={data} />

      <Formulario></Formulario>
      <EssayForm></EssayForm>
      {/* <Clock></Clock> */}
      <ClockES7></ClockES7>
      {/* <Row className="mx-0">
        <Button as={Col} variant="primary">Button #1</Button>
        <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
        <Button as={Col} variant="success">Button #3</Button>
      </Row> */}
    </div>

  );
}
export default App;






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


