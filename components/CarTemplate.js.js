import css from "../styles/CarTemplate.module.css";
import Fade from "react-reveal/Fade";
import downArrow from "../public/images/down-arrow.svg";
import { useState } from "react";
function CarTemplate({
  imgSrc,
  carName,
  carCost,
  carDescription,
  orderTo,
  demoTo,
}) {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    const value2 = count + window.innerHeight;
    window.scrollTo(count, value2);
    setCount(count + window.innerHeight);
  };
  return (
    <div
      style={{ background: `url(${imgSrc.src})` }}
      className={css.CarTemplate}>
      <Fade top>
        <div className={css.texts}>
          <h1>{carName}</h1>
          <h2>{carCost}</h2>
          <p>{carDescription}</p>
        </div>
      </Fade>
      <Fade bottom>
        <div className={css.buttons}>
          <a className={css.btn1} href={orderTo}>
            <button>Order Now</button>
          </a>
          <div onClick={handleClick}>
            <img src={downArrow.src} alt="" />
          </div>
          <a href={demoTo}>
            <button>Demo Drive</button>
          </a>
        </div>
      </Fade>
    </div>
  );
}

export default CarTemplate;
