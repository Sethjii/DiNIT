import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./PlaceOrder.module.css";

const PlaceOrder: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCloseIconXClick = useCallback(() => {
    navigate("/view-cart");
  }, [navigate]);

  const onPlaceOrderClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.placeOrder}>
      <div className={styles.eatHealthyBckDrop}>
        <button className={styles.eatHealthy}>
          <div className={styles.moxie}>Moxie</div>
          <div className={styles.kukatpallyHyderabad}>
            Kukatpally, Hyderabad
          </div>
        </button>
        <img className={styles.backIcon} alt="" src="../back-symbol.svg" />
        <div className={styles.delivery}>
          <div className={styles.deliveryChild} />
          <div className={styles.div}>4.2</div>
          <img className={styles.deliveryItem} alt="" src="../vector-11.svg" />
          <div className={styles.delivery1}>DELIVERY</div>
        </div>
        <div className={styles.photos}>
          <img className={styles.photosChild} alt="" src="../group-66@2x.png" />
          <div className={styles.photosItem} />
          <div className={styles.div1}>6</div>
          <div className={styles.photos1}>PHOTOS</div>
        </div>
      </div>
      <div className={styles.tip}>
        <div className={styles.tipChild} />
        <div className={styles.whiteRectangle} />
        <div className={styles.plantProtienBowlStarsVeg}>
          <div className={styles.hakkaNoodles}>Hakka Noodles</div>
          <div className={styles.vegPreparation}>
            <div className={styles.addOnExtra}>Add On: Extra Paneer</div>
          </div>
        </div>
        <img
          className={styles.closeIconX}
          alt=""
          src="../close-icon-x.svg"
          onClick={onCloseIconXClick}
        />
        <div className={styles.vegIcon}>
          <div className={styles.vegIconChild} />
          <img className={styles.vegIconItem} alt="" src="../ellipse-40.svg" />
        </div>
      </div>
      <div className={styles.addCookingInstructions}>
        <div className={styles.div2}>₹ 60</div>
        <div className={styles.div3}>₹ 60</div>
        <div className={styles.addCookingInstructions1}>
          Add cooking instructions (optional)
        </div>
        <img
          className={styles.addCookingInstructionsChild}
          alt=""
          src="../line-18.svg"
        />
        <Button className={styles.button} variant="primary" />
      </div>
      <img className={styles.linesIcon} alt="" src="../lines.svg" />
      <div className={styles.grandTotal}>
        <div className={styles.grandTotal1}>
          <i className={styles.grandTotal2}>Grand Total</i>
          <i className={styles.i}> ₹60.00</i>
          <div className={styles.itemTotal}>Item Total</div>
          <div className={styles.add}>Add</div>
          <div className={styles.donate3To}>
            Donate ₹3 to Feeding India Foundation
          </div>
          <div className={styles.div4}> ₹60.00</div>
          <img className={styles.grandTotalChild} alt="" src="../line-22.svg" />
          <div className={styles.grandTotalItem} />
        </div>
        <img
          className={styles.rectangleColorIcon}
          alt=""
          src="../rectangle-color.svg"
        />
      </div>
      <div className={styles.deliveryInstructions}>
        <i className={styles.orderInstructions}>Order instructions</i>
        <i className={styles.yourDetails}>Your details</i>
        <i className={styles.orderForSomeone}>Order for someone else</i>
        <div className={styles.change}>Change</div>
        <div className={styles.change1}>Change</div>
        <div className={styles.ordersOncePlaced}>
          Orders once placed cannot be cancelled and are non-refundable.
        </div>
        <div className={styles.add1}>Add</div>
        <div className={styles.deliveryInstructionsChild} />
        <div className={styles.handMeThe}>Hand me the Order</div>
        <div className={styles.sanskarSeth6201391815}>
          Sanskar Seth, 6201391815
        </div>
        <div className={styles.addVoiceDirections}>Add voice directions</div>
        <img
          className={styles.deliveryInstructionsItem}
          alt=""
          src="../group-83.svg"
        />
        <img
          className={styles.deliveryInstructionsInner}
          alt=""
          src="../polygon-2.svg"
        />
      </div>
      <Button
        className={styles.placeOrder1}
        variant="dark"
        onClick={onPlaceOrderClick}
      >
        ₹60.00
      </Button>
      <div className={styles.gpay}>
        <i className={styles.googlePay}>Google Pay</i>
        <div className={styles.payUsing}>PAY USING</div>
        <img className={styles.gpayChild} alt="" src="../polygon-4.svg" />
        <div className={styles.gPay}>
          <i className={styles.pay}>Pay</i>
          <img className={styles.search1Icon} alt="" src="../search-1@2x.png" />
        </div>
        <div className={styles.gpayItem} />
      </div>
      <img className={styles.phoneMenuIcon} alt="" src="../phone-menu1.svg" />
      <div className={styles.address}>
        <div className={styles.addressChild} />
        <div className={styles.deliveryIn12Container}>
          <span>Delivery in 12</span>
          <i className={styles.mins}> mins</i>
        </div>
        <img className={styles.addressItem} alt="" src="../vector-111.svg" />
        <img className={styles.addressInner} alt="" src="../group-75.svg" />
      </div>
    </div>
  );
};

export default PlaceOrder;
