import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import HomePage from './pages/homepage/homepage.comp.jsx';
import ContactPage from './pages/contactpage/contactpage.comp.jsx';
import PortfolioIndexPage from './pages/portfolio-index-page/portfolio-index-page.comp.jsx';
import ManagePage from './pages/portfolio-detail-pages/manage.comp.jsx';
import BookmarkPage from './pages/portfolio-detail-pages/bookmark.comp.jsx';
import InsurePage from './pages/portfolio-detail-pages/insure.comp.jsx';
import FyloPage from './pages/portfolio-detail-pages/fylo.comp.jsx';

import { Spacer } from './components/cond-elements/cond-elements.comps.jsx';

import Navbar from './components/navbar/navbar.comp.jsx';
import Footer from './components/footer/footer.comp.jsx';

import './App.css';
import { AppContainer, PageContainer } from './App.styles.jsx';

function App() {
  return (
    <AppContainer className="App">
      <PageContainer>
        <Navbar />
        <Spacer mob="40" tab="47" dt="54" />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/portfolio" component={PortfolioIndexPage} />
            <Route exact path="/portfolio/manage" component={ManagePage} />
            <Route exact path="/portfolio/bookmark" component={BookmarkPage} />
            <Route exact path="/portfolio/insure" component={InsurePage} />
            <Route exact path="/portfolio/fylo" component={FyloPage} />
          </Switch>
        </AnimatePresence>
      </PageContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
