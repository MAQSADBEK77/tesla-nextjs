import { sideBarData } from "../data/SideBar";
import { Link, animateScroll as scroll } from "react-scroll";

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
          {sideBarData.map((item) => (
            <Link
              onClick={toogleSideBar}
              key={item.title}
              href={item.path}
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
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBar;
