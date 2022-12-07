import "./Styles/Profile.css"
import React from 'react'


function Home(){
    return (<>    <div className="profileContainer">
        {/* <img className="profilePic" src="src\Components\Styles\Img\michelleyeoh.jpg"alt= "profile Pic"></img> */}
        <div className="Home">

        {/* <div className="pictureSpace">
            <p>Your profile picture goes here!</p>
        </div> */}
            <section className="contactInformation"> 
            <h1 className="cardHeader">Name</h1>
            
            <h1 className="cardHeader">Github:</h1>
            
            <h1 className="cardHeader">LinkedIn</h1>
            
            <h1 className="cardHeader">Specialties:</h1>
            
            </section>
        </div>
    
        <section>
            <div className="sampleBox">
                <div className="cardHeader">
                <h3>Sample Work: </h3>
                </div>
           
            </div>
        </section>
    
        <div className='skillList'>
            <div class="cardHeader">
            <h3>Skills:</h3>
            </div>
          
        </div>
        </div>

    </>
    );
}

export default Home;
