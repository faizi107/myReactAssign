import React, { Component } from 'react';
import './App.css';
import { Link} from "react-router-dom";
import logo from './images/ffc_logo.png';

export default class App extends Component {
    render() {
      return (
<div>

<div id="container">
    
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
    
    <main>
    <h2>Ready to get started</h2>
    <h2>Complete the form below to begin your free trial.</h2>
    
    <form>
    <label for="fname">First Name: </label>
     <input name="fName" type="text" id="fName"/>
    <label for="lname">Last Name: </label>
     <input name="lName" type="text" id="lName"/>
    <label for="email">Email: </label>
    <input type="email" name="email" id="email"/>
    <label for="phone">Phone: </label>
    <input type="tel" id="phone" name="phone"/>
       <p>I would like more information about:</p>
    <ul>
    <li><input type="checkbox" name="grpfit" id="grpfilt" value="grpfit" class="chkbx"/>Group Fitness</li>
    <li><input type="checkbox" name="prtrain" id="prtrain" value="prtrain" class="chkbx"/>Personal Training</li>
    <li><input type="checkbox" name="nutr" id="nutr" value="nutr" class="chkbx"/>Nutrition</li>
    </ul>
    <label for="reference">Referral Source: </label>
    <select name="reference" id="reference">
    <option value="ad">Advertisetment</option>
    <option value="friend">Friend</option>
    <option value="google">Google</option>
    <option value="social">Social Media</option>
    <option value="other">Other</option>
    </select>
    
    <label for="questions">Questions</label>
    <textarea name="questions" row="3" cols="25"></textarea>
    <input type="submit" id="submit" value="Submit" class="btn"/>
    <input type="reset" id="reset" value="Reset Form" class="btn"/>
    </form>
    </main>
        
        
    <footer>
        &copy; Copyright 2019. All Rights Reserved. <br/>
        forwardfitness@club.net
    </footer>
        
        </div>
            
    

</div>      );
    }}