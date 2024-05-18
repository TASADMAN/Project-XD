import './App.css'
import LoginMember from './components/LoginRegister/LoginMember'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RegisterMember from './components/LoginRegister/RegisterMember'
import LoginManager from './components/LoginRegister/LoginManager'
import RegisterManager from './components/LoginRegister/RegisterManager'
function App() {
  return (
    <div className=' justify-center flex items-center bg-cover'>
      <Routes>
      <Route path='/' element={<LoginMember/>}></Route>
      <Route path='loginMember' element={<LoginMember/>}></Route>
      <Route path='RegisterMember' element={<RegisterMember/>}></Route>
      <Route path='LoginManager' element={<LoginManager/>}></Route>
      <Route path='RegisterManager' element={<RegisterManager/>}></Route>
      </Routes>
    </div>
  )
}

export default App
