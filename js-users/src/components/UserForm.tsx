import React from "react";
import { User } from "../custom";
import { useForm } from "../utils/hooks/useForm";

type Props = {
    user: User;
    mutation: { mutate: (user: User) => void; error: Error | null };
};

export const UserForm: React.FC<Props> = ({ user, mutation }) => {
    const [userForm, setUser] = useForm<User>({ status: "active", ...user });
    return (
        <form data-testid="user-form">
            {JSON.stringify(mutation.error)}
            <label htmlFor="first_name">First name: </label>
            <input
                data-testid="first-name"
                onChange={setUser}
                name="first_name"
                value={userForm.first_name}
            />
            <label htmlFor="last_name">Last name: </label>
            <input
                data-testid="last-name"
                onChange={setUser}
                name="last_name"
                value={userForm.last_name}
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    mutation.mutate({
                        id: userForm.id,
                        first_name: userForm.first_name,
                        last_name: userForm.last_name,
                    });
                }}
            >
                Submit
            </button>
        </form>
    );
};
