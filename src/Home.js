import React from 'react'
import Product from './Product'
import "./Home.css"

function Home() {
    return (
        <div className="home">
          <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />

         {/* Product id, title, price, rating, image */}
         <div className="home__row">
         <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Succesful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
         />
         <Product
            id="69354655"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 128GB) - Space Grey (4th Generation)"
            price={1077.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/817%2BdXqQ07L._AC_SX679_.jpg"
         />
         </div>

         <div className="home__row">
         <Product
            id="56736436"
            title="Apple Watch Series 3 (GPS, 38mm) - Space Grey Aluminum Case with Black Sport Band"
            price={195.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71O2f4-BvjL._AC_SX522_.jpg"
         />
         <Product
            id="24563435"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={54.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/91B%2BxrXdD%2BL._AC_SY355_.jpg"
         />
         <Product
            id="36475322"
            title="Phox V2 Water Filter | 2.2L Glass Water Filter Jug and Refillable Eco Cartridge Cartridge | 3 Month Supply (Clean Pack)"
            price={39.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61oIHiZNSGL._AC_SY450_.jpg"
         />
         </div>

         <div className="home__row">
         <Product
            id="43290524"
            title="Samsung LC49HG90DMUXEN 49 Curved Ultra Wide LED Monitor - 3840 x 1080, 144Hz, 1ms, Quantum Dot, Freesync, 2 x HDMI, Displayport, USB"
            price={819.97}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SX450_.jpg"
         />
         </div>

            {/* Product */}
        </div> 
    );
}

export default Home;