import "./App.css";
import LoginMember from "./components/LoginRegister/LoginMember";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterMember from "./components/LoginRegister/RegisterMember";
import LoginManager from "./components/LoginRegister/LoginManager";
import RegisterManager from "./components/LoginRegister/RegisterManager";
import MainPage from "./components/MainPage/MainPage";
import LoginPage from './components/LoginPage/MainPage'
import Detail from "./components/ManagerDetail/Detail";

function App() {
  return (
    <div className="">
          <Routes>
            <Route path="/" element={<LoginMember />} />

            <Route path="/loginMember" element={<LoginMember />} />
            <Route path="/registerMember" element={<RegisterMember />} />

            <Route path="/loginManager" element={<LoginManager />} />
            <Route path="/registerManager" element={<RegisterManager />} />

            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/loginpage" element={<LoginPage />} />

            <Route path="/detail" element={<Detail/>} />
          </Routes>
    </div>
  );
}

export default App;
