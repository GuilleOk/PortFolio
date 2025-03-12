import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className='footer'>
      <footer className="d-block pt-3 pb-1">
        <ul className="navbar justify-content-center align-items-center mx-5">
          <li className="nav-item item">
            <NavLink to="/projects" className={({isActive}) => isActive ? "nav-link linksFooter activeLink": "nav-link linksFooter textFooter"}>
              Mis Proyectos
            </NavLink>
          </li>
          <li className="nav-item item">
            <NavLink to="/my_learning_path" className={({isActive}) => isActive ? "nav-link linksFooter activeLink": "nav-link linksFooter textFooter"}>
              Mis Estudios
            </NavLink>
          </li>
          <li className="nav-item item">
            <NavLink to="/about" className={({isActive}) => isActive ? "nav-link linksFooter activeLink": "nav-link linksFooter textFooter"}>
              Acerca de mí
            </NavLink>
          </li>
          <li className="nav-item item">
            <a href="/CVGuillermoAlfredoFernándezMartínez.pdf" rel='noreferrer' target="_blank" download className="nav-link px-2 textFooter">
              CV
            </a>
          </li>
          <li className="nav-item item">
          <a href="https://www.linkedin.com/in/guillermo-alfredo-fernandez-martinez-a7a59128a" target="_blank" className="nav-link px-2">
            <img src="images/redes_sociales/linkedin.png" alt="linkedin" className="socialMediaPhotoFooter" />
          </a>
          </li>
        </ul>
        <p className="text-center text-body-footer"><small>© Todos los derechos reservados</small></p>
      </footer>
    </div>
  )
}

export default Footer