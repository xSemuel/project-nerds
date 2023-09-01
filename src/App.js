import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Mapcontact, Footer, Store, Clients, Contacts, Cart, NotFound} from './components'
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
          <Route path="/store" element={<Store />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Mapcontact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
