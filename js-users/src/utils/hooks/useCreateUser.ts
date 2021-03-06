import { createUser } from "./../api/users";
import { useMutation } from "react-query";
import { User } from "../../custom";
import { useQueryClient } from "react-query";
import { useHistory } from "react-router";

const create = async (user: User) => {
    try {
        const { data } = await createUser(user);
        return data;
    } catch (err) {
        if (err?.response?.data) {
            throw err.response.data;
        } else {
            throw new Error("Unexpected Error");
        }
    }
};
export const useCreateUser = (redirect?: boolean) => {
    const queryClient = useQueryClient();
    const history = useHistory();
    return useMutation<
        User,
        { first_name?: string[]; last_name?: string[] },
        any
    >((user: User) => create(user), {
        retry: false,
        onSuccess: () => {
            queryClient.invalidateQueries("users");
            redirect && history.push("/");
        },
    });
};
