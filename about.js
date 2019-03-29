import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import logo from './images/ffc_logo.png';
import equip from './images/equipment1.jpg'
import equip2 from './images/equipment2.jpg'
import equip3 from './images/equipment3.jpg'

export default class App extends Component {

  render() {
      return (
<div>
   <div id="container">
    
<header>
        <Link to='/home'><img src={logo}/></Link>
    
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

<main>
    
    <section>
    <h1>Weights</h1>
    <img class="equip" src={equip} alt="Weight Equipment"/>
    <p>Our facility includes a weight training area with several weight options. Build lean muscle with weights and improve your core with weight training.</p>
    <ul class="items"> 
        <li>Dumbbells</li>
        <li>Kettle bells</li>
        <li>Barbells</li>
    </ul>
    </section>    
    
    <section>
    <h1>Cardio</h1>
    <img class="equip" src={equip2} alt="Cardio Equipment"/>
    <p>Burn fat through cardio workouts. If you need to lose 20 lbs or more, include at least 30 minutes of cardio each day. We have several equipment choices for your workout.</p>
    <ul class="items"> 
        <li>Treadmills</li>
        <li>Elliptical Machines</li>
        <li>Exercise Bikes</li>
    </ul>
    </section>
    
    <section>
    <h1>Personal Training</h1>
    <img class="equip" src={equip3} alt="Personal Training"/>
    <p>Our certified personal trainers work with you one on one to help you obtain your fitness goals. Our personal trainers keep you motivated and push you farther than you would push yourself. When you feel like you cannot do one more rep, they tell you that you can (then they beat you into submission). Personal training has many benefits.</p>
    <ul class="items"> 
        <li>Accountability</li>
        <li>Personalized Program</li>
        <li>Consistent Support and Motivation</li>
    </ul>
    </section>
    
    <section class="tablet">
    
    <h1>Common Exercises</h1>
    <p> The following are common exercises that we encourage our clients to do as part of their daily exercise routine.</p>
    <dl>
        <dt>Burpee</dt>
        <dd> Burpees are a great, full body exercise to increase your strenth and endurance. Begin in a standing position, drop into a squat and extend your hands forward, kick your feet back and then forward again quickly, and then jump up from a squatted position.
        </dd>
        
        <dt>Plank</dt>
        <dd> Planks build your core strength. To perform a plank, get in a push up position and rest your forearms on the floor. Hold the position as long as you can.
        </dd>
        
        <dt>Mountain Climber</dt>
        <dd> Mountain climbers are a good cardio exercise. Place your hands on the floor in a push up position, then bring one knee up to your chest then switch as quickly as you can as though you are climbing a mountain.
        </dd>
    </dl>
    
    <p>For more information on how to stay active, visit fitness.gov.
    </p>
        
    </section>
    
</main>
    
    
<footer>
    &copy; Copyright 2019. All Rights Reserved. <br/>
 forwardfitness@club.net
</footer>
    
    </div>
        
</div>
      );
    }}