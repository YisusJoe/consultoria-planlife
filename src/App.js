// import logo from './images/Logo.png';
import hero from './heroimg.jpg'
// import imagen1 from './images/img1.jpg'
// import imagen2 from './images/img2.jpg'
// import imagen3 from './images/img3.jpg'
import './App.css';

function App() {
  const logo = 'https://drive.google.com/thumbnail?id=1EvHBtDhkvyBHwHgWMIz_F71RqAtLduFw';
  // const hero = 'https://drive.google.com/thumbnail?id=1HAwpCZjFD6xjV6DXasH5SgyFBCKjBFw8';
  // const hero = 'https://drive.google.com/uc?export=view&id=1HAwpCZjFD6xjV6DXasH5SgyFBCKjBFw8';
  const imagen1 = 'https://drive.google.com/thumbnail?id=1mCPwDEH6UOgcV3foHXVS4pZOjgB0trNZ';
  const imagen2 = 'https://drive.google.com/thumbnail?id=10zDNc663z-Au42skgd9j1z9zvZbAyTGm';
  const imagen3 = 'https://drive.google.com/thumbnail?id=1FNDZL4YdfRbRqk3k_klKB09B2h5O3WKj';

  return (

    <div className='App'>
      
      <header className='App-header'>
        <img src={logo} className='Header-logo' alt='logo'/>
        <p>Consultoria PlanLife</p>
        <div className='Header-nav'>
          <a href='#App-calcular'>Calcular Pension</a>
          <a href='#App-servicios'>Servicios</a>
          <a href='#App-seccion'>Nosotros</a>
          <a className='Nav-contacto' href='#App-localizacion'>Contactanos</a>
        </div>
      </header>

      <seccion className='App-hero'>
        <div className='Hero-inicio'>
          <h1>Obtén la mejor opción de pensión con <span className='resaltar'>PlanLife</span></h1>
          <p>Déjanos ayudarte a planificar tu futuro financiero con nuestras opciones de pensión personalizadas.</p>
          <div className='Inicio-button'>Contactanos</div>
        </div>
        <img src={hero} alt='Imagen abuelitos pensionados'></img>
      </seccion>

      <section className='App-calcular' id='App-calcular'>
        <div className='Calcular-input'>
          <h1>Vamos a calcular tu pensión sin PlanLife</h1>
          <p>Fecha último trabajo</p>
          <input></input>
          <p>Sueldo mensual</p>
          <input></input>
          <p>Semanas cotizadas</p>
          <input></input>
          <p>Edad de pension deseada</p>
          <input></input>
          <div className='Inicio-button'>Calcular</div>
          {/* <button>Calcular</button> */}
        </div>

        <div className='Calcular-output'>
          <h3>Aqui ira el calculo de pensión</h3>
        </div>
      </section>

      <seccion className='App-servicios' id='App-servicios'>
        <h1>Servicios</h1>
        <div className='Servicios-cards'>
          <div className='Card'>
            <img src={imagen1} alt='imagengen'></img>
            <h3>Asesoramiento Financiero</h3>
            <p>Brindamos asesoramiento personalizado para la planificación financiera y la gestión de inversiones. Nuestro enfoque se centra en entender las necesidades individuales y desarrollar estrategias adaptadas a cada cliente.</p>
          </div>
          <div className='Card'>
            <img src={imagen2} alt='imagengen'></img>
            <h3>Planificación de Pensiones</h3>
            <p>Ofrecemos servicios especializados en la planificación de pensiones, ayudando a nuestros clientes a asegurar un futuro financiero estable y seguro para su jubilación.</p>
          </div>
          <div className='Card'>
            <img src={imagen3} alt='imagengen'></img>
            <h3>Gestión de Activos</h3>
            <p>Gestionamos eficazmente los activos de nuestros clientes, optimizando sus inversiones y asegurando un crecimiento sostenible a largo plazo.</p>
          </div>
        </div>
      </seccion>

      <seccion className='App-seccion' id='App-seccion'>
        <div className='Seccion-container'>
          <h1>NOSOTROS</h1>
          <p>Somos un equipo dedicado a brindar soluciones integrales en planificación financiera y estrategias de pensiones. Nuestro compromiso es ayudar a nuestros clientes a alcanzar sus metas financieras y asegurar un retiro cómodo y tranquilo.</p>
        </div>
        <div className='img'>
          Aqui ira la imagen de nosotros
        </div>
        {/* <img src={logohero} alt='Imagen abuelitos pensionados'></img> */}
      </seccion>

      <seccion className='App-localizacion' id='App-localizacion'>
        <h1>CONTACTO</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39733.33333333333!2d-0.1418907!3d51.5013645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cb8783e3c1%3A0x64b9de8c6b23304!2sBuckingham%20Palace!5e0!3m2!1sen!2suk!4v1616161616161"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </seccion>

      <footer>
        <p>Hecho por yisusjoe.mx@gmail.com</p>
      </footer>

    </div>
  );
}

export default App;