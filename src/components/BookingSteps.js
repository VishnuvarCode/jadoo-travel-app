import styles from "../styles/BookingSteps.module.scss";
import Image from "next/image";

export default function BookingSteps() {
  return (
    <section className={styles.bookingSteps}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.stepsSection}>
            <h5 className={styles.subtitle}>Easy and Fast</h5>
            <h2 className={styles.title}>
              Book Your Next Trip <br />
              <span>In 3 Easy Steps</span>
            </h2>

            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.icon}>
                  <div className={styles.iconBg}>
                    <Image
                      src="/images/Group 7.png"
                      alt="Destination"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
                <div className={styles.stepContent}>
                  <h3>Choose Destination</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.icon}>
                  <div className={styles.iconBg}>
                    <Image
                      src="/images/Group 12.png"
                      alt="Payment"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
                <div className={styles.stepContent}>
                  <h3>Make Payment</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.icon}>
                  <div className={styles.iconBg}>
                    <Image
                      src="/images/Group 11.png"
                      alt="Airport"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
                <div className={styles.stepContent}>
                  <h3>Reach Airport on Selected Date</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cardsSection}>
            <div className={styles.tripCard}>
              <div className={styles.tripImage}>
                <Image
                  src="/images/Rectangle 17.png"
                  alt="Trip to Greece"
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.tripDetails}>
                <h4>Trip To Greece</h4>
                <p className={styles.tripDate}>14-29 June | by Robbin jr</p>
                <div className={styles.tripMeta}>
                  <span className={styles.peopleGoing}>
                    <Image
                      src="/images/building 1.png"
                      alt="People"
                      width={16}
                      height={16}
                    />
                    24 people going
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.progressCard}>
              <div className={styles.progressContent}>
                <div className={styles.progressHeader}>
                  <span className={styles.ongoing}>Ongoing</span>
                  <h4>Trip to Rome</h4>
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "40%" }}
                  ></div>
                </div>
                <p className={styles.progressText}>
                  <span className={styles.percentage}>40% </span>completed
                </p>
              </div>
              <div className={styles.progressImage}>
                <Image
                  src="/images/image 32.png"
                  alt="Trip to Rome"
                  fill
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
