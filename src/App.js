import React, {Component} from "react";
import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponents";
import "./App.css";
import { DISHES } from "./shared/dishes";
import { render } from "@testing-library/react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes : DISHES
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary" expand="lg">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
