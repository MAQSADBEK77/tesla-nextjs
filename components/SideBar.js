import { sideBarData } from "../data/SideBar";
import { Link, animateScroll as scroll } from "react-scroll";
import Linkk from "next/link";
function SideBar({ sideBar, toogleSideBar }) {
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <>
      <div
        className={sideBar ? "backdrop" : "backdrop notActiveBackdrop"}></div>
      <div className={sideBar ? "sideBar active" : "sideBar NotActive"}>
        <div className="sideBar-body">
          <div className="sidebar-regstration">
            <Linkk href="/SignUp">Sign In</Linkk>
            <Linkk href="/SignUp">Sign Up</Linkk>
          </div>
          {sideBarData.map((item) => (
            <Link
              onClick={toogleSideBar}
              key={item.title}
              activeClass="active"
              to={"test" + item.id}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
              href={item.path}>
              {item.title}
            </Link>
          ))}{" "}
        </div>
      </div>
    </>
  );
}

export default SideBar;
