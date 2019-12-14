import React, { useState } from "react";
import NavbarContainer from "./NavbarContainer";
import { Link } from "./../util/router.js";
// import { useRouter } from "./../util/router.js";
// import SectionButton from "./SectionButton";
// import { useAuth } from "./../util/auth.js";
// import "./Navbar.scss";

function Navbar(props) {
  // const auth = useAuth();
  // const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <NavbarContainer spaced={props.spaced} color={props.color}>
        <div className="container" style={{fontWeight:'500'}}>
          <div className="navbar-brand">
            <div className="navbar-item">
              <Link to="/">
                <img className="image" src={props.logo || Text} alt="Logo" />
              </Link>
            </div>
            <div
              className={
                "navbar-burger burger" + (menuOpen ? " is-active" : "")
              }
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
            <div className="navbar-end">
            <Link className="navbar-item" to="/home">
                Home
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <a
                className="navbar-item"
                target="_blank"
                href="https://medium.com"
                rel="noopener noreferrer"
              >
                Blog
              </a>
              <Link className="navbar-item" to="/register">
               Register
              </Link>
              <Link className="navbar-item" to="/states">
                States
              </Link>
              <Link className="navbar-item" to="/contactus">
              contact us
            </Link>

              {/* {auth.user && (
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to="/">
                  Account
                </Link>
                <div className="navbar-dropdown is-boxed">
                  <Link className="navbar-item" to="/dashboard">
                    Dashboard
                  </Link>
                  <Link
                    className="navbar-item"
                    to="/signout"
                    onClick={e => {
                      e.preventDefault();
                      auth.signout();
                    }}
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            )} */}

              {/* {!auth.user && (
              <>
                <Link className="navbar-item" to="/signin">
                  Sign in
                </Link>
                <div className="navbar-item">
                  <SectionButton
                    parentColor={props.color}
                    size="normal"
                    onClick={() => {
                      router.push("/signup");
                    }}
                  >
                    Sign Up
                  </SectionButton>
                </div>
              </>
            )} */}
            </div>
          </div>
        </div>
      </NavbarContainer>
  );
}

export default Navbar;
