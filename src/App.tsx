import './App.css'
import { Route, Routes } from 'react-router-dom'
import AddDoctor from './components/AddDoctor'
import Appointments from './components/Appointments'
import DoctorsList from './components/DoctorsList'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <>
    <Navbar />
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="add-doctor" element={<AddDoctor />} />
      <Route path="appointments" element={<Appointments />} />
      <Route path="doctors-list" element={<DoctorsList />} />
      </Route>
    </Routes>
    </>
  )
}

export default App