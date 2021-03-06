import { User } from "../custom";
import { useUpdateUser } from "../utils/hooks/useUpdateUser";
import React from "react";
import {
    UserListItemContainer,
    UserListItemDate,
    UserListItemInfo,
    UserListItemName,
    UserListItemLockButton,
} from "./UserListItem.style";

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
        <UserListItemContainer data-testid="user-list-item">
            <>
                {userMutation.isLoading ? (
                    "Updating user..."
                ) : (
                    <UserListItemInfo>
                        <UserListItemName
                            style={{
                                textDecoration:
                                    user.status === "active"
                                        ? "none"
                                        : " line-through",
                            }}
                        >
                            {`${user.first_name} ${user.last_name}`}
                        </UserListItemName>
                        <UserListItemDate>
                            Created at:{" "}
                            {new Date(user.created_at!).toLocaleString("hu-HU")}
                        </UserListItemDate>
                    </UserListItemInfo>
                )}
                <UserListItemLockButton
                    onClick={() => userMutation.mutate(toggleStatus(user))}
                >
                    {user.status === "active" ? "Lock user" : "Unlock user"}
                </UserListItemLockButton>
            </>
        </UserListItemContainer>
    );
};
