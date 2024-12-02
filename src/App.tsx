import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Dashboard from './components/Dashboard'
import Appointments from './components/Appointments'
import AddDoctor from './components/AddDoctor'
import DoctorsList from './components/DoctorsList'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="add-doctor" element={<AddDoctor />} />
          <Route path="doctors-list" element={<DoctorsList />} />
        </Route>
      </Routes>
  )
}

export default App
