import { useContext } from "react"
import { UserContext } from "./UserContext";
import "./Home.css";
import userImage from "../images/userImage.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-brands-svg-icons';

export function Home() {
    const [userData] = useContext(UserContext);
    const profiles = ["LinkedIn", "facebook", "github"];

    const getIcon = (profileType) =>{
        let iconType = profileType.toLowerCase() === "linkedin" ? icons.faLinkedinIn : profileType.toLowerCase() === "facebook" ? icons.faFacebook : profileType.toLowerCase() === "github"? icons.faGithub : "";
        let profileUrl = profileType === "LinkedIn"? "https://www.linkedin.com" : "";
        let profileIcon = (
            <div className="profileIcon">
                <a href={profileUrl} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={iconType} className="iconStyle"/></a>
            </div>
        );
        return profileIcon;
    }

    return (
        <>
        <div className="home-section">
            <div className="intro-section">
                <div className="intro-sub-section">
                    <div>WELCOME TO MY WORLD</div>
                    <h1>Hi, I'm <span className="userName">{userData.name}</span></h1>
                    <h2>a <span className="animateRole">{userData.role}</span></h2>
                    <div style={{lineHeight: 'normal'}}>
                        {userData.description}
                    </div>
                </div>
                <div className="icons-section">
                    <div> FIND ME IN  
                        <div className="profile-icons">
                        {profiles.map((item)=>{
                            return getIcon(item)
                        })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-image-section">
                <img src={userImage} width={500} height={685} alt="userImage"></img>
                <div className="background-box"></div>
            </div>
        </div>
        <div className="hrLine"></div>
        <div>Features Section starts here</div>
        </>
    )
}