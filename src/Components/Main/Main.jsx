import mainCSS from "./Main.module.css";

function Main() {
  const Darkmode = () => {
    document.querySelector("body").setAttribute("data-theme", "Dark");
  };
  const Lightmode = () => {
    document.querySelector("body").setAttribute("data-theme", "Light");
  };

  const ThemeHandler = () => {
    if (document.querySelector("body").getAttribute("data-theme") === "Light") {
      Darkmode();
    } else {
      Lightmode();
    }
  };

  // Calling Light mode by default
  Lightmode();
  return (
    <>
      <div className={mainCSS.navbar}>
        <ul>
          <li>
            <a href="#">
              {" "}
              <span>Home</span>
              <i className="ri-home-line"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <span>About Me</span>
              <i className="ri-user-line"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Portfolio</span>
              <i className="ri-user-4-line"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Resume</span>
              <i className="ri-file-list-line"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact</span>
              <i className="ri-contacts-book-line"></i>
            </a>
          </li>
          <li id={mainCSS.nav_ThemeBtn} onClick={ThemeHandler}>
            <i className="ri-sun-line"></i>
          </li>
        </ul>

        <div className={mainCSS.navBtns}>
          <i className="ri-sun-line" onClick={ThemeHandler}></i>
          <button>Let&apos;s Talk</button>
        </div>
      </div>
    </>
  );
}

export default Main;
