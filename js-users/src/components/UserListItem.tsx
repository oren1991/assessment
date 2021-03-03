import { User } from "../custom";
import { useUpdateUser } from "../utils/hooks/useUpdateUser";
import React from "react";

type Props = {
    children: React.ReactNode;
    user: User;
};

export const UserListItem: React.FC<Props> = ({ children, user }) => {
    const userMutation = useUpdateUser();
    const toggleStatus = (user: User) => ({
        ...user,
        status: user.status === "active" ? "locked" : "active",
    });

    return (
        <div>
            {userMutation.isLoading ? (
                "Updating user..."
            ) : (
                <div>
                    {children}
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
