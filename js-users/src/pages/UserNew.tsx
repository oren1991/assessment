import React from "react";
import { UserForm } from "../components/UserForm";
import { User } from "../custom";
import { useCreateUser } from "../utils/hooks/useCreateUser";

export const UserNew = () => {
    const user: User = { first_name: "", last_name: "" };
    const createUser = useCreateUser();
    return (
        <div>
            <UserForm user={user} mutation={createUser} />
        </div>
    );
};