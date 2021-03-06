import { useHistory } from "react-router-dom";
import { updateUser } from "./../api/users";
import { useMutation } from "react-query";
import { User } from "../../custom";
import { useQueryClient } from "react-query";

const update = async (user: Partial<User>) => {
    try {
        const { data } = await updateUser(user);
        return data;
    } catch (err) {
        if (err?.response?.data) {
            throw err.response.data;
        } else {
            throw new Error("Unexpected Error");
        }
    }
};
export const useUpdateUser = (
    userid: number | null | undefined,
    redirect?: boolean
) => {
    const queryClient = useQueryClient();
    const history = useHistory();
    return useMutation<
        User,
        { first_name?: string[]; last_name?: string[]; message?: string },
        Partial<User>
    >((user: Partial<User>) => update(user), {
        retry: false,
        onSuccess: () => {
            if (userid) {
                queryClient.invalidateQueries(`user_${userid}`);
                queryClient.invalidateQueries("users");
                redirect && history.goBack();
            }
        },
    });
};
