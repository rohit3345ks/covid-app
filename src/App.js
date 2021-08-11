import { Link, Route, Switch, Redirect } from "react-router-dom";
import { ROUTES } from "./Shared";
import { Home,PageNotFound } from "./Components";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to={ROUTES.HOME} className="navbar-brand">COVID APP</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link className="nav-link" to={ROUTES.HOME}> First </Link>
              <Link className="nav-link" to={ROUTES.HOME}> Second </Link>
              <Link className="nav-link" to={ROUTES.HOME}> Third </Link>
              <Link className="nav-link" to={ROUTES.HOME}> Fourth </Link>
              <Link className="nav-link" to={ROUTES.HOME}> Fifth </Link>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.PAGE_NOT_FOUND}>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
