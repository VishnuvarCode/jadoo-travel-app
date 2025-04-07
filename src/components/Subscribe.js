import styles from "../styles/Subscribe.module.scss";

export default function Subscribe() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h2>

        <form className={styles.form}>
          <input
            type="email"
            placeholder="Your email"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
