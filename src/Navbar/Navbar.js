import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div className='Container'>
                <ul className='NavLinks'>
                    <li>
                        <Link to='/' className='Logo'>ToDo List</Link>
                    </li>
                    <li>
                        <Link to='/'>Log Out</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;