import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Mapcontact, Footer, Studio, Clients, Contacts, NotFound } from './components'
import { Home } from './components/main'
import { CartList } from './components/cart-goods'

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
        </Routes>
        <Mapcontact />
        {/* <AppSnackbar /> feature */}
        {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Товар успішно доданий в корзину!
                </Alert>
            </Snackbar> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
