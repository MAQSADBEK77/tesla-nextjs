import css from "../styles/CarTemplate.module.css";
import Fade from "react-reveal/Fade";
import downArrow from "../public/images/down-arrow.svg";
function CarTemplate({
  imgSrc,
  carName,
  carCost,
  carDescription,
  orderTo,
  demoTo,
}) {
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
          <a href={orderTo}>
            <button>Order Now</button>
          </a>
          <div>
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
