import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Mapcontact, Footer, Clients } from './components'
import { Home } from './components/main'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/clients" element={<Clients />}/>
        </Routes>
        <Mapcontact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
