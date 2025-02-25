/* eslint-disable react/prop-types */
const Study = ({type, name, finished, academyInstitution}) => {
  return (
    <div className="my-4">
      <div className="d-flex studyContainer mb-1">
        <div>
          <img src="images/arrow.png" alt="arrow" className="arrowStudies" />
        </div>
        <div>
          <h2 className="headerStudies">
            {type} {name}
          </h2>
        </div>
      </div>
      <div className="studyContainer">
        <h4 className="secondHeaderStudies">Impartido por <span style={{ color: 'rgb(159, 248, 171)', textDecoration: 'underline' }}>{academyInstitution}</span></h4>
        <div className="form-check" style={{marginLeft: '1rem'}}>
          <input className="form-check-input" type="checkbox" value="" readOnly id="flexCheckChecked" checked={finished}  />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Terminado
          </label>            
        </div> 
      </div>
    </div>
  )
}

export default Study