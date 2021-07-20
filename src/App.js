import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Header from './components/Header_bg';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <Router>
        <Navbar />
        <Header />
        <Switch>
          <Route component={Home} path='/' />
        </Switch>
        <ScrollToTop />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
