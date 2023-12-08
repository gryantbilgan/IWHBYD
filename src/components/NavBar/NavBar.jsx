import { useNavigate } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogOut() {
    userService.logOut();
    setUser(null);
    navigate("/");
  }

  return (
    <nav className="text-white">
      <button
        className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => navigate("/generate")}
      >
        Recruit
      </button>
      &nbsp; | &nbsp;
      <button
        className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => navigate("/weapons")}
      >
        Weapons
      </button>
      &nbsp; | &nbsp;
      <button
        className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => navigate("/characters")}
      >
        Characters
      </button>
      &nbsp; | &nbsp;
      <button
        className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => navigate("/books")}
      >
        Books
      </button>
      &nbsp; | &nbsp;
      <span className="neon-text">Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <button
        className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </nav>
  );
}
