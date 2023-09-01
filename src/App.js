import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Mapcontact, Footer, Store, Clients, Contacts} from './components'
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
          <Route path="/clients" element={<Store />}/>
          <Route path="/clients" element={<Contacts />}/>
          <Route path="/clients" element={< />}/>
        </Routes>
        <Mapcontact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
