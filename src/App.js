import './App.css';
import Navigation from './components/NavBlock/Navigation';
import Offering from './components/OfferingBlock/Offering';
import Request from './components/RequestBlock/Request';
import List from './components/ListBlock/List';

function App() {
  return (
    <div className='grid_layout_outer'>
      <Navigation />
      <Request />
      <Offering />
      <List />
    </div>
  );
}

export default App;
