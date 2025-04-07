import styles from "../styles/Services.module.scss";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
      icon: "/images/Calculated weather.png",
    },
    {
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
      icon: "/images/plane.png",
    },
    {
      title: "Local events",
      description:
        "Barton vanity itself do in it. Preferd to men it engrossed listening.",
      icon: "/images/Local events.png",
    },
    {
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers.",
      icon: "/images/Customization.png",
    },
  ];

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h5>CATEGORY</h5>
        <h2>We Offer Best Services</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={service.icon}
                alt={service.title}
                width={60}
                height={60}
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
