import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'



import Homepage from './pages/homepage/index.js'
import pdfPage from './pages/pdf/index.js'

import Navbar from './components/navbar/index.js'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route path="/pdf" component={pdfPage} />
      </div>

    </BrowserRouter>
  );
}

export default App;
