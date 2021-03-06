import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.comp.jsx';
import ContactPage from './pages/contactpage/contactpage.comp.jsx';
import PortfolioIndexPage from './pages/portfolio-index-page/portfolio-index-page.comp.jsx';

import Spacer from './spacer.jsx';

import Navbar from './components/navbar/navbar.comp.jsx';
import Footer from './components/footer/footer.comp.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Spacer size={40} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/portfolio" component={PortfolioIndexPage} />
      </Switch>
      <Spacer size={80} />
      <Footer />
    </div>
  );
}

export default App;
