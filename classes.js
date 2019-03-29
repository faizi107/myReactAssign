import React, { Component } from 'react';
import './App.css';
import { Link} from "react-router-dom";
import logo from './images/ffc_logo.png';
import classesBanner from './images/classesBanner.jpg';


export default class App extends Component {
    render() {
      return (
<div>

<div id="container" >
    
    <header>
            <Link to='/home'><img src={logo} alt="Forward Fitness Club logo"/></Link>
        
    </header>
        
    <nav>
        <ul>
        
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/nutrition'>Nutrition</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        
        </ul>
    </nav>
          
    <div class="desktop">
    <img src={classesBanner} alt="classes banner image"/>
    </div>
    
    
    <div class="mobile" >
    
    <section class="background"  style={{backgroundcolor:' #fff' , color: 'black'   }}>
    <p>Boot Camp: TR 5am &amp; 5pm</p>
    <p>Cardio: MWF 6am &amp; 6pm</p>
    <p>Kickboxing: MWF 8am &amp; 7:15pm</p>
    <p>Spinning: TR 6am &amp; 6pm</p>
    <p>yoga: TR 6am &amp; 6pm</p>
    <p>zumba: MWF 7am &amp; 6pm</p>
    
    </section>
    </div>
      
    
    <div class="desktop">
    
    
    <table>
    <caption>Group Fitness Class Schedule</caption>
    <tr>
    <th>Class</th>
    <th>Days</th>
    <th>Times</th>
    <th>Instructor</th>
    <th>Room</th>
    </tr>
    <tr> 
    <td>Cardio</td>
    <td>Mon, Wed, Fri</td>
    <td>6:00am, 6:00pm</td>
    <td>Schultz</td>
    <td>B</td>
    </tr>
    <tr> 
    <td>Boot Camp</td>
    <td>Tu, Thu</td>
    <td>5:00am, 5:00pm</td>
    <td>Taylor</td>
    <td>B</td>
    </tr>
    <tr> 
    <td>Spinning</td>
    <td>Tue, Thu</td>
    <td>6:00am, 6:00pm</td>
    <td>Roberts</td>
    <td>A</td>
    </tr>
    <tr> 
    <td>Kickboxing</td>
    <td>Mon, Wed, Fri</td>
    <td>8:00am, 7:15pm</td>
    <td>Lawrence</td>
    <td>A</td>
    </tr>
    <tr> 
    <td>Yoga</td>
    <td>Tue, Thu</td>
    <td>6:00am, 6:00pm</td>
    <td>Schultz</td>
    <td>B</td>
    </tr>
    <tr> 
    <td>Zumba</td>
    <td>Mon, Wed, Fri</td>
    <td>7:00am, 6:00pm</td>
    <td>Roberts</td>
    <td>A</td>
    </tr>
    </table>
    </div>
    <footer>
        &copy; Copyright 2019. All Rights Reserved. <br/>
      forwardfitness@club.net
    </footer>
        
        </div>
            
    

</div>      );
    }}