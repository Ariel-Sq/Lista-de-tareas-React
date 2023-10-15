import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import LogoFreeCode from './componentes/logofreecode';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
      <LogoFreeCode logo={freeCodeCampLogo} />
      <div className='tarea-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;

