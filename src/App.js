import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Home from './components/Home';
import OrderSuccess from './components/OrderSuccess';
import PageNotFound from './components/PageNotFound';
import ProductDetails from './components/ProductDetails';
import ScrollToTop from './components/ScrollToTop';
import Topbar from './components/Topbar';
// import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Topbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/product/:id' component={ProductDetails}/>
        <Route path='/cart' component={Cart} />
        <Route path='/confirm' component={OrderSuccess} />
        <Route path='*'  component={PageNotFound} />
      </Switch>
      
      <Footer/> 
    </BrowserRouter>
  );
}

export default App;
