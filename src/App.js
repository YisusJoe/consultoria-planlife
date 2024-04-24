import logo from './images/Logo.png';
import logohero from './images/heroimg.jpg'
import './App.css';

function App() {
  return (
    <div className='App'>
      
      <header className='App-header'>
        <img src={logo} className='Header-logo' alt='logo' />
        <p>Consultoria PlanLife</p>
        <div className='Header-nav'>
          <a>Calcular Pension</a>
          <a>Servicios</a>
          <a>Nosotros</a>
          <a className='Nav-contacto'>Contactanos</a>
        </div>
      </header>

      <div className='App-hero'>
        <div className='Hero-inicio'>
          <h1>Obtén la mejor opción de pensión con <span className='resaltar'>PlanLife</span></h1>
          <p>Déjanos ayudarte a planificar tu futuro financiero con nuestras opciones de pensión personalizadas.</p>
          <div className='Inicio-button'>Contactanos</div>
        </div>
        <img src={logohero} alt='Imagen abuelitos pensionados'></img>
        {/* <div className='Hero-img'>
        </div> */}
      </div>
    </div>
  );
}

export default App;
