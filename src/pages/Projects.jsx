import ProjectToShow from "../components/ProjectToShow"
import projects from '../projects.json'

const Projects = () => {
  return (
    <div style={{ marginTop: '5rem', background: 'rgb(2, 32, 15)', color: 'white' }}>
      <div className="container mb-2">
          <div className="d-none d-lg-flex justify-content-start align-items-center mx-5 px-5" style={{marginTop: '3rem'}}>
              <div>
                <h2 style={{textAlign: 'center', fontSize: '3.2rem', textShadow: '0 0 10px white'}} className="my-0">Todos mis proyectos</h2>
              </div>
          </div>
          <div className="d-flex justify-content-start align-items-center mx-3 d-lg-none" style={{marginTop: '2rem'}}>
              <div>
                <h2 style={{textAlign: 'center', fontSize: '1.8rem', marginBottom: 0, textShadow: '0 0 10px white'}} className="my-0 py-0">Todos mis proyectos</h2>
              </div>
          </div>
        </div>
          {
            projects.map(({ name, technologys, description, image, url, urlCode }) => {
              return (
                <ProjectToShow key={`${url}`} name={name} technologys={technologys} description={description} image={image} url={url} urlCode={urlCode} />
              )
            })
          }
    </div>
  )
}

export default Projects