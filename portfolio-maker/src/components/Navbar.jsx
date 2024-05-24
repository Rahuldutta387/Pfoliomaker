import "./Navbar.css";
const Navbar = () => {
  const navbarMenuItems = [
    {
      title: "Homee",
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
    <nav className="navbar">
      <div>i</div>
      <div className="menulink">
        <ul className="mainList">
          {navbarMenuItems.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
