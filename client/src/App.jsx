import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';

export default function App() {
  return (
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </BrowserRouter>
  )
}

