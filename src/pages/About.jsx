const About = () => {
  return (
    <div style={{ marginTop: '8.5rem', background: 'inherit', color: 'white' }} className='tracking-in-expand-forward-top'>
      <div className="d-block" style={{margin: '5rem 1.5rem'}}>
        <p className="headerAbout">
          Soy Ingeniero en Telecomunicaciones y Electrónica, graduado de la Universidad de Oriente de Cuba, apasionado por la tecnología y el desarrollo web. Actualmente, estoy cursando una Maestría en Desarrollo Fullstack y Pentesting Web ofrecida por el grupo educativo MasterD. Me entusiasman los retos, el trabajo en equipo y el aprendizaje continuo.
        </p>

        <p className="skills">
          Algunas de mis habilidades son:
        </p>

        <div className="containerSkills">
          <div>
            <img src="images/arrow.png" alt="arrow" className="arrowSkill" />
          </div>
          <div>
            <p className="textSkill">
              Desarrollo Front-End: Experiencia en HTML5, CSS3 y JavaScript, así como en la creación de SPAs utilizando React.js y React Router Dom. He implementado hooks como useState y useEffect para mejorar la funcionalidad de mis aplicaciones, además de la creación de mis propios customhooks y de la utilización de otros, como son: useRef, useReducer y useContext. En ocasiones, para lograr un diseño responsivo, he utilizado Bootstrap debido a las facilidades que ofrece para el desarrollo Front-End.
            </p>
          </div>
        </div>

      <div className="containerSkills">
        <div>
          <img src="images/arrow.png" alt="arrow" className="arrowSkill" />
        </div>
        <div>
          <p className="textSkill">
            Control de Versiones: Uso de Git y GitHub para gestionar mis proyectos, asegurando un flujo de trabajo eficiente.
          </p>
        </div>
      </div>
   
      <div className="containerSkills">
        <div>
          <img src="images/arrow.png" alt="arrow" className="arrowSkill" />
        </div>
        <div>
          <p className="textSkill">
            Uso de herramientas de ofimática como Microsoft Word, Microsoft PowerPoint y Microsoft Excel.
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About