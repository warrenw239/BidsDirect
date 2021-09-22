import React, { useEffect, useState } from 'react';
import './App.css';
import NavBarOut from './components/NavBarOut';
import {
  Switch,
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import NavBarIn from './components/NavBarIn';
import LandingPage from './Pages/LandingPage';
import ForConsumers from './Pages/ForConsumers';
import ForContractors from './Pages/ForContractors';
import LoggedInConsumer from './Pages/LoggedInConsumer';
import Loading from './Pages/Loading';

function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();
}

export default App;
