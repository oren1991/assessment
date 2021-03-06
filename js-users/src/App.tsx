import { UserIndex } from "./pages/UserIndex";
import { UserNew } from "./pages/UserNew";
import { UserEdit } from "./pages/UserEdit";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
const client = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={client}>
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <UserIndex />
                        </Route>
                        <Route exact path="/new">
                            <UserNew />
                        </Route>
                        <Route exact path="/edit/:userId">
                            <UserEdit></UserEdit>
                        </Route>
                        <Route>
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </QueryClientProvider>
    );
}

export default App;
