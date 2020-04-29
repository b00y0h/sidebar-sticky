import React from 'react'
import rightnav from '../img/rightnav.png'
import $ from 'jquery'
window.jQuery = window.$ = $;
require('scrolltofixed');


class Sidebar extends React.Component {
    componentDidMount() {
        var summaries = $('.summary');
        summaries.each(function(i) {
            var summary = $(summaries[i]);
            var next = summaries[i + 1];

            summary.scrollToFixed({
                marginTop: $('.header').outerHeight(true) + 40,
                limit: function() {
                    var limit = 0;
                    if (next) {
                        limit = $(next).offset().top - $(this).outerHeight(true) - 10;
                    } else {
                        limit = $('.footer').offset().top - $(this).outerHeight(true) - 10;
                    }
                    return limit;
                },
                zIndex: 999
            });
        });
    }

    render() {
        return (
            <div >
                <ul id="summary1" class="summary">
                        <li className="contents">  
                        Degree Planning &amp; DPSS ><br/>
                    Registration &amp; Howdy ><br/>
                    Professional Development ><br/>
                    Thesis &amp; Dissertation ><br/>
                    Funding Your Education ><br/>
                    Wellbeing and Support ><br/>
                    Calendar > <br/>
                    Contact Us ><br/>


                    <hr/>

<b>Knowledge Center</b><br/>
Your one-stop shop for forms, policies and FAQs. ><br/>
<hr/>

<b>Tour our new office:</b><br/>
112 Jack K. Williams<br/>
Administration Building,<br/>
College Station, TX 77843<br/>
Find us on the Aggie Map >


                        </li>
                    </ul>
            </div>
        )
    }
}

export default Sidebar