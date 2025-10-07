import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="  bg-base-100 shadow-sm">
        <div className="flex justify-between items-center container mx-auto py-3">
          <div className="">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to={`to`}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={`/about`}>About</NavLink>
                </li>
                <li>
                  <NavLink to={`/course`}>Course</NavLink>
                </li>
                <li>
                  <NavLink to={`/blog`}>Blog</NavLink>
                </li>

                <li>
                  <NavLink to={`/contact`}>Contuct</NavLink>
                </li>
              </ul>
            </div>
            <p className="btn btn-ghost text-2xl">
              We<span className="text-blue-600">bex</span>
            </p>
          </div>
      {/* Input */}
          <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>

          <div className="  hidden lg:flex">
            <ul className="flex items-center gap-8">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " text-md font-medium text-blue-600 duration-300"
                      : "text-md font-medium"
                  }
                  to={`/`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " text-md font-medium text-blue-600 duration-300"
                      : "text-md font-medium"
                  }
                  to={`/about`}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " text-md font-medium text-blue-600 duration-300"
                      : "text-md font-medium"
                  }
                  to={`/course`}
                >
                  Course
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " text-md font-medium text-blue-600 duration-300"
                      : "text-md font-medium"
                  }
                  to={`/blog`}
                >
                  Blog
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? " text-md font-medium text-blue-600 duration-300"
                      : "text-md font-medium"
                  }
                  to={`/contact`}
                >
                  Contuct
                </NavLink>
              </li>
            </ul>
          </div>
          <div className=" ">
            <button className=" px-5 py-3 rounded-xl bg-blue-600 text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
