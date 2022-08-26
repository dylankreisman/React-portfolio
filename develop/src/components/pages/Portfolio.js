import React from 'react'

export default function Portfolio(){
   return ( 
   <div class="row">

    <h2>Work Samples </h2>
    <div id="main-column" class="columns-2"> 
            <h3>Charging Station Locator</h3>
            <a href="https://dylankreisman.github.io/EV-Charging-Station-Locator/">
                <img src="assets/ev-screenshot.png" alt="EV project website"></img>
            </a> 
                <p>An application that shows the nearest EV charging station to your search.</p>
            
    </div>
    <div class="columns-2"> <a href="https://dylankreisman.github.io/collab-mini-project-1/">
        <h3>Container Project</h3> 
            <img src="assets/Css-snippets.gif" alt="container website gif"></img>
              <p>I worked with a partner to create a flexible grid layout.</p>
            </a>
    </div>
    <div class="columns-2">
        <h3>Contact Form Project
        </h3>
        <a href="https://dylankreisman.github.io/Contact-form-project/">
            <img src="assets/contact-form.png" alt="contact form website"></img>
        </a>
            <p>I created my first contact form.</p>
    </div>
</div>
   )
}