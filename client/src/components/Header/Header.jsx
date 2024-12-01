import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [userData, setUserData] = useState("");
  const [isAdmin, isSetAdmin] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUserData(userData);
      const profile = userData.userProfile;
      const type = userData.userType;
      isSetAdmin(type);
      setProfile(profile);
    } else {
      console.log("userData not found");
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            {userData ? (
              <div className="relative">
                {/* Avatar Button */}
                <button
                  className="flex items-center space-x-2 focus:outline-none"
                  onClick={toggleDropdown}
                >
                  <img
                    http
                    src={`http://localhost:5001${profile}`}
                    alt="User Avatar"
                    className="h-10 w-10 rounded-full border-2 border-gray-500"
                  />
                  <h1>{userData.fullName}</h1>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg">
                    <ul className="py-2 text-gray-700">
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <button
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/categories"
                  className={({ isActive }) =>
                    `block ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  All Categories
                </NavLink>
              </li>

              {userData ? (
                <>
                  {isAdmin === "ADMIN" ? (
                    <>
                      <li>
                        <NavLink
                          to="/add-products"
                          className={({ isActive }) =>
                            `block ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          Add Products
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/orders"
                          className={({ isActive }) =>
                            `block ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          Orders
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/all-quarries"
                          className={({ isActive }) =>
                            `block ${
                              isActive ? "text-orange-700" : "text-gray-700"
                            } py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                          }
                        >
                          All Quarries
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <li>
                      <NavLink
                        to="/product-query"
                        className={({ isActive }) =>
                          `block ${
                            isActive ? "text-orange-700" : "text-gray-700"
                          } py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                      >
                        Product Query
                      </NavLink>
                    </li>
                  )}
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
