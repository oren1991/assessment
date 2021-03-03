import React from "react";
import { useParams } from "react-router-dom";
import { UserForm } from "../components/UserForm";
import { useGetUser } from "../utils/hooks/userGetUser";
import { useUpdateUser } from "../utils/hooks/useUpdateUser";

export const UserEdit = () => {
    const { userId } = useParams<{ userId: string }>();
    const { data: user } = useGetUser(userId);
    const updateUser = useUpdateUser(user?.id);
    return (
        <div>
            {user && <UserForm user={user} mutation={updateUser}></UserForm>}
        </div>
    );
};
