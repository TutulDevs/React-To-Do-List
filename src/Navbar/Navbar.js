import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div className='Container'>
                <ul className='NavLinks'>
                    <li>
                        <Link to='/home' className='Logo'>ToDo List</Link>
                    </li>
                    <li>
                        <Link to='/logout'>Log Out</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;