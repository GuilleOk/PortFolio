const About = () => {
  return (
    <div style={{margin: '7rem 5rem', background: 'rgb(2, 32, 15)', color: 'white' }}>
      <p style={{fontSize: '1.5rem', textAlign: 'justify', color: 'rgb(159, 248, 171)'}}>
      Soy Ingeniero en Telecomunicaciones y Electrónica, graduado de la Universidad de Oriente de Cuba, apasionado por la tecnología y el desarrollo web. Actualmente, estoy cursando una Maestría en Desarrollo Fullstack y Pentesting Web ofrecida por el grupo educativo MasterD. Me entusiasman los retos, el trabajo en equipo y el aprendizaje continuo.
      </p>

      <p style={{textShadow: '0 0 10px white', fontSize: '1.2rem', fontWeight: 'bold'}}>
        Algunas de mis habilidades son:
      </p>

      <div className="d-flex align-items-start mb-1">
        <div>
          <img src="images/arrow.png" alt="arrow" style={{ filter: 'invert(100%)', height: '1.3rem' }} />
        </div>
        <div>
          <p style={{ textAlign: 'justify', fontSize: '1rem', color: 'white' }} className="my-0">
            Desarrollo Font-End: Experiencia en HTML5, CSS3 y JavaScript, así como en la creación de SPAs utilizando React.js y React Router Dom. He implementado hooks como useState y useEffect para mejorar la funcionalidad de mis aplicaciones, además de la creación de mis propios customhooks y de la utilización de otros, como son: useRef, useReducer y useContext. En ocasiones, para lograr un diseño responsivo, he utilizado Bootstrap debido a las facilidades que ofrece para el desarrollo Font-End.
          </p>
        </div>
      </div>

      <div className="d-flex align-items-start mb-1">
        <div>
          <img src="images/arrow.png" alt="arrow" style={{ filter: 'invert(100%)', height: '1.3rem' }} />
        </div>
        <div>
          <p style={{ textAlign: 'justify', fontSize: '1rem', color: 'white' }} className="my-0">
            Control de Versiones: Uso de Git y GitHub para gestionar mis proyectos, asegurando un flujo de trabajo eficiente.
          </p>
        </div>
      </div>
   
      <div className="d-flex align-items-start mb-1">
        <div>
          <img src="images/arrow.png" alt="arrow" style={{ filter: 'invert(100%)', height: '1.3rem' }} />
        </div>
        <div>
          <p style={{ textAlign: 'justify', fontSize: '1rem', color: 'white' }} className="my-0">
            Uso de herramientas de ofimática como Microsoft Word, Microsoft PowerPoint y Microsoft Excel.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About