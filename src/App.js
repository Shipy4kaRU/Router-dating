import { Route } from "react-router-dom";
import Header from "./components/Header";
import ContactUs from "./pages/Contact-us";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/articles" exact>
              <Articles />
            </Route>
            <Route path="/articles/:articleId">
              <Article />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
