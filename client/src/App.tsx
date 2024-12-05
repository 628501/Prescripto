import { createTheme, ThemeProvider } from '@mui/material';
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import AllDoctors from './pages/AllDoctors';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'
const theme = createTheme({
  typography: {
    fontFamily:"'Poppins', 'Franklin Gothic Medium', 'Arial Narrow'",
    fontSize:14,
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/all-doctors' element={<AllDoctors />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/doctor' element={<AllDoctors/>}/>
        <Route path='/doctor/:speciality' element={<AllDoctors/>} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App
