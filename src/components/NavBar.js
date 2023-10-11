
import CarWidget from './CarWidget'
import logo from '../img/pngegg.png'
const NavBar=({})=>{
    return(
        <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="index.html">
            <img src={logo} width="30" height="30" alt="" className="img-logo-nav"/>
        </a>
        <a className="navbar-brand nav-link" href="../public/index.html">DHARMA</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>           
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <div className="dropdown show">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Productos</a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#">Sahumerios</a>
                        <a className="dropdown-item" href="#">Sahumadores</a>
                        <a className="dropdown-item" href="#">Otros</a>
                        <a className="dropdown-item" href="#">Todos</a>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link nav-link" href="">Contactanos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link nav-link" href=""><CarWidget/></a>
            </li>
            </ul>
        </div>
        </nav>

    )
}
export default NavBar