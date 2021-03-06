import React from "react";
import { UserForm } from "../components/UserForm";
import { User } from "../custom";
import { useCreateUser } from "../utils/hooks/useCreateUser";

export const UserNew = () => {
    const user: User = { first_name: "", last_name: "" };
    const createUser = useCreateUser(true);
    return (
        <div
            style={{ display: "flex", justifyContent: "center" }}
            data-testid="user-new-form"
        >
            <UserForm user={user} mutation={createUser} />
        </div>
    );
};
