import "./App.css";
import { UserIndex } from "./pages/UserIndex";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/users">
                        <UserIndex />
                    </Route>
                    <Route>
                        <Redirect to="/users" />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
