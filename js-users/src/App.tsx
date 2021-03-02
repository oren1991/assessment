import "./App.css";
import { useGetUsers } from "./utils/hooks/useGetUsers";
import { UserListItem } from "./components/UserListItem";
import { Paginator } from "./components/Paginator";
function App() {
    const { data } = useGetUsers();
    return (
        <div className="App">
            <Paginator data={data ? data : []}>
                {(users) => {
                    return users.map((user) => {
                        return <UserListItem>{user.first_name}</UserListItem>;
                    });
                }}
            </Paginator>
        </div>
    );
}

export default App;
