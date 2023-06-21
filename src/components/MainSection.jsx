import { Databiz, Audiophile, Meet, Maker } from "../utils";

const MainSection = () => {
  return (
    <section className="container">
      <article>
        <h1 className="title">Make remote work</h1>
        <p className="description">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button type="button" className="learn-more">
          Learn more
        </button>
        <div className="brand-container">
          <Databiz />
          <Audiophile />
          <Meet />
          <Maker />
        </div>
      </article>
      <aside>
        <picture>
          <img src="/image-hero-desktop.png" alt="hero-desk" className="hero-desk" />
          <img src="/image-hero-mobile.png" alt="hero-mobile" className="hero-mobile" />
        </picture>
      </aside>
    </section>
  );
};

export default MainSection;
