import logo from './images/Logo.png';
import heroimg from './images/heroimg.jpeg'
import user from './images/avatar.png'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
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
        <div className='content-header'>
          <img src={logo} className='Header-logo' alt='logo'/>
          <p>Consultoría PlanLife</p>
          <div className='Header-nav'>
            <a href='#App-calculadora'>Calcular Pensión</a>
            <a href='#App-servicios'>Servicios</a>
            <a className='Nav-contacto' href='#App-agendar'>Contactanos</a>
          </div>
        </div>
      </header>

      <seccion className='App-hero'>
        <div className='content-hero'>
          <div className='hero-letras'>
            <h1>Mereces una mejor pensión, obten una mejor pensión con <span className='resaltar'>PlanLife</span></h1>
            <p>Déjanos ayudarte a planificar tu futuro financiero con nuestras opciones de pensión personalizadas.</p>
            <div className='Button-contacto'>Contactanos</div>
          </div>
          <img src={heroimg} alt='Imagen abuelitos pensionados'></img>
        </div>
      </seccion>

      <seccion className='App-calculadora' id='App-calculadora'>
        <div className='content-calculadora'>
          <div className='calculadora-letras'>
            <h1>Calculemos tu pensión sin <span className='resaltar'>Planlife</span></h1>
            <p>Ingresa los siguientes datos a nuestra calculadora</p>
          </div>
          <div className='calculadora-inputs'>
            <div>
              <input placeholder="Nombre"></input>
              <input placeholder="Nacimiento"></input>
              <input placeholder="Edad deseada para pensionarte"></input>
            </div>
            <div>
              <input placeholder="Semanas cotizados"></input>
              <input placeholder="Salario Mensual"></input>
            </div>
          </div>
          <div className='calculadora-botones'>
            <div className='Button-calcular'>Calcular</div>
            <div className='Button-buscar'>¿No conoces estos datos?</div>
          </div>
        </div>  
      </seccion>

      <seccion className='App-servicios' id='App-servicios'>
        <div className='content-servicios'>
          <h1>Nos <scan className='resaltar'>preocupamos</scan> por brindarte</h1>
          <div className='cards-servicios'>
            <div className='card'>
              <img src={img1}></img>
            </div>
            <div className='card'>
              <img src={img2}></img>
            </div>
            <div className='card'>
              <img src={img3}></img>
            </div>
          </div>
        </div>
      </seccion>
      
      <seccion className='App-agendar' id='App-agendar'>
        <div className='content-agendar'>
          <div className='servicios-letras'>
            <h1>Estaremos gustosos de recibirte en nuestra oficina</h1>
            <p>Av. Nicolás Bravo, Primer Cuadro, Centro, 80000 Culiacán Rosales, Sin.</p>
          </div>
          <div className='servicios-tabla'></div>
        </div>
      </seccion>

    </div>
  );
}

export default App;