import "./App.css";
import Main from "./Components/Profile/Main/Main";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <>
      <Profile />
      <div className="Main_Wrapper">
        <Main />
      </div>
    </>
  );
}

export default App;
