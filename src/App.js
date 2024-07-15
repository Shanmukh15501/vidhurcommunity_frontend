import React from 'react';
import Home from './Home'; // Assuming this is where your Home component is imported
import Logo from './images/logo'; // Assuming this is the path to your logo image
import Login from './Login';

function App() {
  return (
    <div>
    <div className="App bg-primary">
        <Home />
    </div>
    <div className="container">
         <div className="row">
              <div className="col">
                  <Logo/>
              </div>
              <div className="col">
                  <Login/>
              </div>
              </div>
    </div>

    </div>
  );
}

export default App;
