import styles from "./styles.module.scss";

export const FullImage = ({ image, setFull }) => {
  return (
    <div className={styles.FullWrap}>
      <div className={styles.OverLay}></div>
      <div className={styles.FullImage}>
        <div className={styles.TopFullWrap}>
          <h3>Titolo</h3>
          <p onClick={() => setFull("")}>X</p>
        </div>
        <img src={image} alt="full" />
        <div className={styles.BottomFullWrap}>
          <div className={styles.BottomFull}>
            <p>cuore</p>
            <p>condivisioni</p>
          </div>
        </div>
      </div>
    </div>
  );
};
