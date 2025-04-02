import { Link } from "react-router-dom"
import '../css/Navbar.css'

function NavBar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link id="joe" to='/'>Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link id="joe" to='/' className="nav-link">Home</Link>
                <Link id="joe" to='/favorites' className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}
export default NavBar