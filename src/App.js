import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import section1 from './img/section1.png'
import section2 from './img/section2.png'
import section3 from './img/section3.png'

function App() {
  return (
    <div className="App">



<ul>
        <li class="header">
        <Header />
        </li>
        <li class="content main">
            <ul>
                <li class="left">
                <img src={section1} className="section1" alt="section1" />
      <img src={section2} className="section2" alt="section2" />
      <img src={section3} className="section3" alt="section3" />

                </li>
                <li class="right">
                    <Sidebar/>
                </li>

            </ul>
        </li>
        <Footer />

    </ul>
    </div>
  );
}

export default App;
