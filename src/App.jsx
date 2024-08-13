import "./App.css";
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
      </div>
    </>
  );
}

export default App;
