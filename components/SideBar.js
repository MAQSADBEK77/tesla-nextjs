import { sideBarData } from "@/data/SideBar";
import Link from "next/link";

function SideBar({ sideBar, toogleSideBar }) {
  return (
    <>
      <div className={sideBar ? "backdrop" : "backdrop notActiveBackdrop"}></div>
      <div className={sideBar ? "sideBar active" : "sideBar NotActive"}>
        <div className="sideBar-body">
          {sideBarData.map((item) => (
            <Link onClick={toogleSideBar} key={item.title} href={item.path}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBar;
