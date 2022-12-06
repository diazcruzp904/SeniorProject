import React from "react";
import HomePagePic from "./HomePagePictures/WelcomeBanner.png"

import './HomePage.css'
function HomePage() {
    return(
        <div className="HomePageContainer">

    
            <div className= 'homePagePic'><img src={HomePagePic} alt="homePagePic"/></div>

            <h2>Our Dream</h2>
            <p>At Shear Beauty our dream is to make people feel beautiful inside and out. 
                It's more than beauty, it is building a relationship with our guest. 
                We strive to provide full-service hair care and makeup with the highest quality service, 
                while providing a place to be inspired and pampered.
            </p>
            <h3>Love YourSelf</h3>

            <div className= 'GoogleMap'>
            <iframe className='GoogleMaps'
            title="Map" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.973665922281!2d-81.82076078456356!3d30.180746219075083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5c17e2162c0db%3A0x81067b67a0d7dbb8!2s509%20Meldrum%20Ln%2C%20Orange%20Park%2C%20FL%2032065!5e0!3m2!1sen!2sus!4v1669049698695!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style={{border: "0"}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
        </div>
    )
}

export default HomePage