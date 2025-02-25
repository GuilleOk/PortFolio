/* eslint-disable react/prop-types */
const ProjectToShow = ({name, technologys, description, image, url, urlCode}) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column justify-content-center projectToShow my-1">
          <div className="mx-auto p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center">
               <div>
                  <img src="images/arrow.png" alt="arrow" className="arrowPhotoProject" />
               </div>
                <div>
                  <h2 className="ArrowText">{name}</h2>
                </div>
              </div>
              <a className="btn btn-something" href={urlCode} target="_blank">
                <div className="d-flex gap-1 h-auto p-0 m-0">
                  <p className="m-0"><strong>Código</strong></p>
                  <img src="images/link.png" alt="arrow" style={{ height: '.8rem' }} />
                </div>              
              </a>
            </div>
            <p style={{margin: '1.5rem', textAlign: 'justify'}} className="d-none d-lg-block">{description}</p>
            <p style={{margin: '1rem', fontSize: '.7rem', textAlign: 'justify'}} className="d-sm-block d-lg-none">{description}</p>
            <div className="technologysContainer">
              {technologys.map(({ tech, techPhoto }) => {
                return (
                  <div key={`${name}${tech}`} >
                    <div className="technologys">
                      <img src={techPhoto} alt={tech} style={{ height: '2rem'}} className="technologyPhoto" />
                      <div className='technologyText'>{tech}</div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="container photoProjectAllContainer" onClick={() => window.open(url, "_blank")}>
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