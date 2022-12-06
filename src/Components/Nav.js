import { Component } from "react";
import {MenuData} from "./MenuData";
import "./Styles/Nav.css"

class Nav extends Component {
  state = {clicked: false};
  handleClick =()=>{
    this.setState({clicked:
    !this.state.clicked})
  }
  render(){
    return (
      
      <nav >
        <div className="NavItems">
          

        <h1 className="logo">Tech Land<i className="fa-solid fa-computer"></i></h1>
        <div className="MenuIcons"
        onClick={this.handleClick}>
          <i className=
            {this.state.clicked ?
             "fas fa-times" : "fas fa-bars"}></i>
        </div>
          <ul className={this.state.clicked ? 
          "NavMenu active" : "NavMenu" }>
            {/* go to MenuData.js to add/delete <a> */}
            {MenuData.map((item, index) => {
              return(
                <li key={index}>
                 <a href={item.url}
                 className={item.cName}>
                <i class={item.icon}></i>{item.title}</a>
                </li>
                 );
            })}
          </ul>

          </div>

      </nav>
   )
 };
}

export default Nav;
