import { NavLink } from "react-router-dom"

const Dashboard = () => {
  return (
    <div style={{position: 'fixed', top: '0', zIndex: '10000', maxWidth: '100vw'}}>
      <nav className="navbar navbar-expand-lg backgroundNavbar" data-bs-theme='dark'>
      <div className="containerNavbar">
        <div>
          <a className="navbar-brand d-sm-textNavbarSM d-lg-textNavbar" href="#"><img src='images/portfolioImage1.jpg' className="navbarPhoto" /><span>Guillermo ALfredo Fernández Martínez</span></a>
        </div>
        <div style={{width: 'auto'}}>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item item">
              <NavLink to="/" className={({isActive})=> isActive ? 'nav-link activeLink': 'nav-link textNavbar'}>Inicio</NavLink>
            </li>
            <li className="nav-item item">
              <NavLink to="/projects" className={({isActive})=> isActive ? 'nav-link activeLink': 'nav-link textNavbar'}>Mis Proyectos</NavLink>
            </li>
            <li className="nav-item item">
              <NavLink to="/my_learning_path" className={({isActive})=> isActive ? 'nav-link activeLink': 'nav-link textNavbar'}>Mis Estudios</NavLink>
            </li>
            <li className="nav-item item">
              <NavLink to="/about" className={({isActive})=> isActive ? 'nav-link activeLink': 'nav-link textNavbar'}>Acerca de mí</NavLink>
            </li>
            <li className="nav-item item mx-lg-2">
              <div style={{padding: '.5rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <a href="https://www.linkedin.com/in/guillermo-alfredo-fernandez-martinez-a7a59128a" target="_blank"><img src="images/redes_sociales/linkedin.png" alt="linkedin" className="socialMediaPhoto" /></a>
                {/* <li><a href="www.linkedin.com/in/guillermo-alfredo-fernandez-martinez-a7a59128a"><img src="" alt="linkedin" /></a></li> */}
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