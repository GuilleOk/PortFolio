/* eslint-disable react/prop-types */
const ProjectToShow = ({name, technologys, description, image, url, urlCode}) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-none d-lg-flex flex-column justify-content-center projectToShow my-3">
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
                  <img src="images/link.png" alt="arrow" style={{ height: '1.2rem' }} />
                </div>              
              </a>
            </div>
            <p style={{margin: '1.5rem', textAlign: 'justify'}}>{description}</p>
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
            <div className="container photoProjectAllContainer">
              <div className="arrowProjectGOContainer">
                <a href={url} target="_blank">
                  <img src="images/flecha-adelante2.png" alt="go" className="arrowProjectGO" />
                </a>
              </div>
              <div>
                <img src={image} alt="project image" className="imageProject" />
              </div>
            </div>
          </div>
      </div>
      <div className="d-flex d-lg-none flex-column justify-content-center projectToShowSM my-4">
          <div className="col-12 mx-auto p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center">
               <div>
                  <img src="images/arrow.png" alt="arrow" style={{ filter: 'invert(100%)', height: '1.3rem' }} />
               </div>
                <div>
                  <h2 style={{textAlign: 'center', fontSize: '1.2rem', color: 'rgb(159, 248, 171)'}} className="my-0">{name}</h2>
                </div>
              </div>
              <a className="btn btn-something" href={urlCode} target="_blank">
                <div className="d-flex gap-1 h-auto p-0 m-0">
                  <p className="m-0" style={{fontSize: '.8rem'}}><strong>Código</strong></p>
                  <img src="images/link.png" alt="arrow" style={{ height: '.8rem' }} />
                </div>              
              </a>
            </div>
            <p style={{margin: '1.5rem', textAlign: 'justify'}} className="d-none d-lg-block">{description}</p>
            <p style={{margin: '1rem', fontSize: '.7rem', textAlign: 'justify'}} className="d-sm-block d-lg-none">{description}</p>
            <div className="d-flex gap-1 align-items-center my-3 px-2 technologysContainer">
              {technologys.map(({ tech, techPhoto }) => {
                return (
                  <div key={`${name}${tech}`} >
                    <div className="d-none d-lg-flex align-items-center mx-5 gap-2 technologys">
                      <img src={techPhoto} alt={tech} style={{ height: '2rem'}} className="d-none d-lg-inline" />
                      <spam className='d-none d-lg-inline'>{tech}</spam>
                    </div>
                    <div className="d-flex mx-2 align-items-center technologysSM d-lg-none">
                      <img src={techPhoto} alt={tech} style={{ height: '1rem'}} className="d-inline d-lg-none" />
                      <spam style={{fontSize: '.72rem', fontWeight: 'bold', padding: '0'}} className='d-inline d-lg-none'>{tech}</spam>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="container photoProjectAllContainer">
              <div className="d-none d-lg-flex arrowProjectGOContainer">
                <a href={url} target="_blank">
                  <img src="images/flecha-adelante2.png" alt="go" className="arrowProjectGO" />
                </a>
              </div>
                <a href={url} target="_blank" className="d-flex d-lg-none arrowProjectGOContainerSM">
                  <img src="images/flecha-adelante2.png" alt="go" className="arrowProjectGOSM" />
                </a>
              <div>
                <img src={image} alt="project image" className="imageProject" />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProjectToShow