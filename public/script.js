import React from "react";
import ReactDOM from "react-dom";

import Table from "./Table"
import infosheet from './infosheet';

class App extends React.Component {
  render() {
    return (
      <div>
        <Table info={infosheet[0]} /> 
          <br />
          <br />  
        <Table info={infosheet[1]} /> 
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react'));
