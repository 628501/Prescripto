import { Container } from "@mui/material"
import BookAppointment from "../components/BookAppointment"
import Speciality from "../components/Speciality"
import AccountCreation from "../components/AccountCreation"
import BookDoctor from "../components/BookDoctor"

const Home = () => {
  return (
    <Container maxWidth="xl">
        <BookAppointment />
        <Speciality />
        <BookDoctor />
        <AccountCreation />
    </Container>
  )
}

export default Home