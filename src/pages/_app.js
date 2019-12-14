import React from "react";
import IndexPage from "./index";
import { Switch, Route, Router } from "./../util/router.js";
import { ProvideAuth } from "./../util/auth.js";
import AboutPage from '../components/AboutPage'
import StatesSection from "../components/StatesSection";
import Register from "../components/Register";
import ContactUs from "../components/ContactUs";


function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/home" component={IndexPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/states" component={StatesSection} />
          <Route exact path="/contactus" component={ContactUs} />
          {/* <Route exact path="/contact" component={Contact} /> */}
          <Route
            component={({ location }) => {
              return (
                <div
                  style={{
                    padding: "50px",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  The page <code>{location.pathname}</code> could not be found.
                </div>
              );
            }}
          />
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
