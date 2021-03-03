import { User } from "../custom";
import { useUpdateUser } from "../utils/hooks/useUpdateUser";

type Props = {
    children: React.ReactNode;
    user: User;
};

export const UserListItem = ({ children, user }: Props) => {
    const userMutation = useUpdateUser();
    const toggleStatus = (user: User) => ({
        ...user,
        status: user.status === "active" ? "locked" : "active",
    });

    return (
        <div onClick={() => userMutation.mutate(toggleStatus(user))}>
            {userMutation.isLoading ? "Updating user..." : children}
        </div>
    ) as JSX.Element;
};
