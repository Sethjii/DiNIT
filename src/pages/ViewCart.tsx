import { FunctionComponent } from "react";
import styles from "./ViewCart.module.css";

const ViewCart: FunctionComponent = () => {
  return (
    <div className={styles.viewCart}>
      <img className={styles.backSymbolIcon} alt="" src="../back-symbol.svg" />
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
      <div className={styles.orderSuccessful}>Order Successful :)</div>
      <img className={styles.phoneMenuIcon} alt="" src="../phone-menu1.svg" />
    </div>
  );
};

export default ViewCart;
