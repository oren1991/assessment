import { updateUser } from "./../api/users";
import { useMutation } from "react-query";
import { User } from "../../custom";
import { useQueryClient } from "react-query";

const update = async (user: User) => {
    const { data } = await updateUser(user);
    return data;
};
export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation<User, Error, any>((user: User) => update(user), {
        retry: false,
        onSuccess: () => queryClient.invalidateQueries("users"),
    });
};
