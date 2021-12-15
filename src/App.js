import './App.css';
import Navbar from './components/navbar/navbar';
import Products from './components/products/products';
import { Provider } from 'react-redux'
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Navbar/>
      <div class="row">
      <div class="column categories">
        categories
      </div>
      <div class="column products">
        <Products/>
      </div>
      <div class="column carts">
        cart
      </div>
    </div>
    </div>
    </Provider>
  );
}

export default App;
