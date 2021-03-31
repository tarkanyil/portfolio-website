import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import HomePage from './pages/homepage/homepage.comp';
import ContactPage from './pages/contactpage/contactpage.comp';
import PortfolioIndexPage from './pages/portfolio-index-page/portfolio-index-page.comp';
import PortfolioItem from './pages/portfolio-detail-page/portfolio-item-page.comp';

import { Spacer } from './components/cond-elements/cond-elements.comp';

import Navbar from './components/navbar/navbar.comp';
import Footer from './components/footer/footer.comp';

import './App.css';
import { AppContainer, PageContainer } from './App.styles';

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
            <Route exact path="/portfolio/:itemId" component={PortfolioItem} />
          </Switch>
        </AnimatePresence>
      </PageContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
