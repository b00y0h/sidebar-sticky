import React, {Component} from 'react'
import nav from '../img/nav.png';
import $ from 'jquery'
window.jQuery = window.$ = $;
require('scrolltofixed');


class Header extends Component {
    componentDidMount() {
        $('.header').scrollToFixed();
    }
    render() {
        return (
            <div className="header">
                 <img src={nav} className="nav" alt="nav" />
            </div>
        ); 
    }
}
  
export default Header;