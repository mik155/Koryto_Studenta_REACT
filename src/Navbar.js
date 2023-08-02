import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

const Navbar = () =>
{
    return (
    <header>
        <Link to="/">
        <FontAwesomeIcon icon={faBowlFood} />            
        Koryto Studenta
        </Link>
    </header>
    );
}

export default Navbar;