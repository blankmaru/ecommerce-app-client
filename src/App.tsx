import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
	return (
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Container text style={{ marginTop: '7em' }}>
            <Route path='/' exact component={Home} />
          </Container>
        </Switch>
        <Footer />
    </BrowserRouter>
	);
}

export default App;
