import React from "react";
import { User } from "../custom";
import { useForm } from "../utils/hooks/useForm";
import {
    UserFormForm,
    UserFormLabel,
    UserFormInput,
    UserFormSaveButton,
    UserFormInputContainer,
} from "./style/UserForm.styled";

type Props = {
    user: User;
    mutation: {
        mutate: (user: User) => void;
        isLoading: boolean;
        error: { first_name?: string[]; last_name?: string[] } | null;
    };
};

export const UserForm: React.FC<Props> = ({ user, mutation }) => {
    const [userForm, setUser] = useForm<User>({ status: "active", ...user });
    return (
        <UserFormForm data-testid="user-form">
            {mutation.isLoading ? (
                "Updating user..."
            ) : (
                <>
                    <UserFormInputContainer>
                        <UserFormLabel htmlFor="first_name">
                            First name{" "}
                            <span style={{ color: "red" }}>
                                {mutation.error?.first_name?.join(", ")}
                            </span>
                        </UserFormLabel>
                        <UserFormInput
                            data-testid="first-name"
                            onChange={setUser}
                            name="first_name"
                            value={userForm.first_name}
                            invalid={!!mutation.error?.first_name}
                        />
                        <UserFormLabel htmlFor="last_name">
                            Last name{" "}
                            <span style={{ color: "red" }}>
                                {mutation.error?.last_name?.join(", ")}
                            </span>
                        </UserFormLabel>
                        <UserFormInput
                            data-testid="last-name"
                            onChange={setUser}
                            name="last_name"
                            value={userForm.last_name}
                            invalid={!!mutation.error?.last_name}
                        />
                    </UserFormInputContainer>
                    <UserFormSaveButton
                        onClick={(e) => {
                            e.preventDefault();
                            mutation.mutate({
                                id: userForm.id,
                                first_name: userForm.first_name,
                                last_name: userForm.last_name,
                                status: userForm.status,
                            });
                        }}
                    >
                        Save
                    </UserFormSaveButton>
                </>
            )}
        </UserFormForm>
    );
};
