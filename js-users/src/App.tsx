import { UserIndex } from "./pages/UserIndex";
import { UserNew } from "./pages/UserNew";
import { UserEdit } from "./pages/UserEdit";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import {
    AppNavBar,
    AppContainer,
    AppBody,
    AppNavLinks,
    AppNavLink,
} from "./style/App.styled";
const client = new QueryClient();
function App() {
    return (
        <QueryClientProvider client={client}>
            <Router>
                <AppContainer>
                    <AppNavBar>
                        <AppNavLinks>
                            <AppNavLink>
                                <Link to="/">User List</Link>
                            </AppNavLink>
                            <AppNavLink>
                                <Link to="/new">New User</Link>
                            </AppNavLink>
                        </AppNavLinks>
                    </AppNavBar>
                    <AppBody>
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
                    </AppBody>
                </AppContainer>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
