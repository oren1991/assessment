import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Paginator } from "../components/Paginator";
import { UserListItem } from "../components/UserListItem";

import { useGetUsers } from "../utils/hooks/useGetUsers";
export const UserIndex = () => {
    const history = useHistory();
    const { data } = useGetUsers();
    const query = new URLSearchParams(useLocation().search);

    return (
        <div data-testid="user-index">
            <Paginator
                data={data ? data : []}
                basePage={query.get("page")}
                onPageChange={(page) => history.push(`/?page=${page}`)}
            >
                {(users) => {
                    return users.map((user) => (
                        <UserListItem key={user.id} user={user}>
                            <div
                                style={{
                                    textDecoration:
                                        user.status === "active"
                                            ? "none"
                                            : " line-through",
                                }}
                            >
                                <div>First name: {user.first_name}</div>
                                <div>Last name: {user.last_name}</div>
                                <div>Created at: {user.created_at}</div>
                            </div>
                        </UserListItem>
                    ));
                }}
            </Paginator>
        </div>
    );
};
