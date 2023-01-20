import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./MoxieOrderPage.module.css";

const MoxieOrderPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackSymbolIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onSpringVegPlaterClick = useCallback(() => {
    navigate("/view-cart");
  }, [navigate]);

  return (
    <div className={styles.moxieOrderPage}>
      <div className={styles.eatHealthy}>
        <div className={styles.moxie}>Moxie</div>
        <div className={styles.nearOat}>Near OAT</div>
      </div>
      <img
        className={styles.backSymbolIcon}
        alt=""
        src="../back-symbol.svg"
        onClick={onBackSymbolIconClick}
      />
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
      <div className={styles.deliveryDiningReviews}>
        <div className={styles.diningReviews}>
          <div className={styles.diningReviewsChild} />
          <div className={styles.reviews}>REVIEWS</div>
        </div>
        <Button className={styles.deliveryInBlack} variant="primary">
          DINING
        </Button>
      </div>
      <div className={styles.vegOnoff}>
        <div className={styles.vegOnoffChild} />
        <div className={styles.vegOnoffItem} />
        <div className={styles.veg}>
          <p className={styles.veg1}>Veg</p>
        </div>
      </div>
      <div className={styles.eggOnoff}>
        <div className={styles.vegOnoffChild} />
        <div className={styles.vegOnoffItem} />
        <div className={styles.egg}>
          <p className={styles.veg1}>Egg</p>
        </div>
      </div>
      <img className={styles.moxieOrderPageChild} alt="" src="../line-16.svg" />
      <div className={styles.plantProtienBowl}>
        <div className={styles.maskGroupParent}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="../mask-group@2x.png"
          />
          <div className={styles.add}>
            <div className={styles.addChild} />
            <div className={styles.add1}>ADD</div>
            <div className={styles.div2}>+</div>
          </div>
          <div className={styles.samosaParent}>
            <div className={styles.samosa}>Samosa</div>
            <div className={styles.div3}>₹ 10</div>
            <div className={styles.kcal}>478-kcal</div>
            <div className={styles.div4}>4.3</div>
            <img className={styles.groupChild} alt="" src="../vector-113.svg" />
            <img className={styles.groupItem} alt="" src="../group-31.svg" />
            <img className={styles.groupInner} alt="" src="../group-321.svg" />
            <div className={styles.ratingStar}>
              <img
                className={styles.ratingStarChild}
                alt=""
                src="../group-69.svg"
              />
              <div className={styles.div5}>11</div>
              <div className={styles.rectangleParent}>
                <div className={styles.rectangleDiv} />
                <div className={styles.mustTry}>Must Try</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.springVegPlater} onClick={onSpringVegPlaterClick}>
        <div className={styles.maskGroupGroup}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="../mask-group1@2x.png"
          />
          <div className={styles.add}>
            <Button className={styles.addItem} variant="light">
              Button
            </Button>
            <div className={styles.add1}>ADD</div>
            <div className={styles.div2}>+</div>
          </div>
          <div className={styles.hakkaNoodlesParent}>
            <div className={styles.hakkaNoodles}>Hakka Noodles</div>
            <div className={styles.div7}>₹ 60</div>
            <div className={styles.ratingStar}>
              <img
                className={styles.ratingStarChild}
                alt=""
                src="../group-69.svg"
              />
              <div className={styles.div5}>16</div>
              <div className={styles.rectangleGroup}>
                <div className={styles.groupChild1} />
                <div className={styles.mustTry}>Must Try</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.vegIcon}>
          <div className={styles.vegIconChild} />
          <img className={styles.vegIconItem} alt="" src="../ellipse-40.svg" />
        </div>
      </div>
      <div className={styles.vegIcon1}>
        <div className={styles.vegIconChild} />
        <img className={styles.vegIconItem} alt="" src="../ellipse-40.svg" />
      </div>
      <Button className={styles.menu} variant="dark">
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
        <Form.Control type="text" placeholder="search" />
      </Form.Group>
      <div className={styles.recommended}>
        <img
          className={styles.recommendedChild}
          alt=""
          src="../vector-22.svg"
        />
        <div className={styles.recommended1}>Recommended</div>
      </div>
      <div className={styles.topBar}>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupChild2} />
          <div className={styles.statusBar}>
            <div className={styles.time}>9:27</div>
            <img className={styles.wifiIcon} alt="" src="../wifi.svg" />
            <img className={styles.cellIcon} alt="" src="../cell.svg" />
            <div className={styles.battery}>
              <div className={styles.border} />
              <img className={styles.capIcon} alt="" src="../cap.svg" />
              <div className={styles.capacity} />
            </div>
          </div>
        </div>
      </div>
      <img className={styles.phoneMenuIcon} alt="" src="../phone-menu4.svg" />
    </div>
  );
};

export default MoxieOrderPage;
