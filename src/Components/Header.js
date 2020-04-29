import React, {Component} from 'react'
import $ from './Jquery'
import scrollToFixed from 'scrolltofixed'

class Header extends Component {
    componentDidMount() {
        $('.header').scrollToFixed();
    }
    render() {
        return (
            <div className="header">
            <span className="title">Header</span>
            <span> - This header will dock to the top of the window.</span>
            </div>
        ); 
    }
}
  
export default Header;