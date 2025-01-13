import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from '../components/Register/Register'
import Login from '../components/Login/Login'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import Profile from '../components/Profile/Profile'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/register" element={ <Register/>} />
      <Route path="/login" element={ <Login/>} />
      <Route path="/" element={ <Home/>} />
      <Route path="/profile" element={ <Profile/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
