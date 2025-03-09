import { NavLink } from "react-router-dom"
import { Collapse } from "bootstrap"
import { useRef } from "react"

const Dashboard = () => {
  const navbarCollapse = useRef(null)

  const handleCollapse = () => {
    const bsCollapse = new Collapse(navbarCollapse.current, { toggle: false })
    if (navbarCollapse.current && window.innerWidth < 992) { // 992px es el breakpoint LG de Bootstrap
      bsCollapse.hide()
    }
  }
  
  return (
    <div style={{position: 'fixed', top: '0', zIndex: '10000', maxWidth: '100vw'}}>
      <nav className="navbar navbar-expand-lg backgroundNavbar" data-bs-theme='dark'>
      <div className="containerNavbar">
        <div>
            <a className="navbar-brand" href="#">
              <img src='/images/portfolioImage.jpg' className="navbarPhoto" alt="navbar photo" />
              <span className="d-sm-inline-block textNavbarSM d-lg-none">
                Guillermo Fdez. Mtnez.
              </span>
              <span className="d-none d-lg-inline-block textNavbar">
                Guillermo Alfredo Fernández Martínez
              </span>
            </a>
        </div>
        <div style={{width: 'auto'}}>
        <div ref={navbarCollapse} className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item item" onClick={handleCollapse}>
              <NavLink to="/" className={({isActive})=> isActive ? 'nav-link activeLink': 'nav-link textNavbar'}>Inicio</NavLink>
            </li>
            <li className="nav-item item" onClick={handleCollapse}>
              <NavLink to="/projects" className={({isActive})=> isActive ? 'nav-link activeLink': 'nav-link textNavbar'}>Mis Proyectos</NavLink>
            </li>
            <li className="nav-item item" onClick={handleCollapse}>
              <NavLink to="/my_learning_path" className={({isActive})=> isActive ? 'nav-link activeLink': 'nav-link textNavbar'}>Mis Estudios</NavLink>
            </li>
            <li className="nav-item item" onClick={handleCollapse}>
              <NavLink to="/about" className={({isActive})=> isActive ? 'nav-link activeLink': 'nav-link textNavbar'}>Acerca de mí</NavLink>
            </li>
            <li className="nav-item item" onClick={handleCollapse}>
              <a href="/CV Guillermo Alfredo Fernández Martínez 09-03-2025.pdf" rel='noreferrer' target="_blank" download className='nav-link textNavbar'>CV</a>
            </li>
            <li className="nav-item item mx-lg-2" onClick={handleCollapse}>
              <div style={{padding: '.5rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <a href="https://www.linkedin.com/in/guillermo-alfredo-fernandez-martinez-a7a59128a" target="_blank"><img src="images/redes_sociales/linkedin.png" alt="linkedin" className="socialMediaPhoto" /></a>
              </div>
            </li>
          </ul>
          
        </div>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    </div>
  )
}

export default Dashboard