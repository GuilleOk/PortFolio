import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div style={{ background: 'rgb(2, 48, 21)' }}>
      <footer className="pt-3 pb-1">
        <ul className="nav justify-content-center align-items-center border-bottom pb-3 mb-3 mx-5">
          <li className="nav-item">
            <NavLink to="/projects" className="nav-link px-2 textNavbar">
              Mis Proyectos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/my_learning_path" className="nav-link px-2 textNavbar">
              Mis Estudios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link px-2 textNavbar">
              Acerca de mí
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="CV_Guillermo_lfredo_Fernandez_Martinez_26-12-2024.pdf" rel='noreferrer' target="_blank" download className="nav-link px-2 textNavbar">
              CV
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/guillermo-alfredo-fernandez-martinez-a7a59128a" target="_blank" className="nav-link px-2 text-body-secondary">
              <img src="images/redes_sociales/linkedin.png" alt="linkedin" className="socialMediaPhoto" />
            </a>
          </li>
          <div>
          </div>
        </ul>
        <p className="text-center text-body-secondary mb-0">Contacto: <strong style={{marginLeft: '.5rem', borderBottom: '.1rem solid white'}}>fernandez.martinez1403@gmail.com</strong></p>
        <p className="text-center text-body-secondary"><small>© Todos los derechos reservados</small></p>
      </footer>
    </div>
  )
}

export default Footer