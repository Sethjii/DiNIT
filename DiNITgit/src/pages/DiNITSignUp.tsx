import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./DiNITSignUp.module.css";

const DiNITSignUp: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/verification-code");
  }, [navigate]);

  return (
    <div className={styles.dinitSignUp}>
      <div className={styles.sendOtp}>
        <div className={styles.sendOtpChild} onClick={onRectangleClick} />
        <div className={styles.sendOtp1}>Send OTP</div>
      </div>
      <div className={styles.skip}>
        <div className={styles.skipChild} />
        <div className={styles.skip1}>Skip</div>
      </div>
      <div className={styles.google}>
        <div className={styles.googleChild} />
        <div className={styles.google1}>Google</div>
        <img className={styles.search1Icon} alt="" src="../search-11@2x.png" />
      </div>
      <div className={styles.policy}>
        <div className={styles.byContinuingYou}>
          By continuing, you agree to our
        </div>
        <div className={styles.termsOfService}>{`Terms of Service `}</div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
        <div className={styles.contentPolicy}>Content Policy</div>
        <div className={styles.policyChild} />
        <div className={styles.policyItem} />
        <div className={styles.policyInner} />
      </div>
      <div className={styles.or}>
        <img className={styles.orChild} alt="" src="../line-2.svg" />
        <div className={styles.or1}>OR</div>
        <img className={styles.orItem} alt="" src="../line-2.svg" />
      </div>
      <Form.Group className={styles.mobileNumberFormgroup}>
        <Form.Label>+91 6201391815</Form.Label>
        <Form.Control type="text" placeholder="Input placeholder" />
      </Form.Group>
    </div>
  );
};

export default DiNITSignUp;
