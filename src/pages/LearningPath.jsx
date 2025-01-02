import Study from '../components/Study'
import studies from '../studies.json'

const LearningPath = () => {
  return (
    <div style={{ marginTop: '5rem', background: 'rgb(2, 32, 15)', color: 'white' }}>
      <div className="container mb-2">
          <div className="d-none d-lg-flex justify-content-start align-items-center mx-5 px-5" style={{marginTop: '3rem'}}>
              <div>
                <h4 style={{textAlign: 'center', fontSize: '3.2rem', textShadow: '0 0 10px white'}} className="my-0">Mis estudios</h4>
              </div>
          </div>
          <div className="d-flex justify-content-start align-items-center mx-3 d-lg-none" style={{marginTop: '2rem'}}>
              <div>
                <h4 style={{textAlign: 'center', fontSize: '1.8rem', marginBottom: 0, textShadow: '0 0 10px white'}} className="my-0 py-0">Mis estudios</h4>
              </div>
        </div>
        <div className="d-flex flex-column align-items-start">
        {
            studies.map(({ type, name, finished, academyInstitution }) => {
              return (
                <Study key={`${name}`} name={name} type={type} finished={finished} academyInstitution={academyInstitution} />
              )
            })
          }
        </div>
        </div>
    </div>
  )
}

export default LearningPath