import ProjectToShow from '../components/ProjectToShow'
import projects from '../projects.json'

const MainPage = () => {
  return (
    <div style={{ marginTop: '7rem', background: 'rgb(2, 32, 15)', color: 'white' }}>
      <header>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src="images/portfolioImage1.jpg" alt="Guillermo Fernandez" className='photoMain mx-auto' />
        </div>
        <div className='d-flex nameHeaderContainer d-lg-none mt-4'>
          {/* <img src="images/technologys/codigo.png" alt="tag" style={{filter: 'invert(100%)', height: '1.5rem'}} /> */}
          <h1 style={{ textAlign: 'center', fontFamily: 'Arial Narrow, Arial, sans-serif',fontSize: '2.4rem', marginBottom: 0, display: 'inline', color: 'rgb(159, 248, 171)' }}>Guillermo Alfredo Fernández Martínez</h1>
        </div>
        <div className='d-none d-lg-flex nameHeaderContainer'>
          <img src="images/technologys/codigo.png" alt="tag" style={{filter: 'invert(100%)', height: '3rem'}} />
          <h1 style={{ textAlign: 'justify', fontSize: '2.8rem', marginBottom: 0 }}>Guillermo Alfredo Fernández Martínez</h1>
        </div>
        <div className='d-block d-lg-none mx-3'>
          <p style={{textAlign: 'justify', fontSize: '1rem'}}>Soy Ingeniero en Telecomunicaciones y Electrónica graduado de la Universidad de Oriente de Cuba y me apasiona el desarrollo web.</p>
        </div>
        <div className='d-none d-lg-block'>
          <p style={{textAlign: 'center'}}>Soy Ingeniero en Telecomunicaciones y Electrónica graduado de la Universidad de Oriente de Cuba y me apasiona el desarrollo web.</p>
        </div>
      </header>
      <section>
        <div className="container mb-2">
          <div className="d-none d-lg-flex justify-content-start align-items-center gap-3 mx-5 px-5" style={{marginTop: '5rem'}}>
              <div>
                <img src="images/star.svg" alt="star" style={{ filter: 'invert(100%)', height: '2.7rem' }} />
              </div>
              <div>
                <h2 style={{textAlign: 'center', fontSize: '2.8rem', textShadow: '0 0 10px white'}} className="my-0">Proyectos</h2>
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