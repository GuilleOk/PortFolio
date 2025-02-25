import ProjectToShow from '../components/ProjectToShow'
import projects from '../projects.json'

const MainPage = () => {
  return (
    <div style={{ marginTop: '8.5rem', background: 'inherit', color: 'white' }} className='tracking-in-expand-forward-top'>
      <header>
        <div className='photoMainContainer'>
          <div className='photoSecondContainer'>
            <img src="images/portfolioImage1.jpg" alt="Guillermo Fernandez" className='photoMain mx-auto' />
          </div>
        </div>
        <div className='d-flex nameHeaderContainer'>
          <h1 className='NameMainPage'>Guillermo Alfredo Fernández Martínez</h1>
        </div>
        <div className='d-block d-lg-none mx-3'>
          <p style={{textAlign: 'center', fontSize: '.8rem'}}>Soy Ingeniero en Telecomunicaciones y Electrónica, graduado de la Universidad de Oriente de Cuba y me apasiona el desarrollo de aplicaciones web.</p>
        </div>
        <div className='d-none d-lg-block'>
          <p style={{textAlign: 'center'}}>Soy Ingeniero en Telecomunicaciones y Electrónica, graduado de la Universidad de Oriente de Cuba y me apasiona el desarrollo web.</p>
        </div>
      </header>
      <section>
        <div className="container mb-2">
          <div className="d-none d-lg-flex justify-content-start align-items-center gap-3 mx-5 px-5" style={{marginTop: '3rem'}}>
              <div>
                <img src="images/star.svg" alt="star" style={{ filter: 'invert(100%)', height: '2.7rem' }} />
              </div>
              <div>
                <h2 style={{textAlign: 'center', fontSize: '3.2rem', textShadow: '0 0 10px white'}} className="my-0">Proyectos</h2>
              </div>
          </div>
          <div className="d-flex justify-content-start align-items-center gap-3 mx-3 d-lg-none" style={{marginTop: '2rem'}}>
              <div>
                <img src="images/star.svg" alt="star" style={{ filter: 'invert(100%)', height: '1.4rem' }} />
              </div>
              <div>
                <h2 style={{textAlign: 'center', fontSize: '1.8rem', marginBottom: 0, textShadow: '0 0 10px white'}} className="my-0 py-0">Proyectos</h2>
              </div>
          </div>
        </div>
          {
            projects.filter(({showInMain}) => showInMain).map(({ name, technologys, description, image, url, urlCode }) => {
              return (
                <ProjectToShow key={`${url}`} name={name} technologys={technologys} description={description} image={image} url={url} urlCode={urlCode} />
              )
            })
          }
      </section>
    </div>
  )
}

export default MainPage