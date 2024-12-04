import { Container } from "@mui/material"
import BookAppointment from "../components/BookAppointment"
import Speciality from "../components/Speciality"

const Home = () => {
  return (
    <Container maxWidth="xl">
        <BookAppointment />
        <Speciality />
    </Container>
  )
}

export default Home