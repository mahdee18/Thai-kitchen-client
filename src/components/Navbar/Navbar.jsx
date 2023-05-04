import { useContext, useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
      logOut()
        .then(() => {
          toast.success("User logout successfully");
        })
        .catch((error) => {
          console.error(error.message);
          toast.error(error.message);
        });
    };






    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-200 px-12 py-4">
            <div className="flex items-center flex-shrink-0 mr-6">
                <Link to="/">
                    <span className="text-purple-700 font-bold text-2xl">
                        ThaiKitchen
                    </span>
                </Link>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-slate-700 border-gray-400 hover:text-purple-700 hover:border-white"
                    onClick={toggleMenu}
                >
                    <FaBars className="h-6 w-6" />
                </button>
            </div>
            <div
                className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto sm:text-center ${showMenu ? "block" : "hidden"
                    }`}
            >
                <div className="text-lg lg:flex-grow text-center">
                    <NavLink
                        to="/"
                        className="block font-medium mt-4 lg:inline-block lg:mt-0 text-blue-700 mr-4"
                        activeClassName="active">Home

                    </NavLink>
                    <NavLink
                        to="/blog"
                        className="block font-medium mt-4 lg:inline-block lg:mt-0 text-blue-700  mr-4"
                        activeClassName="active"
                    >
                        Blog
                    </NavLink>
                </div>
                {user ? (
            <div className="flex items-center justify-center gap-6">
              <img
              title={user.displayName}
                className="w-12 h-12 rounded-full"
                src={user.photoURL}
                alt=""
              />
              <button
                onClick={handleLogOut}
                className="btn border-0 text-white bg-success px-4 py-2 font-bold rounded-md flex items-center gap-1"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn border-0 text-white bg-success px-4 py-2 font-bold rounded-md flex items-center gap-1">
                Login
              </button>
            </Link>
          )}
            </div>
        </nav>
    );
};

export default Navbar;