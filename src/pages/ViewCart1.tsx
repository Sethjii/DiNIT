import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./ViewCart1.module.css";

const ViewCart1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onViewCartTextClick = useCallback(() => {
    navigate("/place-order");
  }, [navigate]);

  return (
    <div className={styles.viewCart}>
      <img className={styles.backSymbolIcon} alt="" src="../back-symbol.svg" />
      <div className={styles.delivery}>
        <div className={styles.deliveryChild} />
        <div className={styles.div}>4.2</div>
        <img className={styles.deliveryItem} alt="" src="../vector-11.svg" />
        <div className={styles.delivery1}>DELIVERY</div>
      </div>
      <div className={styles.photos}>
        <img className={styles.maskImageIcon} alt="" src="../group-66@2x.png" />
        <div className={styles.photosChild} />
        <div className={styles.div1}>6</div>
        <div className={styles.photos1}>PHOTOS</div>
      </div>
      <div className={styles.vegOptionOnoff}>
        <div className={styles.vegOptionOnoffChild} />
        <div className={styles.vegOptionOnoffItem} />
        <div className={styles.veg}>
          <p className={styles.veg1}>Veg</p>
        </div>
      </div>
      <div className={styles.eggOptionOnoff}>
        <div className={styles.vegOptionOnoffChild} />
        <div className={styles.vegOptionOnoffItem} />
        <div className={styles.egg}>
          <p className={styles.veg1}>Egg</p>
        </div>
      </div>
      <img className={styles.viewCartChild} alt="" src="../line-16.svg" />
      <div className={styles.plantProtienBowl}>
        <div className={styles.hakkaNoodleParent}>
          <div className={styles.hakkaNoodle}>Hakka Noodle</div>
          <div className={styles.div2}>₹ 60</div>
          <div className={styles.ratingStar}>
            <img
              className={styles.ratingStarChild}
              alt=""
              src="../group-69.svg"
            />
            <div className={styles.div3}>11</div>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.mustTry}>Must Try</div>
            </div>
          </div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="../mask-group@2x.png"
          />
        </div>
      </div>
      <div className={styles.springVeg}>
        <div className={styles.maskGroupParent}>
          <img
            className={styles.maskGroupIcon1}
            alt=""
            src="../mask-group1@2x.png"
          />
          <div className={styles.add}>
            <Button className={styles.addChild} variant="dark">
              Button
            </Button>
            <div className={styles.add1}>ADD</div>
            <div className={styles.div4}>+</div>
          </div>
          <img className={styles.groupItem} alt="" />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <div className={styles.rectangleDiv} />
            <div className={styles.delivery2}>DELIVERY</div>
            <div className={styles.maxSafety}>MAX SAFETY</div>
          </div>
          <div className={styles.samosaParent}>
            <div className={styles.samosa}>Samosa</div>
            <div className={styles.div5}>₹ 10</div>
            <div className={styles.kcal}>478-kcal</div>
            <div className={styles.div6}>4.3</div>
            <img className={styles.vectorIcon} alt="" src="../vector-113.svg" />
            <img className={styles.groupIcon} alt="" src="../group-31.svg" />
            <img className={styles.groupChild1} alt="" src="../group-32.svg" />
            <div className={styles.ratingStar1}>
              <img
                className={styles.ratingStarChild}
                alt=""
                src="../group-69.svg"
              />
              <div className={styles.div3}>16</div>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild} />
                <div className={styles.mustTry}>Must Try</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.vegIconChild} />
          <img className={styles.ellipseIcon} alt="" src="../ellipse-40.svg" />
        </div>
      </div>
      <div className={styles.vegIcon}>
        <div className={styles.vegIconChild} />
        <img className={styles.ellipseIcon} alt="" src="../ellipse-40.svg" />
      </div>
      <Button className={styles.menuBotton} variant="dark">
        Menu
      </Button>
      <div className={styles.fullMenu}>
        <div className={styles.fullMenuChild} />
        <div className={styles.fullMenuItem} />
        <div className={styles.healthy}>Healthy</div>
        <div className={styles.fullMenu1}>Full Menu</div>
      </div>
      <Form.Group className={styles.searchFormgroup}>
        <Form.Label>Search</Form.Label>
        <Form.Control type="text" placeholder="Search" />
      </Form.Group>
      <div className={styles.recommended}>
        <img
          className={styles.recommendedChild}
          alt=""
          src="../vector-22.svg"
        />
        <b className={styles.recommended1}>Recommended</b>
      </div>
      <Button className={styles.button} variant="light">
        1
      </Button>
      <div className={styles.viewCart1}>
        <div className={styles.viewCartItem} />
        <div
          className={styles.viewCart2}
          onClick={onViewCartTextClick}
        >{`View Cart `}</div>
        <div className={styles.item}>1 ITEM</div>
        <div className={styles.div8}>60</div>
        <div className={styles.div9}>₹ 279</div>
      </div>
      <img
        className={styles.continueOptionIcon}
        alt=""
        src="../continue-option.svg"
      />
      <div className={styles.statusBar}>
        <div className={styles.time}>9:27</div>
        <img className={styles.wifiIcon} alt="" src="../wifi1.svg" />
        <img className={styles.cellIcon} alt="" src="../cell1.svg" />
        <div className={styles.battery}>
          <div className={styles.border} />
          <img className={styles.capIcon} alt="" src="../cap.svg" />
          <div className={styles.capacity} />
        </div>
      </div>
      <div className={styles.eatHealthy}>
        <div className={styles.moxie}>Moxie</div>
        <div className={styles.nearOat}>Near OAT</div>
      </div>
      <img className={styles.phoneMenuIcon} alt="" src="../phone-menu1.svg" />
    </div>
  );
};

export default ViewCart1;
