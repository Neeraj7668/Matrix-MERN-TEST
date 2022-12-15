import RefPage from "./components/RefPage";
import "./App.css";
import ClassComponent from "./components/class/ClassComponent";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UseCallBackPage from "./components/UseCallBackPage/UseCallBackPage";
import RequiredForm from "./components/RequiredForm";
import { ContextExampleComp } from "./components/ContextExampleComp";

const TestPage = ({ name }) => (
  <div>
    <h1>Param Data: {name}</h1>
  </div>
);
const Menu = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/pages/1232243">Param example one</Link>
      </li>
      <li>
        <Link to="/pages/param_page_2">Param example Two</Link>
      </li>
    </ul>
  </nav>
);
const App = () => {
  return (
    <div className="App">
      {/* Required Form Validation */}
      <RequiredForm />
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <TestPage name="Home Page" />}
            />
            <Route
              path="/pages/:id"
              render={({ match }) => <TestPage name={match.params.id} />}
            />
            <Route render={() => <TestPage name="NOT FOUND!" />} />
          </Switch>
        </div>
      </Router>

      <RefPage />
      <ClassComponent />

      <UseCallBackPage />

      <ContextExampleComp />
    </div>
  );
};

export default App;
