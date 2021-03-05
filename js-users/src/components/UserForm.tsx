import React from "react";
import { UseMutationResult } from "react-query";
import { User } from "../custom";
import { useForm } from "../utils/hooks/useForm";

type Props = {
    user: User;
    mutation: UseMutationResult<User, Error, any, unknown>;
};

export const UserForm: React.FC<Props> = ({ user, mutation }) => {
    const [userForm, setUser] = useForm<User>({ status: "active", ...user });
    return (
        <form data-testid="user-form">
            {JSON.stringify(mutation.error)}
            <label htmlFor="first_name">First name: </label>
            <input
                onChange={setUser}
                name="first_name"
                value={userForm.first_name}
            />
            <label htmlFor="last_name">Last name: </label>
            <input
                onChange={setUser}
                name="last_name"
                value={userForm.last_name}
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    mutation.mutate(userForm);
                }}
            >
                Submit
            </button>
        </form>
    );
};
