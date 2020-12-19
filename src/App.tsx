import React, { FC } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Navbar from './components/Navbar';
import Products from './pages/Products';
// import Footer from './components/Footer';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

const App: FC = () => {
	return (
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Container style={{ marginTop: '7em' }}>
            <Route path='/' exact component={Products} />
            <Route path='/admin' exact component={Admin} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/orders' exact component={Orders} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
          </Container>
        </Switch>
        {/* <Footer /> */}
    </BrowserRouter>
	);
}

export default App;
