import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Mapcontact} from './components'
import { Home } from './components/main'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
         
        </Routes>
        <Mapcontact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
