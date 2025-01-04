import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div style={{ background: 'rgb(2, 48, 21)' }} className='footer'>
      <footer className="d-none d-lg-block pt-3 pb-1">
        <ul className="navbar justify-content-center gap-4 align-items-center pb-2 mx-5">
          <li className="nav-item item">
            <NavLink to="/projects" className={({isActive}) => isActive ? "nav-link px-2 activeLink": "nav-link px-2 textNavbar"}>
              Mis Proyectos
            </NavLink>
          </li>
          <li className="nav-item item">
            <NavLink to="/my_learning_path" className={({isActive}) => isActive ? "nav-link px-2 activeLink": "nav-link px-2 textNavbar"}>
              Mis Estudios
            </NavLink>
          </li>
          <li className="nav-item item">
            <NavLink to="/about" className={({isActive}) => isActive ? "nav-link px-2 activeLink": "nav-link px-2 textNavbar"}>
              Acerca de mí
            </NavLink>
          </li>
          <li className="nav-item item">
            <a href="CV_Guillermo_lfredo_Fernandez_Martinez_26-12-2024.pdf" rel='noreferrer' target="_blank" download className="nav-link px-2 textNavbar">
              CV
            </a>
          </li>
          <div>
          </div>
        </ul>
        <div className="d-flex justify-content-center align-items-center">
          <p className="text-center text-body-secondary mb-2">Contacto: <strong style={{ marginLeft: '.5rem', borderBottom: '.1rem solid white' }}>fernandez.martinez1403@gmail.com</strong></p>
          <a href="https://www.linkedin.com/in/guillermo-alfredo-fernandez-martinez-a7a59128a" target="_blank" className="nav-link px-2 text-body-secondary">
            <img src="images/redes_sociales/linkedin.png" alt="linkedin" className="socialMediaPhotoFooter" />
          </a>
        </div>
        <p className="text-center text-body-secondary"><small>© Todos los derechos reservados</small></p>
      </footer>
      <footer className="d-block d-lg-none pt-3 pb-1">
        <div className='pb-2'>
        <ul className="nav justify-content-center gap-3 align-items-center mx-2">
          <li className="nav-item">
              <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link px-2 activeLink" : "nav-link px-2 textNavbarSM"}>
              Mis Proyectos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/my_learning_path" className={({ isActive }) => isActive ? "nav-link px-2 activeLink" : "nav-link px-2 textNavbarSM"}>
              Mis Estudios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link px-2 activeLink" : "nav-link px-2 textNavbarSM"}>
              Acerca de mí
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="CV_Guillermo_lfredo_Fernandez_Martinez_26-12-2024.pdf" rel='noreferrer' target="_blank" download className={({ isActive }) => isActive ? "nav-link px-2 activeLink" : "nav-link px-2 textNavbarSM"}>
              CV
            </a>
          </li>
          <div>
          </div>
        </ul>
        </div>
        <div className="d-flex justify-content-evenly align-items-center">
          <div style={{color: 'white', fontSize: '.8rem', textAlign: 'center'}}>
            Contacto
          </div>
          <p className="text-center text-body-secondary mb-0"><strong style={{ marginLeft: '.5rem', borderBottom: '.1rem solid white', fontSize: '.8rem' }}>fernandez.martinez1403@gmail.com</strong></p>
          <a href="https://www.linkedin.com/in/guillermo-alfredo-fernandez-martinez-a7a59128a" target="_blank" className="nav-link px-2 text-body-secondary">
            <img src="images/redes_sociales/linkedin.png" alt="linkedin" className="socialMediaPhotoFooter" />
          </a>
        </div>
        <p className="text-center mt-1"><small style={{color: 'white'}}>© Todos los derechos reservados</small></p>
      </footer>
    </div>
  )
}

export default Footer