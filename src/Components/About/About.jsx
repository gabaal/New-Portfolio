import aboutcss from "./../About/About.module.css";
import aboutImg1 from "./../../assets/about1.webp";
import aboutImg2 from "./../../assets/about2.webp";
import aboutImg3 from "./../../assets/about3.webp";
import aboutImg4 from "./../../assets/about4.webp";

function About() {
  return (
    <div className={`${aboutcss.AboutWrapper}section`}>
      <h3 className="sectionheading">
        <i className="ri-shining-fill"></i> About Me
      </h3>
      <h1 className="section_Title">
        Turning Complex Problems Into
        <br />
        Compact Designs.
      </h1>
      <div className={aboutcss.experienceWrapper}>
        <div className={aboutcss.experienceCard}>
          <h2>
            <span>+6</span> Years of Experience.
          </h2>
        </div>

        <div className={aboutcss.experienceCard}>
          <h2>
            <span>+40</span> Happy Clients.
          </h2>
        </div>

        <div className={aboutcss.experienceCard}>
          <h2>
            <span>+50</span> Projects Completed.
          </h2>
        </div>
      </div>

      <p className={aboutcss.experienceP}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, aperiam
        sequi, doloribus eveniet inventore placeat, odio officia consequuntur
        eum suscipit quaerat culpa tempore aut dignissimos fugit voluptate!
        Vero, eos officia?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, aperiam
        sequi, doloribus eveniet inventore placeat, odio officia consequuntur
        eum suscipit quaerat culpa tempore aut dignissimos fugit voluptate!
        Vero, eos officia?
      </p>
      <button>
        Download CV <i className="ri-download-line"></i>
      </button>
      <div className={aboutcss.aboutCards}>
        <div className={aboutcss.aboutCard}>
          <div className={aboutcss.content}>
            <h2>Frontend Development</h2>
            <p>
              <span>Branding</span> <span>Ilustration</span>
            </p>
          </div>
          <img src={aboutImg1} alt="About-img" />
        </div>

        <div className={aboutcss.aboutCard}>
          <div className={aboutcss.content}>
            <h2>
              Digital Art & <br /> Graphic Design
            </h2>
            <p>
              <span>Figma</span> <span>Branding</span>
            </p>
          </div>
          <img src={aboutImg2} alt="About-img" />
        </div>

        <div className={aboutcss.aboutCard}>
          <div className={aboutcss.content}>
            <h2>
              SEO & <br /> Digital Marketing
            </h2>
            <p>
              <span>Branding</span> <span>Ilustration</span>
            </p>
          </div>
          <img src={aboutImg3} alt="About-img" />
        </div>

        <div className={aboutcss.aboutCard}>
          <div className={aboutcss.content}>
            <h2>
              Branding & <br /> Digital Marketing
            </h2>
            <p>
              <span>Figma</span> <span>Ilustration</span>
            </p>
          </div>
          <img src={aboutImg4} alt="About-img" />
        </div>
      </div>
    </div>
  );
}

export default About;
