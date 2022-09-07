import React from "react";
import data from "../data";


const Homepage = () => {

return (
	<main>
    <nav id="nav-wrap">
        <ul id="nav" className="nav">
        <li className="current"><a className="smoothscroll" href="/">Home</a></li>
               <li><a className="smoothscroll" href="./About">About</a></li>
             <li><a className="smoothscroll" href="./Resume">Resume</a></li>
               <li><a className="smoothscroll" href="./Contact">Contact</a></li>
        </ul>
    </nav>


<div className='banner-text'>
    <h1>Hello World. My name is Admir.</h1>
    <h3 id="intro">I am a recent computer programming and software development graduate with 
        years of experience in end-user troubleshooting and resolution. I would like to 
        take this experience with my newfound knowledge to help organizations maintain old and current technologies while working to 
        create and adapt to new ones.
    </h3>
    </div>

    <div>
    <div className="three columns">
{
data.About && data.About.map((item) => {
   return(
       <img className="profile-pic"  src={item.imgurl} />
   )
 })
}
</div>
    </div>

    <div className="skills-container">
    <ul className="skills">
      <p id="technologies">Technologies I have come across, used or otherwise engaged with during academic and personal projects</p>
       {
         data.skills && data.skills.map((item) => {
           return(
             <li>
             <img src={item.imgurl}></img>
             </li>
           )
         })
       }
      <br />
       {
        data.subskills && data.subskills.map((item) => {
          console.log(item)
          return(
            <li className="subskills">
              <img src={item.imgurl}></img>
            </li>
          )
        })
       }

    </ul>
    <hr/>




</div>

<div className="social-container">
  <p>Connect with me on LinkedIn or </p>
<ul className="social">
                  {
                    data.socialLinks.map(item =>{
                      return(
                                <a key={item.name} href={item.url} target="_blank">
                                    <i className={item.className}></i>
                                    </a>
                            )
                          }
                    )
                  }
               </ul>
</div>



</main>
);
};

export default Homepage;
