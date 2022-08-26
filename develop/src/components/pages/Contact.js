import React from 'react'

export default function Contact(){
    return (
        <div>
            <form className="container" method='POST' target='_blank'>
                <label for="fname">First Name</label>
                <input type="text" name="firstname" placeholder="Your name.."></input>
                
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Make a request here..." style="height:200px"></textarea>
                    <button type="submit" value="Submit"></button>
            </form>
        </div>
    )
}