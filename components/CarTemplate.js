import css from "../styles/CarTemplate.module.css";
import downArrow from "../public/images/down-arrow.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, Element, animateScroll as scroll } from "react-scroll";
function CarTemplate({
  carName,
  carCost,
  carDescription,
  orderTo,
  demoTo,
  id,
}) {
  const handleSetActive = (to) => {
    console.log(to);
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="fade-down"
        style={{ background: `url(images/model${id}.jpg)` }}
        className={css.CarTemplate}>
        <div className={css.texts}>
          <h1>{carName}</h1>
          <h2>{carCost}</h2>
          <p>{carDescription}</p>
        </div>
        <div data-aos="fade-up" className={css.buttons}>
          <a className={css.btn1} href={orderTo}>
            <button>Order Now</button>
          </a>
          <Link
            activeClass="active"
            to={"test" + id}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}>
            <img src={downArrow.src} alt="" />
          </Link>
          <a href={demoTo}>
            <button>Demo Drive</button>
          </a>
        </div>{" "}
        <Element name={"test" + id} className="element"></Element>
      </div>
    </>
  );
}

export default CarTemplate;
