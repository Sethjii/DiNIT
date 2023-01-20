import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSnacksCornerContainerClick = useCallback(() => {
    navigate("/moxie-order-page");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div
        className={styles.snacksCorner}
        onClick={onSnacksCornerContainerClick}
      >
        <img
          className={styles.maskImageIcon}
          alt=""
          src="../mask-image2@2x.png"
        />
        <div className={styles.moxie}> Moxie</div>
        <div className={styles.beverages}>Beverages</div>
        <div className={styles.forOne}>₹100 for one</div>
        <div className={styles.snacksCornerChild} />
        <div className={styles.div}>4.1</div>
        <img className={styles.starIcon} alt="" src="../vector-113.svg" />
        <img className={styles.arrowIcon} alt="" src="../arrow.svg" />
        <img className={styles.greenLeafIcon} alt="" src="../green-leaf.svg" />
      </div>
      <div className={styles.hanumanSweets}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle@2x.png"
        />
        <div className={styles.garg}>Garg</div>
        <div className={styles.mithaiBeverages}>Mithai, Beverages</div>
        <div className={styles.forOne1}>₹100 for one</div>
        <div className={styles.hanumanSweetsChild} />
        <div className={styles.div1}>4.1</div>
        <img className={styles.starIcon1} alt="" src="../vector-113.svg" />
        <img className={styles.arrowIcon1} alt="" src="../arrow.svg" />
        <img className={styles.greenLeafIcon1} alt="" src="../green-leaf.svg" />
      </div>
      <div className={styles.deepakCanteen}>
        <img
          className={styles.maskImageIcon1}
          alt=""
          src="../mask-image3@2x.png"
        />
        <div className={styles.deepakCanteenChild} />
        <div className={styles.deepakCanteenH9Parent}>
          <div className={styles.deepakCanteenH9}>Deepak Canteen (H9)</div>
          <div className={styles.chineseIndian}>Chinese, Indian</div>
          <div className={styles.forOne2}>₹150 for one</div>
          <div className={styles.groupChild} />
          <div className={styles.div2}>4.0</div>
          <img className={styles.starIcon2} alt="" src="../vector-113.svg" />
          <img className={styles.arrowIcon2} alt="" src="../arrow2.svg" />
          <img
            className={styles.greenLeafIcon2}
            alt=""
            src="../green-leaf2.svg"
          />
        </div>
      </div>
      <div className={styles.seeMore}>
        <div className={styles.seeMore1}>See more</div>
        <div className={styles.seeMoreChild} />
        <img className={styles.seeMoreItem} alt="" src="../vector-111.svg" />
      </div>
      <div className={styles.amul}>
        <img
          className={styles.maskImageIcon2}
          alt=""
          src="../mask-image4@2x.png"
        />
        <div className={styles.deepakCanteenChild} />
        <div className={styles.amul1}>Amul</div>
        <div className={styles.dessertsIceCream}>
          Desserts, Ice Cream, Beverages
        </div>
        <div className={styles.chai}>Chai</div>
        <div className={styles.forOne3}>₹150 for one</div>
        <div className={styles.amulItem} />
        <div className={styles.div3}>4.2</div>
        <img className={styles.starIcon3} alt="" src="../vector-113.svg" />
        <img className={styles.arrowIcon3} alt="" src="../arrow2.svg" />
        <img
          className={styles.greenLeafIcon3}
          alt=""
          src="../green-leaf2.svg"
        />
      </div>
      <div className={styles.eatHealthyGroup}>
        <div className={styles.textAndSymbols}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="../mask-group4@2x.png"
          />
          <div className={styles.textAndSymbolsChild} />
          <div className={styles.nitJuiceCorner}>NIT Juice Corner</div>
          <div className={styles.healthyFood}>Healthy food</div>
          <div className={styles.textAndSymbolsItem} />
          <div className={styles.div4}>4.3</div>
          <img className={styles.starIcon4} alt="" src="../vector-113.svg" />
          <img className={styles.arrowIcon4} alt="" src="../arrow2.svg" />
          <img
            className={styles.greenLeafIcon4}
            alt=""
            src="../green-leaf4.svg"
          />
        </div>
        <div className={styles.forOne4}>₹150 for one</div>
      </div>
      <i className={styles.dinnersAroundYou}>12 Dinners around you</i>
      <div className={styles.seeMore2}>
        <div className={styles.seeMore1}>See more</div>
        <div className={styles.seeMoreChild} />
        <img className={styles.seeMoreItem} alt="" src="../vector-111.svg" />
      </div>
      <div className={styles.healthyBiryani}>
        <div className={styles.healthy}>Healthy</div>
        <div className={styles.pizza}>Pizza</div>
        <div className={styles.cake}>Cake</div>
        <div className={styles.rolls}>Rolls</div>
        <div className={styles.biryani}>Biryani</div>
        <img className={styles.biryaniIcon} alt="" src="../biryani@2x.png" />
        <img className={styles.healthyIcon} alt="" src="../healthy@2x.png" />
        <img className={styles.burgerIcon} alt="" src="../burger@2x.png" />
        <img className={styles.cakeIcon} alt="" src="../cake@2x.png" />
        <img className={styles.pizzaIcon} alt="" src="../pizza@2x.png" />
        <img className={styles.shawarmaIcon} alt="" src="../shawarma@2x.png" />
        <div className={styles.burger}>Burger</div>
      </div>
      <i className={styles.eatWhatMakes}>Eat what makes you happy</i>
      <div className={styles.topBar}>
        <div className={styles.topBarChild} />
        <Form.Group className={styles.searchParent}>
          <Form.Label>search</Form.Label>
          <Form.Control type="text" placeholder="sanskar" />
        </Form.Group>
        <div className={styles.outletsFood}>Outlets, Food....</div>
        <img className={styles.searchIcon} alt="" src="../search-icon.svg" />
        <div className={styles.statusBar}>
          <div className={styles.statusBar1}>
            <div className={styles.time}>9:27</div>
            <img className={styles.wifiIcon} alt="" src="../wifi3.svg" />
            <img className={styles.cellIcon} alt="" src="../cell3.svg" />
            <div className={styles.battery}>
              <div className={styles.border} />
              <img className={styles.capIcon} alt="" src="../cap3.svg" />
              <div className={styles.capacity} />
            </div>
          </div>
        </div>
        <img className={styles.maxSafetyIcon} alt="" src="../max-safety.svg" />
      </div>
      <img className={styles.phoneMenuIcon} alt="" />
    </div>
  );
};

export default Home;
