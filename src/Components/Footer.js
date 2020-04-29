import React, {Component} from 'react'
import section4 from '../img/section4.png'
import section5 from '../img/section5.png'
import section6 from '../img/section6.png'

import $ from 'jquery'
window.jQuery = window.$ = $;
require('scrolltofixed');

class Footer extends Component {
    componentDidMount() {
        $('.footer').scrollToFixed( {
            bottom: 0,
            limit: $('.footer').offset().top
        });
    }
    render() {
        return (
            <div>
        <li class="footer">
            <div class="main">DRIVEN TO CHANGE THE WORLD? SO ARE WE.</div>
        </li>
        <li class="footer-content">
            <div class="main">

            <img src={section4} className="section4" alt="section4" />
      <img src={section5} className="section5" alt="section5" />
      <img src={section6} className="section6" alt="section6" />

            </div>
        </li>
        </div>
        ); 
    }
}
  
export default Footer;