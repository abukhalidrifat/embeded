import { useState } from "react";
import styles from "../styles/FAQ.module.css";

function FAQ({qs,ans}) {
  const [showAns, setShowAns] = useState(false);
  return (
    <>
      <div className={styles.faqbox}>
        <div className={styles.faqQs}>
        <h3>{qs}</h3>
        <span onClick={()=>setShowAns((p)=>!p)} className={styles.faqgtsign}>&gt;</span>
        </div>
        {showAns && (
          <p>
            {ans}
          </p>
        )}
      </div>
    </>
  );
}

export default FAQ;
