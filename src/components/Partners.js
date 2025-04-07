import styles from "../styles/Partners.module.scss";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Partners() {
  const partners = [
    { name: "aXen", logo: "/images/image 27.png" },
    { name: "Jetstar", logo: "/images/image 28.png" },
    { name: "Expedia", logo: "/images/image 30.png" },
    { name: "AANTAS", logo: "/images/image 31.png" },
    { name: "Mitalia", logo: "/images/image 29.png" },

    { name: "aXen", logo: "/images/image 27.png" },
    { name: "Jetstar", logo: "/images/image 28.png" },
    { name: "Expedia", logo: "/images/image 30.png" },
    { name: "AANTAS", logo: "/images/image 31.png" },
    { name: "Mitalia", logo: "/images/image 29.png" }
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrame;
    let speed = 1;
    let position = 0;
    const containerWidth = container.scrollWidth / 2;

    const animate = () => {
      position -= speed;
      if (position <= -containerWidth) {
        position = 0;
      }
      container.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <div className={styles.partnersTrack} ref={containerRef}>
          {partners.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className={styles.partnerLogo}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className={styles.logoImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}