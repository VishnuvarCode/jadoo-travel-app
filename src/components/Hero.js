import styles from "../styles/Hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.decoreBackground}></div>
      
      <div className={styles.decore}></div>
      <div className={styles.heroDecoreRect}></div>
      <div className={styles.heroDecoreRectangle}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h5>BEST DESTINATIONS AROUND THE WORLD</h5>
          <h1>
            Travel, 
            <span className={styles.enjoyWord}>enjoy
              <div className={styles.decoreUnderEnjoy}></div>
            </span>
            <br />
            and live a new
            <br />
            and full life
          </h1>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            <br />
            Preferred to sportsmen it engrossed listening. Park gate
            <br />
            sell they west hard for the.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>Find out more</button>
            <button className={styles.secondaryBtn}>
              <span className={styles.playIcon}></span>
              Play Demo
            </button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <Image
            src="/images/Image.png"
            alt="Happy traveler"
            width={766}
            height={873}
            priority
          />
        </div>
      </div>
    </section>
  );
}
