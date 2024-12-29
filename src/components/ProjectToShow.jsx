/* eslint-disable react/prop-types */
const ProjectToShow = ({name, technologys, description, image, url, urlCode}) => {
  return (
    <div className="my-5 d-flex justify-content-center">
      <div className="d-flex flex-column justify-content-center projectToShow">
        <header>
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-start align-items-center gap-3">
               <div>
                  <img src="images/arrow.png" alt="arrow" style={{ filter: 'invert(100%)', height: '2.8rem' }} />
               </div>
                <div>
                  <h2 style={{textAlign: 'center', fontSize: '2.8rem', color: 'rgb(159, 248, 171)'}} className="my-0">{name}</h2>
                </div>
              </div>
              <a className="btn btn-something" href={urlCode} target="_blank">
                <div className="d-flex gap-1 h-auto p-0 m-0">
                  <p className="m-0"><strong>Código</strong></p>
                  <img src="/public/images/link.png" alt="arrow" style={{ height: '1.2rem' }} />
                </div>              
              </a>
            </div>
            <p style={{margin: '1.5rem'}}>{description}</p>
            <div className="d-flex gap-2 align-items-center my-3 mx-5 px-2 technologysContainer">
              {technologys.map(({ tech, techPhoto }) => {
                return (
                  <div key={`${name}${tech}`} className="d-flex align-items-center gap-2 mx-2 technologys">
                    <img src={techPhoto} alt={tech} style={{ height: '2rem'}} />
                    {tech}
                    {/* <p>{tech}</p> */}
                  </div>
                )
              })}
            </div>
            <div className="container">
              <a href={url} target="_blank">
                <img src={image} alt="project image" className="imageProject" />
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default ProjectToShow