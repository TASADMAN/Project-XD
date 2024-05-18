import './App.css'
import Login from './components/LoginRegister/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './components/LoginRegister/Register'
function App() {
  return (
    <div className=' justify-center flex items-center bg-cover'>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='Register' element={<Register/>}></Route>
      </Routes>
    </div>
  )
}

export default App
