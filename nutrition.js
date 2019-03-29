import React, { Component } from 'react';
import logo from './images/ffc_logo.png';
import { Link } from "react-router-dom";
import banner from './images/nutritionBanner.jpg'
import nutrition1 from './images/nutrition1.jpg'
import nutrition2 from './images/nutrition2.jpg'
import nutrition3 from './images/nutrition3.jpg'

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
    <li><Link to='contact'>Contact Us</Link></li>
    
    </ul>
   </nav>  
    <div id="banner" class="desktop">
        <img src={banner} alt="nutrition banner image"/>
    </div>
 
        
<main>
    
   <article>
       <h2>Food for Thought</h2>
       <img src={nutrition1} alt="food for thought image" class="desktop"/>
       <p>Good nutrition is a lifestyle, not a diet. It starts with a new way of thinking about food. Think of your body as a vehicle that uses food for fuel. Fill your tank with the right type of fuel.</p>
       <p>Do not approach your nutrition plan as a diet plan, but rather, a lifestyle change.If you make a permanent change, you will see big results. The key to success is a daily focus on your goal.</p>
       <p>Portion your meals and track your calories. There are many free mobile apps available to help track your activity level and calories.</p>
       <p>Control impulsive urges to buy junk food, and instead allow yourself to one "cheat" meal a week.</p>
       <aside>Did you know the average American consumes 3 lbs of sugar each week?</aside>       
    </article> 
    
    <article>
        <h2>What to Eat</h2>
        <img src={ nutrition2 }alt="food image" class="desktop"/>
        <p>Use the following as a guideline:</p>
        <ul>
            <li>Protein, such as eggs, chicken, and lean red meat</li>
            <li>Vegetables, but avoid corn and peas</li>
            <li>Fruit</li>
            <li>Fat, such as olive oil, nuts, and seeds</li>
        </ul>
        <p>Limit the consumption of bread, pasta, white potatoes, and processed food. These foods are high in carbohydrates.</p>
        <p>When you shop for groceries, shop the outside isles and buy organic when possible. Stock up on fresh vegetables, almond flour, and flax seed.</p>
        <p>Check out our Meal of the Week for new meal ideas.</p>
        <aside>Did you know that avocados are a good source of vitamin B?</aside>
    </article>
    
    <article>
        <h2>Meal of the Week</h2>
        <img src={nutrition3 } alt="herb roasted chicken image" class="desktop"/>
        <p>Herb Roasted Chicken</p>
        <p>Ingredients:</p>
        <ul>
            <li>boneless, skinless chicken breast (organic preferred)</li>
            <li>1 tsp Herbes de Provence</li>
            <li>1 tsp lemon juice</li>
            <li>1 tsp olive oil</li>
            <li>1 tsp sea salt</li>
            <li>&frac14; tsp pepper</li>
        </ul>
        <p>Instructions:<br/>
            Combine all ingredients in a plastic bag and marinate for at least an hour. Preheat oven to 350 degrees. Bake chicken for 30-35 minutes or until juices run clear. Broil on high for two minutes or until brown. Serve with a fresh side salad.</p>
        <aside>Did you know the average active adult should consume 2,000 calories a day?</aside>
    </article>

</main>
    
    
<footer>
    &copy; Copyright 2019. All Rights Reserved. <br/>
    forwardfitness@club.net
</footer>
    
    </div>
</div>      );
    }}