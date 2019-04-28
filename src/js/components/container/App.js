import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import Routes from "../Routes";

class App extends Component {
  render() {
    return (
	    <div className="container">
	        <div className="row mt-5">
	            <div className="col-md-12">
	                <div id="navbar">
	                    <NavBar />
	                </div>
	            </div>
	        </div>
	        <br />
	        <br />
	        <br />
	        <div className="row">
		        	<Routes />
		      </div>
	        <br />
	    </div>
    );
  }
}
export default App;

ReactDOM.render(
	<Router>
		<App />
	</Router>, 
document.getElementById('root'));
