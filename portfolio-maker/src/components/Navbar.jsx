import "./Navbar.css";
import portImage from "../images/dp.png";
const Navbar = () => {
  const navbarMenuItems = [
    {
      title: "Home",
    },
    {
      title: "Feature",
    },
    {
      title: "Projects",
    },
    {
      title: "Resume",
    },
    {
      title: "Testimonial",
    },
    {
      title: "Contact",
    },
  ];
  return (
    <>
      <div className="navbarParent">
        <nav className="navbar">
          <div className="imageParent">
            <img
              className="image"
              src={portImage}
              alt="portfolioImage"
              width="50"
              height="50"
            ></img>
          </div>
          <div className="menulink">
            <ul className="mainList">
              {navbarMenuItems.map((item) => (
                <li className="itemList">{item.title}</li>
              ))}
            </ul>
          </div>

          {/* <hr></hr> */}
        </nav>
        <div className="horizontalLine"></div>
      </div>
      <div className="demo"></div>
    </>
  );
};

export default Navbar;
