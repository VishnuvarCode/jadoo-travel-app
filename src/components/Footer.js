import styles from "../styles/Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.brandColumn}>
            <h2 className={styles.logo}>Jadoo.</h2>
            <p className={styles.tagline}>
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          <div className={styles.navColumns}>
            <div className={styles.navColumn}>
              <h3 className={styles.columnTitle}>Company</h3>
              <ul className={styles.navLinks}>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/mobile">Mobile</Link>
                </li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <h3 className={styles.columnTitle}>Contact</h3>
              <ul className={styles.navLinks}>
                <li>
                  <Link href="/help">Help/FAQ</Link>
                </li>
                <li>
                  <Link href="/press">Press</Link>
                </li>
                <li>
                  <Link href="/affiliates">Affiliates</Link>
                </li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <h3 className={styles.columnTitle}>More</h3>
              <ul className={styles.navLinks}>
                <li>
                  <Link href="/airlinefees">Airlinefees</Link>
                </li>
                <li>
                  <Link href="/airline">Airline</Link>
                </li>
                <li>
                  <Link href="/tips">Low fare tips</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.socialAppWrapper}>
            <div className={styles.socialMedia}>
              <Link href="#" className={styles.socialIcon}>
                <Image
                  src="/images/SocialFacebook.png"
                  alt="Facebook"
                  width={50}
                  height={50}
                />
              </Link>
              <Link href="#" className={styles.socialIcon}>
                <Image
                  src="/images/SocialInstagram.png"
                  alt="Instagram"
                  width={50}
                  height={50}
                />
              </Link>
              <Link href="#" className={styles.socialIcon}>
                <Image
                  src="/images/SocialTwitter.png"
                  alt="Twitter"
                  width={50}
                  height={50}
                />
              </Link>
            </div>

            <div className={styles.discoverApp}>
              <span>Discover our app</span>
              <div className={styles.appIcons}>
                <Link href="#">
                  <Image
                    src="/images/Google Play.png"
                    alt="Google Play Store"
                    width={100}
                    height={30}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/Play Store.png"
                    alt="Apple App Store"
                    width={100}
                    height={30}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>All rights reserved@jadoo.co</p>
        </div>
      </div>
    </footer>
  );
}
