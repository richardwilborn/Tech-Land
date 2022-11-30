import "./Styles/Support.css"
import React from "react";


function Support(){

    return (<>
    <div className="supportContact">
        <div className="supportContent">
            <h2>Contact Us</h2>
            <p>Welcome to our support page. Feel free to conact us weather you have a 
                question about features or pricing, our team is ready to answer all your questions.</p>
        </div>
        <div className="supportContainer">
            <div className="contactInfo">
                <div className="box">
                    <div className="icon"><i class="fa-solid fa-location-dot"></i></div>
                    <div className="text">
                        <h3>Address</h3>
                        <p>1428 Elm Street, Springwood,Ohio, 23453</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><i class="fa-solid fa-phone"></i></div>
                    <div className="text">
                        <h3>Phone</h3>
                       <p>+1 (213) 373-4253</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><i class="fa-solid fa-envelope"></i></div>
                    <div className="text">
                        <h3>Email</h3>
                        <p>Techland@Techland.com</p>
                    </div>
                </div>
            </div>
            <div className="contactForm">
                <form>
                    <h2>Send Message</h2>
                    <div className="inputBox">
                        <input type="text" name="" required="required"></input>
                        <span>Full Name</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="" required="required"></input>
                        <span>Email</span>
                    </div>
                    <div className="inputBox">
                        <textarea required="required"></textarea>
                        <span>Type your Message...</span>
                    </div>
                    <div className="inputBox">
                        <input type="Submit" name="" value="Send"></input>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
    );
};

export default Support;