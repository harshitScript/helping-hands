import './App.css';
import Navigation from './components/NavBlock/Navigation';

function App() {
  return (
    <div className='grid_layout_outer'>
      <Navigation />
      <div style={{ backgroundColor: 'blue' }}>2</div>
      <div style={{ backgroundColor: 'green' }}>3</div>
      <div style={{ backgroundColor: 'grey' }}>4</div>
      <div style={{ backgroundColor: 'orange' }}>5</div>
    </div>
  );
}

export default App;
