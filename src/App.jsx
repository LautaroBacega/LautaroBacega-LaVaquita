import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Products from './componentes/Products';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting='Productos'/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
