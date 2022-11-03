import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div>
          <p style={{ fontSize:'30px',fontWeight:'500',color:'blueviolet',marginBottom:'0' }}>Embeded</p>
          <p>Expert.io</p>
          <p>
            &copy; EmbeddedExpertIO™2022 Template has been designed by Rifat
          </p>
          <p>Privacy Policy</p>
          <p>Terms and Conditons</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
