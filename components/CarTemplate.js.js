import css from "../styles/CarTemplate.module.css";
import downArrow from "../public/images/down-arrow.svg";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
function CarTemplate({
  imgSrc,
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
  const [count, setCount] = useState(0);
  const handleClick = () => {
    const value2 = count + window.innerHeight;
    window.scrollTo(count, value2);
    setCount(count + window.innerHeight);
  };
  return (
    <>
      <div
        data-aos="fade-down"
        style={{ background: `url(${imgSrc.src})` }}
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
