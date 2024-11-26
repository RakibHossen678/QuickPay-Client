import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";

const Sidebar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l shadow-xl ">
      <a href="#" className="text-4xl font-semibold text-blue-700">
        QuickPay
      </a>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <div>
          <nav className="border-b-2 pb-3">
            <a className="flex items-center px-4 py-2  bg-gray-100 rounded-md ">
              <span className="mx-4 font-medium">Send Money</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md  hover:bg-gray-100  hover:text-gray-700">
              <span className="mx-4 font-medium">Cash-Out</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md  hover:bg-gray-100  hover:text-gray-700">
              <span className="mx-4 font-medium">Cash-in</span>
            </a>

            <a className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md  hover:bg-gray-100  hover:text-gray-700">
              <span className="mx-4 font-medium">Balance</span>
            </a>
            <a className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md  hover:bg-gray-100  hover:text-gray-700">
              <span className="mx-4 font-medium">Transaction</span>
            </a>
          </nav>

          <div>
            {user ? (
              <button
                onClick={logout}
                className="flex items-center px-4 py-2 mt-5 ml-4 transition-colors duration-300 transform rounded-md  hover:bg-gray-100 font-semibold  hover:text-gray-700 w-full "
              >
                Logout
              </button>
            ) : (
              <div>
                <NavLink
                  to="/login"
                  className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md  hover:bg-gray-100  hover:text-gray-700"
                >
                  <span className="mx-4 font-medium">Login</span>
                </NavLink>
                <NavLink
                  to="register"
                  className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-md  hover:bg-gray-100  hover:text-gray-700"
                >
                  <span className="mx-4 font-medium">Register</span>
                </NavLink>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center px-4 -mx-2">
          <img
            className="object-cover mx-2 rounded-full h-9 w-9"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="avatar"
          />
          <h4 className="mx-2 font-medium text-gray-800 ">{user.name}</h4>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
