import logo from './logo.svg';
import './App.css';
import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import { ClockPage } from './pages/ClockPage';
import Layout from './components/layout';

function App() {
  return (
    <div>
      <StrictMode>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Index></Index>} />
              <Route exact path="/clock" element={<ClockPage></ClockPage>} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </StrictMode>
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


