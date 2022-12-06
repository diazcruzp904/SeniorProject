import React from "react";
import OwnerProfilePic from './AboutPictures/Owner.jpg'
import StudioSalon from './AboutPictures/StudioSalon.jpg'

import './AboutUs.css'

function AboutUs() {
    return(
        <div className="AboutUSContainer">

            <h1>Who We Are</h1>

            <div className="salonPic"><img src={StudioSalon} alt="salonPic"/></div>

            <h2>The Salon</h2>
            <p>Chelsie's Beauty Bar, located in Orange Park Area is a brand-new, upscale hair salon focusing on providing high-quality, 
                full-service hair care and makeup to the surrounding community. 
                Our product and service lines fit nicely with the prevailing tastes and preferences of the local area- middle class
                suburbanites who want quality hair care, but don't want to pay luxury prices for it.
            </p>

            <div className="ownerPic">
                <img style={{ width: 500, height: 600 }}
                    src={OwnerProfilePic} alt="profilepic"
                />
            </div>

            <h2>The Owner</h2>
            
            <p>She was born in Georgia she was raised in Orange Park Florida. 
                She graduated from Orange Park High School. 
                Chelsie has a passion for children and graduated with a certification in Early Childhood Education. 
                After High School she went to a trade school for a Medical Administrative Assistant. 
                She loved helping and caring for others. 
                While working in the medical field, Chelsie worked at The Naval Hospital of Jacksonville Florida. 
                She received  a medal coin for her excellent outstanding customer service and kindness. 
                Her passion is doing nails, hair, and makeup. She always found time to do her hobbies. 
                Working in the medical field your limited to what you can wear. 
                Chelsie would always push the limits and boundaries with hair and nails. 
                She was always complimented on her nails and hair. 
                Patients always told her she very talented and she should pursue her dreams of doing hair and nails. 
                With the support of her spouse, family, friends she finally decided to quite the medical field and start school for Cosmetology. 
                Her Goals after she graduates from cosmetology school is to work in a salon and build up her clientele. 
                Then purchase a studio where she can work independently and she wants to specialize in bridal makeup, nails and hair for special events. 
                Once she is well established in her career, she wants to give back to the community and hold special events for the homeless, battered women and children. 
                She wants to help build them up and let them know that their voices and dreams matter and there not forgotten.  
                </p>
        </div>
    )
}

export default AboutUs