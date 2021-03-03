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
        <div>
            <Paginator
                data={data ? data : []}
                basePage={query.get("page")}
                nextPage={(page, setPage, maxPage) => {
                    const newPage = Math.min(page + 1, maxPage);
                    setPage(newPage);
                    history.push(`/?page=${newPage}`);
                }}
                prevPage={(page, setPage, minPage) => {
                    const newPage = Math.max(page - 1, minPage);
                    setPage(newPage);
                    history.push(`/?page=${newPage}`);
                }}
            >
                {(users) => {
                    return users.map((user) => {
                        return (
                            <UserListItem user={user}>
                                <div
                                    style={{
                                        textDecoration:
                                            user.status === "active"
                                                ? "none"
                                                : " line-through",
                                    }}
                                >
                                    {user.first_name} {user.last_name}
                                </div>
                                <span>{user.created_at}</span>
                            </UserListItem>
                        );
                    });
                }}
            </Paginator>
        </div>
    );
};
