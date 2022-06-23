import './App.css';
import Header from './components/Header';
import AllCountries from './pages/AllCountries';
import { CountryProvider } from './context/CountryContext';
import SearchFilter from './components/SearchFilter';

function App() {
  return (
    <div className="container-md px-0">
      <Header />
      <section className='m-0 p-3'>
        <CountryProvider>
          <SearchFilter />
          <AllCountries />
        </CountryProvider>
      </section>
    </div>
  );
}

export default App;
