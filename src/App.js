import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/:username" component={User} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
