import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.comp.jsx';
import ContactPage from './pages/contactpage/contactpage.comp.jsx';
import PortfolioIndexPage from './pages/portfolio-index-page/portfolio-index-page.comp.jsx';

import Header from './components/header/header.comp.jsx';
import Footer from './components/footer/footer.comp.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/portfolio" component={PortfolioIndexPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
