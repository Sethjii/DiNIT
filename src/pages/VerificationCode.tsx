import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./VerificationCode.module.css";

const VerificationCode: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackOptionIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onSendOTPContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.verificationCode}>
      <img
        className={styles.backOptionIcon}
        alt=""
        src="../back-option@2x.png"
        onClick={onBackOptionIconClick}
      />
      <div className={styles.weHaveSent}>
        We have sent a verification code to
      </div>
      <div className={styles.mobileNumber}>+91-6201391815</div>
      <div className={styles.otp}>
        <div className={styles.otpCode}>
          <div className={styles.div}>3</div>
          <div className={styles.div1}>3</div>
          <div className={styles.div2}>1</div>
          <div className={styles.div3}>9</div>
          <div className={styles.div4}>6</div>
          <div className={styles.div5}>3</div>
        </div>
        <div className={styles.otpBox}>
          <div className={styles.otpBoxChild} />
          <div className={styles.otpBoxItem} />
          <div className={styles.otpBoxInner} />
          <div className={styles.rectangleDiv} />
          <div className={styles.otpBoxChild1} />
          <div className={styles.otpBoxChild2} onClick={onRectangle5Click} />
        </div>
      </div>
      <div className={styles.div6}>0:19</div>
      <div className={styles.didntReceiveThe}>Didn’t receive the code?</div>
      <div className={styles.resendNow}>Resend now</div>
      <img className={styles.phoneMenuIcon} alt="" src="../phone-menu.svg" />
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
      <div className={styles.course}>Course</div>
      <div className={styles.branch}>Branch</div>
      <div className={styles.rollNo}>Roll No.</div>
      <div className={styles.name}>Name</div>
      <Form.Group className={styles.wrapper}>
        <Form.Control type="text" placeholder="Input placeholder" />
      </Form.Group>
      <Form.Group className={styles.container}>
        <Form.Control type="text" placeholder="Input placeholder" />
      </Form.Group>
      <Form.Group className={styles.frame}>
        <Form.Control type="text" placeholder="Input placeholder" />
      </Form.Group>
      <Form.Group className={styles.rectangleFormgroup}>
        <Form.Control type="text" placeholder="Input placeholder" />
      </Form.Group>
      <div className={styles.sendOtp} onClick={onSendOTPContainerClick}>
        <div className={styles.sendOtpChild} onClick={onRectangle6Click} />
        <div className={styles.sendOtp1}>SUBMIT</div>
      </div>
    </div>
  );
};

export default VerificationCode;
