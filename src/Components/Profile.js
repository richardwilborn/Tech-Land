import "./Styles/Profile.css"
import React from 'react'


function Home(){
    return (<>    <div className="profileContainer">
        <img className="profilePic" src="./img/michelleyeoh.jpg" alt= "profile Pic"></img>
        <div className="Home">
            <section className="contactInfo"> 
            <h1>Name</h1>
            <p>fillertext</p>
            <h1>Github:</h1>
            <p>fillertext</p>
            <h1>LinkedIn</h1>
            <p>fillerText</p>
            <h1>Specialties:</h1>
            <p>fillertext</p>
            </section>
        </div>
    
        <section>
            <div className="sampleBox">
                <div class="cardHeader">
                <h3>Sample Work: </h3>
                </div>
                <p>Filler text here</p>
                <p>Filler Text Here</p>
            </div>
        </section>
    
        <div className='skillList'>
            <div class="cardHeader">
            <h3>Skills:</h3>
            </div>
            <p>Filler Text here</p>
        </div>
        </div>

    </>
    );
}

export default Home;
