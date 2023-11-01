import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Mapcontact, Footer, Studio, Clients, Contacts, NotFound } from './components'
import { Home } from './components/main'
import { CartList } from './components/cart-goods'
import { AppSnackbar, OrderGoodsPage } from './features';
import { Store } from './pages';
import { links } from './constants';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={links.main} element={<Home />}/>
          <Route path={links.studio} element={<Studio />}/>
          <Route path={links.clients} element={<Clients />}/>
          <Route path={links.store} element={<Store />}/>
          <Route path={links.contacts} element={<Contacts />}/>
          <Route path={links.cart} element={<CartList />}/>
          <Route path={links.notFound} element={<NotFound />}/>
          <Route path={links.orderGood} element={<OrderGoodsPage/>}/>
        </Routes>
        <Mapcontact />
        <AppSnackbar />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
