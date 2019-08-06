import React, { Component } from "react";
import "./App.css";
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <Contact name="Mr. Appel" email="appel@epos.com" phone="021 887 0875" />
          <Contact name="Mev. Pere" email="pere@epos.com" phone="021 887 0303" />
          <Contact name="Mrs. Feeney" email="ellyFarts@epos.com" phone="021 887 0303" />
        </div>

      </div>
    );
  }
}

export default App;
