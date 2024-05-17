import './App.css'
import LoginRegister from './components/LoginRegister/LoginRegister'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className=' justify-center flex items-center bg-cover'>
      <Routes>
      <Route path='/' element={<LoginRegister/>}></Route>
      <Route path='login' element={<LoginRegister/>}></Route>
      </Routes>
    </div>
  )
}

export default App
