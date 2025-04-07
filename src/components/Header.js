import { useEffect, useState } from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const languages = [
    { code: "EN", name: "English" },
    { code: "FR", name: "Français" },
    { code: "ES", name: "Español" },
    { code: "DE", name: "Deutsch" },
    { code: "JA", name: "日本語" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const selectLanguage = (languageCode) => {
    setSelectedLanguage(languageCode);
    setIsLanguageOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Destinations
          </Link>
          <Link href="/" className={styles.navLink}>
            Hotels
          </Link>
          <Link href="/" className={styles.navLink}>
            Flights
          </Link>
          <Link href="/" className={styles.navLink}>
            Bookings
          </Link>
          <Link href="/" className={styles.loginLink}>
            Login
          </Link>
          <Link href="/" className={styles.signup}>
            <span>Sign up</span>
          </Link>

          <div className={styles.languageDropdown}>
            <button
              className={styles.languageToggle}
              onClick={toggleLanguageDropdown}
              aria-expanded={isLanguageOpen}
              aria-label="Language selector"
            >
              {selectedLanguage}
              <span className={styles.dropdownArrow}>
                {isLanguageOpen ? "↑" : "↓"}
              </span>
            </button>

            {isLanguageOpen && (
              <ul className={styles.languageMenu}>
                {languages.map((language) => (
                  <li key={language.code}>
                    <button
                      className={`${styles.languageOption} ${
                        selectedLanguage === language.code ? styles.active : ""
                      }`}
                      onClick={() => selectLanguage(language.code)}
                    >
                      {language.code} - {language.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
