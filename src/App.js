import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Mapcontact, Footer, Studio, Clients, Contacts, NotFound } from './components'
import { Home } from './components/main'
import { CartList } from './components/cart-goods'
import { AppSnackbar, OrderGoodsPage } from './features';
import { Store } from './pages'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/studio" element={<Studio />}/>
          <Route path="/clients" element={<Clients />}/>
          <Route path="/store" element={<Store />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/cart" element={<CartList />}/>
          <Route path="*" element={<NotFound />}/>
          <Route path="/order_goods" element={<OrderGoodsPage/>}/>
        </Routes>
        <Mapcontact />
        <AppSnackbar />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
