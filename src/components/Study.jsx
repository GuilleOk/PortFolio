/* eslint-disable react/prop-types */
const Study = ({type, name, finished, academyInstitution}) => {
  return (
    <div className="studyContainer my-4">
      <div className="d-flex  align-items-center mb-1">
        <div>
          <img src="images/arrow.png" alt="arrow" style={{ filter: 'invert(100%)', height: '2rem' }} />
        </div>
        <div>
          <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: 'rgb(159, 248, 171)' }} className="my-0">
            {type} {name}
          </h2>
        </div>
      </div>
      <div className="curso">
        <h4 style={{marginLeft: '2rem', marginBottom: '.7rem'}}>Impartido por <span style={{ color: 'rgb(159, 248, 171)' }}>{academyInstitution}</span></h4>
        <div className="form-check" style={{marginLeft: '2rem'}}>
          <input className="form-check-input" type="checkbox" value="" readOnly id="flexCheckChecked" checked={finished} />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Terminado
          </label>            
        </div> 
      </div>
    </div>
  )
}

export default Study