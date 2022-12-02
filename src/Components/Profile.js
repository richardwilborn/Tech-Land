import "./Styles/Profile.css"
import React from 'react'


function Home(){
    return (<>    <div className="profileContainer">
        <img className="profilePic" src="src\Components\Styles\Img\michelleyeoh.jpg"alt= "profile Pic"></img>
        <div className="Home">
            <section className="contactInfo"> 
            <h1 className="cardHeader">Name</h1>
            <p>fillertext</p>
            <h1 className="cardHeader">Github:</h1>
            <p>fillertext</p>
            <h1 className="cardHeader">LinkedIn</h1>
            <p>fillerText</p>
            <h1 className="cardHeader">Specialties:</h1>
            <p>fillertext</p>
            </section>
        </div>
    
        <section>
            <div className="sampleBox">
                <div className="cardHeader">
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
