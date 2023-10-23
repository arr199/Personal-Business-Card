import React from "react"


export const Intro = () => {
    
    return (
         <section className="intro">
            <img className="pfp" src="./images/abiel.jpg" />
         
            <h3 className="name">Abiel E Rodriguez</h3>  
            <p className="job">Frontend Developer</p>
            <p><a className="website-link" href="#">arr.website</a></p>
            <div className="buttons">
                <button className="email-btn" ><i className="fa-regular fa-envelope"></i>Email</button>
                <button className="linkedin-btn"><i className="fa-brands fa-linkedin"></i>Linkedin</button>
            </div>
         
           
         </section>
            
           )
    
}