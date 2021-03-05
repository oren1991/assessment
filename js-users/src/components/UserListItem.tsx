import { User } from "../custom";
import { useUpdateUser } from "../utils/hooks/useUpdateUser";
import React from "react";

type Props = {
    user: User;
};

export const UserListItem: React.FC<Props> = ({ user }) => {
    const userMutation = useUpdateUser(user.id);
    const toggleStatus: (user: User) => User = (user: User) => ({
        ...user,
        status: user.status === "active" ? "locked" : "active",
    });

    return (
        <div data-testid="user-list-item">
            {userMutation.isLoading ? (
                "Updating user..."
            ) : (
                <div>
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
                    <button
                        onClick={() => userMutation.mutate(toggleStatus(user))}
                    >
                        {user.status === "active" ? "Lock user" : "Unlock user"}
                    </button>
                </div>
            )}
        </div>
    );
};
