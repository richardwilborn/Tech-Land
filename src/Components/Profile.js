import "./Styles/Profile.css"


function Home(){
    return (<>    <div>
        <img class="profilePic" src="./public/michelleyeoh.jpg" alt= "profile Pic"></img>
        <div className="Home">
            <section> <h1>Name</h1>
            <p>fillertext</p>
            <h1>Github:</h1>
            <p>fillertext</p>
            <h1>LinkedIn</h1>
            <p>fillerText</p>
            <h1>Specialties:</h1>
            <p>fillertext</p></section>
        </div>
    
        <section>
            <div className="sampleBox">
                <h3>Sample Work: </h3>
                <p>Filler text here</p>
                <p>Filler Text Here</p>
            </div>
        </section>
    
        <div className='skillList'>
            <h3>Skills:</h3>
            <p>Filler Text here</p>
        </div>
        </div>

    </>
    );
}

export default Home;