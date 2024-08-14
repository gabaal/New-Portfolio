import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Portfolio from "./Components/Portfolio/Portfolio";
import Profile from "./Components/Profile/Profile";
import Resume from "./Components/Resume/Resume";

function App() {
  return (
    <>
      <Profile />
      <div className="Main_Wrapper">
        <Main />
        <Header />
        <Portfolio />
        <About />
        <Resume />
        <Contact />
      </div>
    </>
  );
}

export default App;
