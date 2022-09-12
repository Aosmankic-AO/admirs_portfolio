import data from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";



export default function Contact() {

  const mailIcon = <FontAwesomeIcon icon={faEnvelope} /> 
  const phoneIcon = <FontAwesomeIcon icon={faPhone} /> 
  const mapIcon = <FontAwesomeIcon icon={faEarth} />

    return (
      
      <main>
      <nav id="nav-wrap">
       <ul id="nav" className="nav">
       <li className="current"><a className="smoothscroll" href="/">Home</a></li>
            <li><a className="smoothscroll" href="./Resume">Resume</a></li>
              <li><a className="smoothscroll" href="./Contact">Contact</a></li>
       </ul>
   </nav>
 


      <div className="form-container">
        <form>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
        </form>
      </div>

      <div>
        My direct contact information
        <ul className="contact-container">  
        <li>{mapIcon} St.Louis, MO</li>
          <li>{mailIcon} Aosmankic@gmail.com</li>
          <li>{phoneIcon} 872-230-0514</li>
        </ul>
      </div>

  </main>
    );
}