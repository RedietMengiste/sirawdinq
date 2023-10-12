import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import './App.css';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    
    <Routes>
        <Route exact={true} path="/" element={ <Home/> } />
        <Route exact path="/detail/:pid" element={ <ProductDetail/> } />
       
      </Routes>
  );
}

export default App;
