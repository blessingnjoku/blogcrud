
import Nav from '../Component/Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default Layout