import { Component } from "react";
import {MenuData} from "./MenuData";

class Nav extends Component {
  render(){
    return (
      <nav className="NavItems">
        <h1>Tech Land<i class="fa-solid fa-computer"></i></h1>
          <ul>
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
      </nav>
   )
 };
}

export default Nav;
