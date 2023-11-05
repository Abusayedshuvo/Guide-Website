import { Link, NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
// import Sidebar from "./Sidebar";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => Swal.fire("Log out Success!", "", "success"))
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between min-w-[300px]">
            <Link
              to="/"
              className="flex items-center font-bold dark:text-white"
            >
              <img className="w-20" src={logo} alt="Logo" />
              <span className="text-4xl pl-4 text-primary"> Guide Nook</span>
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-collapse-basic"
                aria-controls="navbar-collapse-basic"
                aria-label="Toggle navigation"
              ></button>
            </div>
          </div>

          <div
            id="navbar-collapse-basic"
            className="hidden basis-full grow sm:block"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              <NavLink to="/" className="font-medium text-blue-500">
                Home
              </NavLink>
              <NavLink
                to="/services"
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
              >
                Services
              </NavLink>

              <Dropdown></Dropdown>

              {user ? (
                <>
                  {user?.displayName && (
                    <p className="pe-3 font-medium">{user?.displayName}</p>
                  )}
                  {user?.photoURL && (
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  )}

                  <button
                    onClick={handleLogOut}
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary text-white hover:bg-primary/80  transition-all text-sm "
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <Link
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary text-white hover:bg-primary/80  transition-all text-sm "
                  to="/login"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </nav>

        {/* <Sidebar></Sidebar> */}
      </header>
    </>
  );
};

export default Header;
