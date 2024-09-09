import React from 'react'
import './SearchBar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  const navOptions = [
    "Collabs & License",
    "What's New",
    "Ladies",
    "Mens",
    "Shoes",
    "Everyday Basics",
    "Kids",
    "Baby",
    "Beauty",
    "Novelty",
    "Inspo",
    "Promos",
    "Cellular"
  ];
  
  let navItems = navOptions.map((e)=>
    <li>{e}</li>
  )

const Categories = [{
  url : "/ladies.avif",
  title: "Ladies"
},
{
  url : "/ladies.avif",
  title: "Ladies"
},
{
  url : "/ladies.avif",
  title: "Ladies"
},
{
  url : "/ladies.avif",
  title: "Ladies"
},
{
  url : "/ladies.avif",
  title: "Ladies"
},
{
  url : "/ladies.avif",
  title: "Ladies"
},
{
  url : "/ladies.avif",
  title: "Ladies"
},
{
  url : "/ladies.avif",
  title: "Ladies"
},

]


// const footerLinks = [

// ]

  return (
    
    <div>
       <div className='search'>
      <img src="https://cdn.omni.mrpg.com/cdn/web/assets/images/mrp-logo.svg" alt="Mr Price Clothing South Africa" width="25%" height="40" className='img'></img>
      {/* <FontAwesomeIcon icon={faSearch} className="input-icon" /> */}
      <input type="text" placeholder='Search Items,Brands & Categories'className='input' />
    </div>

    <div className="nav">
      {navItems}
    </div>
    <div className="video">
      <div className="vid-info">
        <p><span className='text'>Free click + collect</span> to any Mr Price store when you spend R350 or more.</p>
        <button className='vid-btn'>SHOP LADIES</button>
        <button className='vid-btn2'>SHOP MENS</button>
        <video src="/2024wk34-home-landm-combined-vide.mp4" loop autoPlay></video>
      </div>
    </div>

    <div className="pics">
      <div className="categories">

    {Categories.map((image, index) => (
        <div key={index}>
          <h3>{image.title}</h3>
          <img src={image.url} alt={image.title} />
        </div>
      ))}
      </div>
    </div>
    <div className="float">
      <div>
    <img src="/home-faq-ic.png" alt=""/>
      </div>
      <div>
    <img src="/home-delivery-ic.png" alt=""/>
      </div>
      <div>
    <img src="/home-track-ic.png" alt=""/>
      </div>
      <div>
    <img src="/home-loc-ic.png" alt=""/>
      </div>
      <div>
    <img src="/home-hts-ic.png" alt=""/>
      </div>
    </div>
    <div className="more-info">
      <h2>Hook me up with fashion news</h2>
      <input type="checkbox" className='input2'/>
      <label htmlFor="">All</label>
      <input type="checkbox" className='input2'/>
      <label htmlFor="">Ladies</label>
      <input type="checkbox" className='input2'/>
      <label htmlFor="">Mens</label>
      <input type="checkbox" className='input2'/>
      <label htmlFor="">Kids</label>
      <input type="checkbox" className='input2'/>
      <label htmlFor="">Baby</label>

      <input type="email" className='email-input' placeholder='Email Address'/>
    </div>
    <div className="footer">
       <div>
        <h1>MR PRICE</h1>
        <h2>Get to Know Us</h2>
        <h2>Mr Price App</h2>
        <h2>Find a Store</h2>
        <h2>Gift Cards</h2>
        <h2>Find Your Fit</h2>
        <h2>Partner Up with Mr Price</h2>
       </div>
      <div>
        <h1>MR PRICE MONEY</h1>
        <h2>Open an Account</h2>
        <h2>Application Status</h2>
        <h2>Pay My Account</h2>
        <h2>Airtime & Data</h2>
        <h2>Mr Price Cellular</h2>
        <h2>Mr Price Insurance</h2>
      </div>
      <div>
        <h1>Mr Price Group</h1>
        <h2>About Us</h2>
        <h2>Investors</h2>
        <h2>Sustainability</h2>
        <h2>Careers</h2>
        <h2>Terms & Conditions</h2>
        <h2>Privacy Policy</h2>
        <h2>Message Disclaimer</h2>
      </div>
      <div>
      <h1>Need Help?</h1>
        <h2>WhatsApp</h2>
        <h2>How to Shop Online</h2>
        <h2>How to Get Free Delivery</h2>
        <h2>Delivery & Returns</h2>
        <h2>Size Guides</h2>
        <h2>FAQ’s</h2>
        <h2>Contact Us</h2>
      </div>
    </div>

      <div className="footer2">
          <div className="heading">

          <h2>FOLLOW US</h2>
          </div>
        <div className="follow">
        <div className="follow-kids">
          <h2>MR PRICE</h2>
          <img src="/facebook-svgrepo-com.svg" alt="" />
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.6526 3.80762H43.3995L28.6594 20.6546L46 43.5796H32.4225L21.7881 29.6757L9.61989 43.5796H2.86886L18.6349 25.5598L2 3.80762H15.9222L25.5348 16.5163L36.6526 3.80762ZM34.2846 39.5412H38.0232L13.8908 7.63388H9.87892L34.2846 39.5412Z" fill="#424242"></path>
          </svg>
          <img src="/instagram-svgrepo-com.svg" alt="" />
          <img src="/tiktok-svgrepo-com.svg" alt="" />
          <img src="/youtube-168-svgrepo-com.svg" alt="" />
          <img src="/whatsapp-svgrepo-com.svg" alt="" />
        </div>
        <div className="follow-kids">
          <h2>MR PRICE KIDS</h2>
          <img src="/facebook-svgrepo-com.svg" alt="" />
          <img src="/instagram-svgrepo-com.svg" alt="" />
        </div>
        </div>
        <hr />
        
        <div className="logos">
          jvyjg
        </div>

        <div className="final-footer">
          <div className="footerLinks">
            <div className="links"></div>
            <div className="links"></div>
          </div>
          <blockquote>© MRP 2024. All rights reserved. MRP Money is a division of the Mr Price Group Ltd and is an authorised Financial Service and Credit Provider. FSP31450 and NCRCP46.</blockquote>
        </div>
      </div>
    
    </div>
  )
}

export default SearchBar