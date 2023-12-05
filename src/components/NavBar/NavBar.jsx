import { useNavigate } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  const navigate = useNavigate();

  function handleLogOut() {
    userService.logOut();
    setUser(null);
    navigate('/');
  }

  return (
    <nav className='text-white'>
      <button onClick={() => navigate('/createSpartan')}>Creation</button>
      &nbsp; | &nbsp;
      <button onClick={() => navigate('/weapons')}>Weapons</button>
      &nbsp; | &nbsp;
      <button onClick={() => navigate('/characters')}>Characters</button>
      &nbsp; | &nbsp;
      <button onClick={() => navigate('/books')}>Books</button>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;<button onClick={handleLogOut}>Log Out</button>
    </nav>
  );
}