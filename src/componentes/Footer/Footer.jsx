import "../Footer/Footer.css"
import {useState} from "react"
import { VscGithubAlt } from "react-icons/vsc";
import { RiInstagramLine } from "react-icons/ri";
import { RxDiscordLogo } from "react-icons/rx";
import { BiSolidUpArrow } from "react-icons/bi";

const Footer = () => {
    const [even,setEven] = useState(0);
    const Unrotate = () => {
        document.getElementById("rotateLogo").classList.remove("animation-name");
        document.getElementById("rotateLogo").classList.remove("animation-duration");
        document.getElementById("rotateLogo").classList.remove("animation-timing-function");
    
    }
    const Rotater = () => {
        document.getElementById("rotateLogo").style.animationName = "rotating";
        document.getElementById("rotateLogo").style.animationDuration = "3s"; // Set the duration to 5 seconds
        document.getElementById("rotateLogo").style.animationTimingFunction = "linear"; // Set the timing function to linear
    }
    const toss = () => {
        if(even === 0){
            Rotater();
            setEven(1);
        }else{
            Unrotate();
            setEven(0);
        }
    }
  return (
    <>
    <footer id="footer">
        <div className="container-fluid border-rounded rounded-3 border-top border-dark mt-3 p-3">
            <div className="row">
                <div className="col border-end d-flex flex-column">
                    <i>
                    <kbd>TheNoyau</kbd>: Think Ultimate
                    Our Services will be Available Soon
                    </i>
                </div>
                <div className="col-3 border-bottom">
                    <div id="rotateLogo" onClick={toss} >
                    <img id="rotateLogoIMG" className="rounded-circle z-6"  src="/images/noyau.jpeg" alt="Noyau" />
                    </div>
                </div>
                <div className="col border-bottom ">
                    <h3>Quick Way</h3>
                    <ul className="QuickLinks">
                        <li><a href="/Base">Base</a></li>
                        <li><a href="/Community">Community</a></li>
                        <li><a href="/OurLab">Our Labs</a></li>
                        <li><a href="/OurServices">Services</a></li>
                        <li><a href="/Notes">Notes</a></li>
                        <li><a href="/Contact">Contact</a></li>            
                    </ul>
                </div>
                <div className="col ">
                    <h3>Social Handels</h3>
                    <ul className="d-flex flex-column justify-content-center  QuickLinks">
                        <li><a href="#"><VscGithubAlt/></a></li>
                        <li><a href="#"><RiInstagramLine /></a></li>
                        <li><a href="#"><RxDiscordLogo/></a></li>
                    </ul>
                </div>
                <div className="col border-start d-flex justify-content-center align-items-center ">
                    <div className="border-rounded rounded-circle border border-dark p-2">

                    <a id="topbtn" href="#top"><BiSolidUpArrow style={{fontSize: 30}} /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer