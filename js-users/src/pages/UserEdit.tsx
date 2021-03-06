import { useParams } from "react-router-dom";
import { UserForm } from "../components/UserForm";
import { useGetUser } from "../utils/hooks/useGetUser";
import { useUpdateUser } from "../utils/hooks/useUpdateUser";

export const UserEdit = () => {
    const { userId } = useParams<{ userId: string }>();
    const { data: user } = useGetUser(userId);
    const updateUser = useUpdateUser(user?.id, true);
    return (
        <div
            style={{ display: "flex", justifyContent: "center" }}
            data-testid="user-edit-form"
        >
            {user && <UserForm user={user} mutation={updateUser}></UserForm>}
        </div>
    );
};
