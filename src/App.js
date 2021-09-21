import React, { useEffect, useState } from 'react';
import './App.css';
import NavBarOut from './components/NavBarOut';
import { Switch, BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import NavBarIn from './components/NavBarIn';
import LandingPage from './Pages/LandingPage';
import ForConsumers from './Pages/ForConsumers';
import ForContractors from './Pages/ForContractors';

function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  const testDisplay = <div>hello test</div>;
  const testDisplay2 = <div>hello test secondary!!</div>;

  const [display, setDisplay] = useState(testDisplay);

  // useEffect(() => {
  //   // testDisplay;
  //   if (!isAuthenticated) {
  //     return (
  //       <Router>
  //         <Switch>
  //           <Route exact path="/">
  //             <LandingPage />
  //           </Route>
  //           <Route exact path="/ForConsumers">
  //             <ForConsumers />
  //           </Route>
  //           <Route exact path="/ForContractors">
  //             <ForContractors />
  //           </Route>
  //         </Switch>
  //       </Router>
  //     );
  //   }
  //   return () => {
  //     setDisplay(null);
  //   };
  // }, [display]);

  if (isLoading) {
    // setDisplay(<NavBarIn />);
    return (
      <div>
        loading....
        <NavBarIn />
      </div>
    );
  }
  if (!isAuthenticated) {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/ForConsumers">
            <ForConsumers />
          </Route>
          <Route exact path="/ForContractors">
            <ForContractors />
          </Route>
        </Switch>
      </Router>
    );
  }
  if (isAuthenticated) {
    // console.log(user['https://example.com/roles']);
    return <div>hello from login</div>;
    // return (
    //   <Router>
    //     <Switch>
    //       <Route exact path="/ConsumerHome">
    //         {/* <ForContractors /> */}
    //         <div>hello from correct path</div>
    //         {console.log(user)}
    //       </Route>
    //     </Switch>
    //   </Router>
    // );
    // if (user['https://example.com/roles'] === 'Contractor') {
    // }
  }
}

export default App;
