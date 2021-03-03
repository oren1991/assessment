import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Paginator } from "../components/Paginator";
import { UserListItem } from "../components/UserListItem";
import { User } from "../custom";

import { useGetUsers } from "../utils/hooks/useGetUsers";
import { useUpdateUser } from "../utils/hooks/useUpdateUser";
export const UserIndex = () => {
    const history = useHistory();
    const { data } = useGetUsers();
    const userMutation = useUpdateUser();
    const query = new URLSearchParams(useLocation().search);

    const toggleStatus = (user: User) => ({
        ...user,
        status: user.status === "active" ? "locked" : "active",
    });
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
                            <UserListItem
                                onClick={() =>
                                    userMutation.mutate(toggleStatus(user))
                                }
                            >
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
