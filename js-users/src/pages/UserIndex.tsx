import { useHistory, useLocation } from "react-router-dom";
import { Paginator } from "../components/Paginator";
import { UserListItem } from "../components/UserListItem";

import { useGetUsers } from "../utils/hooks/useGetUsers";
export const UserIndex = () => {
    const history = useHistory();
    const { data } = useGetUsers();
    const query = new URLSearchParams(useLocation().search);

    const handlePageChange = (page: number) => {
        history.push(`/?page=${page}`);
    };

    return (
        <div data-testid="user-index">
            <Paginator
                data={data ? data : []}
                basePage={query.get("page")}
                perPage={10}
                onPageChange={handlePageChange}
            >
                {(users) => {
                    return users.map((user) => (
                        <UserListItem key={user.id} user={user} />
                    ));
                }}
            </Paginator>
        </div>
    );
};
