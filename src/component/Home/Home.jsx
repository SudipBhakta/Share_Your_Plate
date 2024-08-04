import React from 'react'
import './Home.css'
import Home3 from '../../assets/Home3.png'
import Home4 from '../../assets/Home4.jpg'
import Home5 from '../../assets/Home5.jpeg'
import Person1 from '../../assets/Person1.png'
import Person2 from '../../assets/Person2.png'
import Person3 from '../../assets/Person3.png'


const Home = () => {
  return (
    <>
    <div className='home container'>
    <div className="text">
      <h1>We come to Share Your Plate Platform</h1>
      <p>this is a paragraph</p>
      <h4>Say no to food wastage, Your waste is someone's NEED</h4><br />
      <a href ="/Donate"><button className='btn'> Donate The Excess Food </button></a><br /><br />
      {/* <a href ="/Volunteer"><button className='btn'>Volunteer</button></a> */}
        
    </div>
    </div>
    <div className='home2'>

      <div className="Image">
      <img src={Home3} alt="" />
      <br />
      <h3>Why many people are hungry?</h3>
      <p>Shockingly, the world is back at hunger levels not seen since 2005, and food prices remain higher in more countries,
         Along with conflict, climate shocks, and rising cost of living,
         declining food production have all contributed to food scarcity and high food prices.</p>
      </div>
      <div className="Image">
      <img src={Home4} alt="" />
      <br />
      <h3>Why should I care?</h3>
      <p>We all want our families to have enough food to 
        eat what is safe and nutritious. A world with zero hunger can positively impact our economies,
        health, education, equality and social development.</p>
      </div>
      <div className="Image">
      <img src={Home5} alt="" />
      <br />
      <h3>What can we do to help?</h3>
      <p>You can make changes in your own life—at home, at work and in the community—by supporting local farmers or markets and making sustainable food choices, 
        supporting good nutrition for all,
         and fighting food waste.</p>
      </div>
      
    </div>
    <h1 className='text2'>Some Famous Personality On Zero Hunger Gole</h1>
    <div className="Speech">
      
      <div className="Personality">
        <img src={Person1} alt=""  className='Image2'/>
        <h4>Sam Pitroda</h4>

        <p>Sam Pitroda, better known for his work in information and communications technology (ICT) as an inventor,
           entrepreneur and policy maker, also heads the India FoodBanking Network in his lesser known avatar. Established in 2010, 
           the India FoodBanking Network aims to create a network of food banks across the country that collect donated food and have it 
           delivered to the needy. The mission of this network is to eradicate hunger from India by 2020.n</p>
      </div>
      <div className="Personality">
      <img src={Person2} alt=""  className='Image2'/>
      <h4>Christina Aguilera</h4>
      <p>Christina Aguilera is a spokesperson for the World Food Programme’s
         (WFP) Yum! Brands World Hunger Relief Campaign. She has raised over 148 million dollars. 
         Christina is an active humanitarian who often does field missions around the world in places like Rwanda and Guatemala.
         She supports WFP’s priority program: Zero Hunger.</p>
      </div>
      <div className="Personality">
      <img src={Person3} alt=""  className='Image2'/>
      <h4>Karlie Kloss</h4>
      <p>Karlie’s Kookies, courtesy of Karlie Kloss and Momofoku’s Milk Bar Christina Tosi, have made an effort to end 
        childhood hunger by donating meals to schools all around the world through FEED.  For every cookie purchase,
         FEED donates 10 school lunches around the world. To date,
         FEED has provided 107,532,896 nutritious meals to children in 63 countries around the world.</p>
      </div>
    </div>
    </>
  )
}

export default Home
