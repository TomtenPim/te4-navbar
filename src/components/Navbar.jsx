import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <ul className="navbar">
                <li className="nav-item" >
                    <Link to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/about'>About</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar