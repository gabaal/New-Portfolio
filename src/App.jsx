import "./App.css";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Portfolio from "./Components/Portfolio/Portfolio";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <>
      <Profile />
      <div className="Main_Wrapper">
        <Main />
        <Header />
        <Portfolio />
        <About />
      </div>
    </>
  );
}

export default App;
