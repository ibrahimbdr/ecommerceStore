import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Products } from "./components/Products";
import { ProductDetails } from "./components/ProductDetails";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Login } from "./components/Login";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="bg-slate-300">
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" exact component={ProductDetails} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/login" exact component={Login} />
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
