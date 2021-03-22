import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'



import Home from './pages/home/index.js'

import Navbar from './components/navbar/index.js'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
