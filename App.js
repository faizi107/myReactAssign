import React, { Component } from 'react';
import './App.css';
import { Link} from "react-router-dom";
import logo from './images/ffc_logo.png';
import banner from './images/homeBanner.jpg';
import classes from './images/group.jpg';
import nutrition from './images/nutrition.jpg';
import sign from './images/signup.jpg';


class App extends Component {
  render() {
    return (
      <div id="container">
    
      <header>
          
                 <Link  to='/home'><img src={logo} alt="Forward   Fitness Club logo"/></Link>
            
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
  
      
      <div id="banner" class="desktop">
              <img src={banner} alt="home banner image"/>
      </div>
          
      <main>
          
          <p>
              Welcome to Forward Fitness Club! Our mission is to help our clients meet their fitness and nutritional goals.
          </p>
          
          <div class="mobile">
              <h3>FREE One-Week Trial Membership!</h3>
              <p>Call Us Today to Get Started</p>
              
              <h4>Fitness Club Hours:</h4>
              <p>Monday - Thursday: 6:00am - 6:00pm<br/>
              Friday: 6:00am - 4:00pm<br/>
              Saturday: 8:00am - 6:00pm<br/>
              Sunday: Closed</p>
          
          </div>
          
          <div class="desktop">
          
          <p>
              If you have struggled with getting healthy and need the motivation and resources to make a healthy lifestyle change, contact us today. Our facility includes state-of-the-art equipment, conveinient group training classes, and nutrition tips and information to keep you healthy.
          </p>
          
          <p>
              We provide a FREE, one-week membership to exxperience the benefits of our equipment and facility. This one-week trial gives you complete access to our equipment, training classes, and nutrition planning. Contact us today to start your free trial!
          </p>
              
      <h1>Start Today!</h1>
              
      <figure>
      
      <Link to='/classes'><img src={classes} alt="group fitness"/></Link>
      <Link to='/nutrition'><img src={nutrition} alt="good nutrition"/></Link>
      <Link to='/nutrition'><img src={sign} alt="sign up icon"/></Link>
          
      </figure>
              
          </div>
          
      </main>
          
          
      <footer>
          
          &copy; Copyright 2019. All Rights Reserved. <br/>
          forwardfitness@club.net
      </footer>
          
              </div>
       
     
    );
  }
}

export default App;
