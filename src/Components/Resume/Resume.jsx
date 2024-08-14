import { Swiper, SwiperSlide } from "swiper/react";
import resumecss from "./../Resume/Resume.module.css";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import TestimonialImg1 from "./../../assets/testimonial1.webp";
import TestimonialImg2 from "./../../assets/testimonial2.webp";

function Resume() {
  return (
    <div className={`${resumecss.ResumeWrapper} section`}>
      <h3 className="sectionheading">
        <i className="ri-shining-fill"></i> Resume
      </h3>
      <h1 className="section_Title">
        Education and <br /> Practical Experience.
      </h1>
      <div className={resumecss.EducationWrapper}>
        <h1>My Education</h1>

        <div className={resumecss.education}>
          <small>2015 - 16</small>
          <h3>
            Drawing Concentration{" "}
            <span>
              {" "}
              Course By <strong>New York Academy of Art</strong>
            </span>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className={resumecss.education}>
          <small>2019 - 21</small>
          <h3>
            UI / UX Design Specialisation{" "}
            <span>
              {" "}
              Course By <strong>California Academy of Art</strong>
            </span>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className={resumecss.education}>
          <small>2022</small>
          <h3>UI / UX Designer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className={resumecss.EducationWrapper}>
        <h1>My Experience</h1>

        <div className={resumecss.education}>
          <small>2022</small>
          <h3>
            Graphic Designer
            <span>
              In The <strong>Creative Mind</strong>
            </span>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className={resumecss.education}>
          <small>2023</small>
          <h3>
            Ilustration
            <span>
              In The
              <strong>Sun Light </strong>
            </span>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className={resumecss.education}>
          <small>2024 - now</small>
          <h3>UI Designer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className={resumecss.education}>
          <small>2015 - 16</small>
          <h3>
            Drawing Concentration{" "}
            <span>
              {" "}
              Course By <strong>New York Academy of Art</strong>
            </span>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className={resumecss.Testimonials}>
        <h3 className="sectionheading">
          <i className="ri-shining-fill"></i> Testimonials
        </h3>
        <h1 className="section_Title">
          What My
          <br />
          Clients Say.
        </h1>

        <Swiper
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          className={resumecss.swiper}
        >
          <SwiperSlide>
            <div className={resumecss.TestimonialWrapper}>
              <div className={resumecss.Profile}>
                <img src={TestimonialImg1} alt="Testimonial Image" />
                <h3>
                  John Doe <span>Brand Manager at Sting Designing</span>
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                nulla, eveniet reprehenderit quidem perspiciatis assumenda
                exercitationem? Placeat, id!
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={resumecss.TestimonialWrapper}>
              <div className={resumecss.Profile}>
                <img src={TestimonialImg2} alt="Testimonial Image" />
                <h3>
                  Jenny Domain <span>Brand Manager at Instant Designing</span>
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                nulla, eveniet reprehenderit quidem perspiciatis assumenda
                exercitationem? Placeat, id!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Resume;
