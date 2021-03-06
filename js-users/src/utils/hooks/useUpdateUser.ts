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
export const useUpdateUser = (userid: number | null | undefined) => {
    const queryClient = useQueryClient();
    return useMutation<
        User,
        { first_name?: string[]; last_name?: string[] },
        Partial<User>
    >((user: Partial<User>) => update(user), {
        retry: false,
        onSuccess: () => {
            if (userid) {
                queryClient.invalidateQueries(`user_${userid}`);
                queryClient.invalidateQueries("users");
            }
        },
    });
};
