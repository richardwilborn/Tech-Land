import "./Styles/GetStarted.css"
import React from "react";




function GetStarted(){
   
    return (<>
    <div className="loginBody">
    <div className="gsContainer">
        <div className="loginContainer">
            <input id="item1" type="radio" name="item" className="signIn" checked></input><label htmlFor="item1" className="item">Sign In</label>
            <input id="item2" type="radio" name="item" className="signUp" checked></input><label htmlFor="item2" className="item">Sign Up</label>
            <div className="loginForm">
                <div className="signInHtm">
                    <div className="group">
                        <input placeholder="Username" id="user" type="text" className="input"></input>
                    </div>
                    <div className="group">
                        <input placeholder="Password" id="pass" type="password" className="input" datatype="password"></input>
                    </div>
                    <div className="group">
                        <input type="submit" className="button" ></input>
                    </div>
                        <div className="hr"></div>
                        <div className="footer">
                            <a href="*" >Forgot Password?</a>
                        </div>
                </div>
                <div className="signUpHtm">
                    <div className="group">
                        <input placeholder="Username" id="user" type="text" className="input"></input>
                    </div>
                    <div className="group">
                        <input placeholder="Email address" id="pass" type="text" className="input"></input>
                    </div>
                    <div className="group">
                        <input placeholder="Password" id="pass" type="password" className="input" datatype="password"></input>
                    </div>
                    <div className="group">
                        <input placeholder="Repeat password" id="pass" type="password" className="input" datatype="password"></input>
                    </div>
                    <div className="group">
                        <input  type="submit" className="button"></input>
                    </div>
                    <div className="hr"></div>
                    <div className="footer">
                        <label className="account" htmlFor="item1">Already have an account?</label>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
    </>
    );
}

export default GetStarted;