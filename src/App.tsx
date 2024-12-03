import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Dashboard from './components/Dashboard'
import Appointments from './components/Appointments'
import AddDoctor from './components/AddDoctor'
import DoctorsList from './components/DoctorsList'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css'
import LoginPage from './pages/LoginPage'

const theme = createTheme({
  typography: {
    fontFamily:"'Poppins', 'Franklin Gothic Medium', 'Arial Narrow'",
    fontSize:14
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="add-doctor" element={<AddDoctor />} />
          <Route path="doctors-list" element={<DoctorsList />} />
        </Route>
        <Route path='login' element={<LoginPage />} />
      </Routes>
      </ThemeProvider>
  )
}

export default App
