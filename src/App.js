import './App.css';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import CountryDetails from './pages/CountryDetails';
import Home from './pages/Home';

function App() {
    
  return (
    <div className="container-md px-0">
      <Header />
      <section className='m-0 p-3'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:countryName' element={<CountryDetails />} />
          </Routes>
      </section>
    </div>
  );
}

export default App;
