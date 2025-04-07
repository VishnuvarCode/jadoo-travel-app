import styles from "../styles/Destinations.module.scss";
import Image from "next/image";

export default function Destinations() {
  const destinations = [
    {
      id: 1,
      name: "Rome, Italy",
      price: "$5.42k",
      duration: "10 Days Trip",
      image: "/images/Rectangle 16.png",
    },
    {
      id: 2,
      name: "London, UK",
      price: "$4.2k",
      duration: "12 Days Trip",
      image: "/images/Rectangle 14.png",
    },
    {
      id: 3,
      name: "Full Europe",
      price: "$15k",
      duration: "28 Days Trip",
      image: "/images/Rectangle 15.png",
    },
  ];

  return (
    <section className={styles.destinations}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.subtitle}>Top Selling</p>
          <h2>Top Destinations</h2>
        </div>
        <div className={styles.destinationsGrid}>
          {destinations.map((destination) => (
            <div key={destination.id} className={styles.destinationCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={315}
                  height={457}
                  className={styles.destinationImage}
                />
              </div>
              <div className={styles.destinationInfo}>
                <div className={styles.namePriceRow}>
                  <h3>{destination.name}</h3>
                  <span className={styles.price}>{destination.price}</span>
                </div>
                <div className={styles.durationRow}>
                  <Image
                    src="/images/Vector.png"
                    alt="Location"
                    width={14}
                    height={14}
                    className={styles.locationIcon}
                  />
                  <div className={styles.durationBadge}>
                    {destination.duration}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
