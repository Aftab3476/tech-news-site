
import './App.css';
import Pagination from './Components/Pagination';
import Search from './Components/Search';
import Stories from './Components/Stories';


function App() {
  return (
    <>
      <div className='container'>
        <h4 className='text-center mt-5'><b>Welocme to the Aftab Tech News Website</b></h4>
      </div>
      <Search />
      <Pagination />
      <div className='container'>
        <div className='row justify-content-center'>
          <Stories />
        </div>
      </div>
    </>
  );
}

export default App;
