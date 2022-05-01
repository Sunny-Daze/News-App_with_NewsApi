import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav
        style={{
          backgroundColor: "#FF3CAC",
          backgroundImage:
            "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
            "color":"black",
            "fontWeight":"10px"
        }}
        className="navbar fixed-top navbar-expand-lg navbar-light"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News Mongo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/Entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/ContactMe">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
