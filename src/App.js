import NavBar from './components/NavBar';
import Home from './components/Home';
import '../src/css/style.css'

function App() {

  return (

          <div>
            <NavBar/>
            <div className='container'>
            <Home/>
            </div>
          </div>
          
          
          );
        }
export default App;
