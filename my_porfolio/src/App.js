// import logo from "./logo.svg";
import "./App.css";

import Navbar from "./controllers/Navbar";
import MainPage from "./controllers/MainPage";
import MyServices from "./controllers/MyServices";
import Footer from "./controllers/Footer";

function App() {
  return (
    <div className="App">
      <div className="main-page">
        <Navbar></Navbar>
        <MainPage></MainPage>
        <MyServices></MyServices>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
