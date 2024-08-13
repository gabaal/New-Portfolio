import portfolioCSS from "./../Portfolio/Portfolio.module.css";

import Portfolio1 from "./../../assets/Portfolio1.webp";
import Portfolio2 from "./../../assets/Portfolio2.webp";
import Portfolio3 from "./../../assets/Portfolio3.webp";
import Portfolio4 from "./../../assets/Portfolio4.webp";

function Portfolio() {
  return (
    <div className={`${portfolioCSS.PortfolioWrapper} section`}>
      <h3 className="sectionheading">
        <i className="ri-shining-fill"></i> Portfolio
      </h3>
      <h1 className="section_Title">
        Check Out My <br />
        Featured Projects.
      </h1>
      <div className={portfolioCSS.portfolioCards}>
        <div className={portfolioCSS.card}>
          <img src={Portfolio1} alt="Portfolio-img" />
          <div className={portfolioCSS.tags}>
            <span>Ilustation</span>
            <span>Branding</span>
          </div>
        </div>

        <div className={portfolioCSS.card}>
          <img src={Portfolio2} alt="Portfolio-img" />
          <div className={portfolioCSS.tags}>
            <span>UI Design</span>
            <span>Figma</span>
          </div>
        </div>

        <div className={portfolioCSS.card}>
          <img src={Portfolio3} alt="Portfolio-img" />
          <div className={portfolioCSS.tags}>
            <span>UI Design</span>
            <span>Branding</span>
          </div>
        </div>

        <div className={portfolioCSS.card}>
          <img src={Portfolio4} alt="Portfolio-img" />
          <div className={portfolioCSS.tags}>
            <span>Ilustration</span>
            <span>Figma</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
