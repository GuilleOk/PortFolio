import ProjectToShow from '../components/ProjectToShow'
import projects from '../projects.json'

const MainPage = () => {
  return (
    <div style={{ marginTop: '7rem', background: 'rgb(2, 32, 15)', color: 'white' }}>
      <header>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src="images/portfolioImage1.jpg" alt="Guillermo Fernandez" className='photoMain mx-auto' />
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src="images/technologys/codigo.png" alt="tag" style={{filter: 'invert(100%)', height: '3rem'}} />
          <h1 style={{ textAlign: 'start', fontSize: '2.45rem', marginBottom: 0 }}>Guillermo Alfredo Fernández Martínez</h1>
        </div>
        <p style={{textAlign: 'center'}}>Soy Ingeniero en Telecomunicaciones y Electrónica graduado de la Universidad de Oriente de Cuba y me apasiona el desarrollo web.</p>
      </header>
      {/* <section>
        <div className="container" style={{marginTop: '5rem'}}>
          <div className="d-flex justify-content-start align-items-center gap-3 mx-5 px-5">
              <div>
                <img src="images/star.svg" alt="star" style={{ filter: 'invert(100%)', height: '2.8rem' }} />
              </div>
              <div>
                <h2 style={{textAlign: 'center', fontSize: '2.8rem'}} className="my-0">Proyectos</h2>
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
      </section> */}
    </div>
  )
}

export default MainPage