import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from '../components/Register/Register'
import Login from '../components/Login/Login'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import Profile from '../components/Profile/Profile'
import PostDetail from '../components/PostDetail/PostDetail'
import PrivateZone from './guards/PrivateZone'
import Admin from '../components/Admin/Admin'
import AdminZone from './guards/AdminZone'
import NotFound from '../components/NotFound/NotFound'
import Search from '../components/Search/Search'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/register" element={ <Register/>} />
      <Route path="/login" element={ <Login/>} />
      <Route path="/" element={ <Home/>} />
      <Route path="/search/:title" element={ <Search/>} />
      <Route path="/admin" element={
        <AdminZone>
          <Admin />
        </AdminZone>
        } />
        
      <Route path="/profile" element={
        <PrivateZone>
          <Profile/>
        </PrivateZone>        
        } />
      <Route path="/postDetail/:id" element={<PostDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
