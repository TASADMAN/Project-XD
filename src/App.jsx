import React, { useState, useEffect } from 'react';
import './App.css';
import LoginMember from './components/LoginRegister/LoginMember';
import RegisterMember from './components/LoginRegister/RegisterMember';
import LoginManager from './components/LoginRegister/LoginManager';
import RegisterManager from './components/LoginRegister/RegisterManager';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/MainPage';
import EditeProfile from './components/EditeProfile/EditeProfile';
import ManagerDetail from './components/ManagerDetail/Detail';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const renderComponent = () => {
    switch (currentPath) {
      case '/loginMember':
        return <LoginMember onLoginSuccess={() => handleNavigation('/mainpage')} />;
      case '/registerMember':
        return <RegisterMember />;
      case '/loginManager':
        return <LoginManager />;
      case '/registerManager':
        return <RegisterManager />;
      case '/mainpage':
        return <MainPage />;
      case '/loginpage':
        return <LoginPage />;
      case '/editeprofile':
        return <EditeProfile />;
      case '/managerdetail':
        return <ManagerDetail />;
      default:
        return <MainPage />;
    }
  };

  const handleNavigation = (path) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div>
      {renderComponent()}
      
    </div>
    
    
  );
}

export default App;