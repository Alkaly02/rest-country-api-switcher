import './App.css';
import Header from './components/Header';
import AllCountries from './pages/AllCountries';
import SearchFilter from './components/SearchFilter';
import useCountry from './hooks/useCountry';
import Loader from './components/Loader';

function App() {
  const {loading} = useCountry()
  return (
    <div className="container-md px-0">
      <Header />
      <section className='m-0 p-3'>
          <SearchFilter />
          {
            loading ? <Loader /> : <AllCountries />
          }
      </section>
    </div>
  );
}

export default App;
