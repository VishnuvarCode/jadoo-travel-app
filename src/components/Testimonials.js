import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Testimonials.module.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

const testimonials = [
  {
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
    avatar: "/images/TestimonialImage.png",
    message:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  },
  {
    name: "Chris Thomas",
    location: "CEO of Red Button",
    avatar: "/images/TestimonialImage.png",
    message:
      "Absolutely fantastic service. It has completely surpassed our expectations and increased our sales by 40%.",
  },
  {
    name: "Anna Lee",
    location: "New York, USA",
    avatar: "/images/TestimonialImage.png",
    message:
      "The platform is intuitive and easy to use. Our team collaboration has improved significantly.",
  },
  {
    name: "David Park",
    location: "Seoul, South Korea",
    avatar: "/images/TestimonialImage.png",
    message:
      "Brilliant support and very reliable! We've been working with them for over a year now.",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.testimonials}>
      <div className={styles.leftContent}>
        <p className={styles.subTitle}>TESTIMONIALS</p>
        <h2 className={styles.heading}>What People Say About Us.</h2>
        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${
                index === activeIndex ? styles.active : ""
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles.rightContent}>
        <div className={styles.card}>
          <div className={styles.profile}>
            <Image
              src={testimonials[activeIndex].avatar}
              alt="avatar"
              width={60}
              height={60}
              className={styles.avatar}
            />
          </div>
          <p className={styles.message}>{testimonials[activeIndex].message}</p>
          <p className={styles.name}>{testimonials[activeIndex].name}</p>
          <p className={styles.location}>
            {testimonials[activeIndex].location}
          </p>
        </div>

        {testimonials[activeIndex + 1] && (
          <div className={styles.secondaryCard}>
            <p className={styles.name}>
              {testimonials[(activeIndex + 1) % testimonials.length].name}
            </p>
            <p className={styles.location}>
              {testimonials[(activeIndex + 1) % testimonials.length].location}
            </p>
          </div>
        )}

        <div className={styles.arrows}>
          <button onClick={handlePrev}>
            <ChevronUp size={24} />
          </button>
          <button onClick={handleNext}>
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
