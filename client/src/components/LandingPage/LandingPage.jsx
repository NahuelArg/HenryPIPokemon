import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";

export const LandingPage = () => {

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
          <div className={styles.particlesContainer}>
            <h1 className={styles.title}>¡Bienvenido a la App Pokémon!</h1>
            <Link to={'/home'}>
              <button className={styles.button}>Comenzar</button>
            </Link>
            <img
              id="particlesGif"
              src="https://i.gifer.com/Rd6S.gif"
              alt="Particles"
              className={styles.particlesGif}
            />
          </div>
      </div>
    </div>
  );
};
