import { Switch, Route } from "react-router-dom";
import InfluencerAccess from "./Frontend/InfluencerAccess";
import BrandLogin from "./Frontend/BrandLogin";
import MainPage from "./Frontend/MainPage";
import Admin from "./Frontend/Admin";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/InfluencerAccess">
          <InfluencerAccess />
        </Route>

        <Route path="/BrandLogin">
          <BrandLogin />
        </Route>

        <Route path="/Admin">
        <Admin />
        </Route>

        <Route path="/">
        <MainPage />
        </Route>

        
      </Switch>
      
    </div>
  );
}

export default App;
