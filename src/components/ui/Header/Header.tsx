import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { logout, logoutContainer, navbarText, navCollapse } from "./styles"
import { useAppDispatch } from "../../../hooks/redux"
import { setLogout } from "../../../redux/slices/auth"

export const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  const handleLogout = () => {
    dispatch(setLogout())
    navigate("/login")
  }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link to={'/'} className='nav-link'>Inicio</Link>
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Item>
            <Link to={'/search'} className='nav-link' >Buscar Heroe</Link>
          </Nav.Item>

          <Nav.Item>
            <Link to={'/dcHeroes'} className='nav-link' >DC Heroes</Link>
          </Nav.Item>

          <Nav.Item>
            <Link to={'/marvelHeroes'} className='nav-link' >Marvel Heroes</Link>
          </Nav.Item>
        </Nav>

        <Navbar.Collapse style={navCollapse}>
          <Navbar.Text style={navbarText}>Admin</Navbar.Text>
          <Nav.Item>
            <div style={logoutContainer} onClick={handleLogout} >
               <span className="material-symbols-outlined" style={logout}>logout</span>
            </div>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
