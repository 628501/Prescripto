import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{marginTop : "15px" , marginLeft:"320px"}}>
      <Outlet />
    </div>
  )
}

export default Home