import './App.css'
import LoginMember from './components/LoginRegister/LoginMember'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RegisterMember from './components/LoginRegister/RegisterMember'
import LoginManager from './components/LoginRegister/LoginManager'
import RegisterManager from './components/LoginRegister/RegisterManager'
function App() {
 
  return (
    <div className='justify-center flex items-center bg-cover'>
  
      <Routes>
        <Route path='/' element={<LoginMember />} />

        <Route path='loginMember' element={<LoginMember />} />
        <Route path='registerMember' element={<RegisterMember />} />


        <Route path='loginManager' element={<LoginManager />} />
        <Route path='registerManager' element={<RegisterManager />} />

        
      </Routes>

  </div>
  )
}

export default App
